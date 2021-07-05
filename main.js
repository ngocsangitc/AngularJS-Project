var app = angular.module('myApp', ['ngRoute']);
app.run(function ($rootScope) {
  // Mảng lưu danh sách sản phẩm khi thêm vào giỏ hàng
  $rootScope.UserCart = [];

  // Số lượng sản phẩm trong giỏ hàng
  $rootScope.CartQuantity = 0;
})

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './home.html',
      controller: 'myCtrl',
    })
    .when('/chitietsanpam', {
      templateUrl: './html/chitietsanpham.html',
      controller: '.detailCtrl',
    })
    .when('/giohang', {
      templateUrl: './html/giohang.html',
      controller: 'cartCtrl'
    })
    // .when('/thanhtoan', {
    //   templateUrl  : './html/thanhtoan.html'
    // })
    .when('/formdangki', {
      templateUrl: './html/formdangki.html',
      controller: 'registerCtrl',
    })

    .otherwise({
      redirectTo: '/',
    });
});



//---------------------------------- HOME ---------------------------
app.controller('myCtrl', function ($scope, $rootScope) {
  // cà phê và capuchina
  $scope.b = [
    {
      h3: 'Vị vừa đắng vừa ngọt liệu bạn đã thử chưa?',
      contents: 'Chào buổi sáng với một ly cốc cà phê hay là một cốc capuchino sẽ  làm cho ta thêm tỉnh táo và làm việc hiệu quả. Hãy thưởng thức ngay nào',
      image: './img/about.jpg',
    },

    {
      h3: 'Bánh Tráng Trộn Món Ăn Yêu Thích Của Các Bạn Trẻ',
      contents: ' Buổi sáng với một ly cốc cà phê hay là một cốc capuchino sẽ  làm cho ta thêm tỉnh táo và làm việc hiệu quả. Hãy thưởng thức ngay nào',
      image: './img/bt1.jpg',

    },

    {
      h3: 'Ai Tà Tữa hông, tà tữa ngon rẻ uống vào là mê ly',
      contents: 'Mỗi Buổi sáng với một ly cốc cà phê hay là một cốc capuchino sẽ  làm cho ta thêm tỉnh táo và làm việc hiệu quả. Hãy thưởng thức ngay nào',
      image: './img/t6.jpg',
    },
  ];


  //----------------------------------------------------
  //các sản phẩm nhỏ nhỏ 
  $scope.section = [
    {
      id: 0,
      img: './img/1 (5).jpg',
      content: 'Một góc học tập lý tưởng cho ngày cuối tuần khi vừa nhâm nhi cốc capuchino và vừa thả tâm hồn ta vào học',
      name: 'Capuchino Lý Tưởng',
      price: 30000,
    },
    {
      id: 1,
      img: './img/1 (8).jpg',
      content: 'Đâu Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur explicabo unde fugiat in minus perspiciatis',
      name: 'Thái Xanh',
      price: 30000,
    },
    {
      id: 2,
      img: './img/1 (9).jpg',
      content: 'Nói Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur explicabo unde fugiat in minus perspiciatis',
      name: 'Cà phê Sữa',
      price: 30000,
    },
    {
      id: 3,
      img: './img/1 (11).jpg',
      content: 'Biết Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur explicabo unde fugiat in minus perspiciatis',
      name: 'Ca Cao',
      price: 30000,
    },
    {
      id: 4,
      img: './img/t (1).jpg',
      content: 'Hãy Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur explicabo unde fugiat in minus perspiciatis',
      name: 'SoDa Kem',
      price: 29000,
    },
    {
      id: 5,
      img: './img/t (2).jpg',
      content: 'Nếu Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur explicabo unde fugiat in minus perspiciatis',
      name: 'Sữa Chua Đá Thạch',
      price: 28000,
    },
    {
      id: 6,
      img: './img/t (3).jpg',
      content: 'Khi Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur explicabo unde fugiat in minus perspiciatis',
      name: 'Sữa Tươi Đường Đen ',
      price: 35000,
    },
    {
      id: 7,
      img: './img/t (4).jpg',
      content: 'Đúng Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur explicabo unde fugiat in minus perspiciatis',
      name: 'Trà',
      price: 40000,
    },
    {
      id: 8,
      img: './img/t12.png',
      content: 'Giữa Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur explicabo unde fugiat in minus perspiciatis',
      name: 'Nước Ép',
      price: 49000,
    },
    {
      id: 9,
      img: './img/t1.jpg',
      content: 'Tin Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur explicabo unde fugiat in minus perspiciatis',
      name: 'Nước Ép Cam',
      price: 39000,
    },

    {
      id: 10,
      img: './img/t2.jpg',
      content: 'Một bức hình với bao nhiêu tâm huyết dồn nén để chụp được nó ',
      name: 'Trà Đào  ',
      price: 30000,
    },
    {
      id: 11,
      img: './img/1 (14).jpg',
      content: 'Lúc Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur explicabo unde fugiat in minus perspiciatis',
      name: 'Cà phê đen',
      price: 15000,
    },
    {
      id: 12,
      img: './img/1 (15).jpg',
      content: 'Được Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur explicabo unde fugiat in minus perspiciatis',
      name: 'Cà phê sữa nóng',

      price: 20000,
    },
    {
      id: 13,
      img: './img/1 (17).jpg',
      content: 'Nhiều  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur explicabo unde fugiat in minus perspiciatis',
      name: 'Matcha',
      price: 17000,
    },
    {
      id: 14,
      img: './img/1 (18).jpg',
      content: 'Ghé Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur explicabo unde fugiat in minus perspiciatis',
      name: 'Ca Cao Nóng',
      price: 25000,
    },
    {
      id: 15,
      img: './img/bt7.jpg',
      content: 'Nhìn hấp dẫn không ạ, hãy đến với chúng tôi để thưởng thức những dĩa bánh tránh ngon  lành cành đào nha  ',
      name: 'Bánh Tráng Ngon Nhất',
      price: 24000,
    },
    {
      id: 16,
      img: './img/bt8.jpg',
      content: ' Thong Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur explicabo unde fugiat in minus perspiciatis',
      name: 'Bánh Tráng Trộn Khô Bò ',
      price: 22000,
    },
    {
      id: 17,
      img: './img/bt3.jpg',
      content: 'Tưởng tượng Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur explicabo unde fugiat in minus perspiciatis',
      name: 'Bánh Tráng Trộn Muối',
      price: 24000,
    }
  ];

  //thực hiện khi nhấn được click vào chi tiết
  $scope.chitieta = (index) => {
    $scope.detaila = {};
    $scope.detaila = $scope.section[index]
  };

  //phân trang
  $scope.pageSize = [];
  let total = Math.ceil($scope.section.length / 6);
  for (let i = 1; $scope.pageSize.push(i++) < total;);

  // $scope.currentPage = 0;
  $scope.pagination = (index) => {
    $scope.currentPage = index;
    $scope.skipB = index * 1
    $scope.skipSection = index * 6
  };

//giỏ hàng
  $scope.add = function (product) {
    // Kiểm tra xem người dùng đã add Món này bao giờ chưa
    // Chưa thì found = undefined
    let found = $rootScope.UserCart.find(ele => ele.id === product.id)

    // Nếu người dùng chưa add Món này bao giờ thì thêm nó vào mảng
    if (found === undefined) {
      // Tạo thêm thuộc tính số lượng
      product.quantity = 1;
      $rootScope.UserCart.push(product);
    }
    // Nếu người dùng đã add Món ít nhất một lần vào mảng
    // Thì duyệt qua mảng để cập nhật lại số lượng cho sản phẩm đó
    else (
      $rootScope.UserCart = $rootScope.UserCart.map(ele => {
        if (ele.id === product.id) {
          ele.quantity += 1;
        }
        return ele
      })
    )

    // Tăng số lượng giỏ hàng
    $rootScope.CartQuantity++;
  }

  



});

// footer
app.controller("ftCtrl", function ($scope) {
  $scope.ftct = [
    'Hãy đến đây để tận hưởng những món ăn ngon và nước uống độc lạ nhé.  Kính Mời!!!',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,recusandae, et nam iusto vitae sunt numquam sapiente',
  ];
  $scope.ftspan = [

    'Email: thucanchatre@gmail.com',
    'Địa chỉ: 123 Hoàng Diệu, P.11,Q. 3,Tp.HCM',
    'Liên hệ: 0858 203 137',
  ];
  $scope.ft = ['./img/fb.png', './img/gg.png', './img/pin.png', './img/tw.png'];
});


//phần này là phần tự động load trang web sau 5s
app.controller('loadCtrl', function ($scope, $interval, $window) {
  $scope.time = new Date();
  $interval(function () {
    $scope.url = new Date();
  }
    , 5000);
  $scope.reload = function () {
    $window.location.reload();
  };

});
//Kết thúc phần load


//------------------------- FORM ĐĂNG KÝ -------------------

app.controller('registerCtrl', ['$scope', function ($scope) {
  $scope.success = false;
  $scope.register = function () {
    $scope.success = true;
  }
}]);

// Kết thúc form


//tìm cách lấy được số lượng để tính thành tiền   

app.controller('cartCtrl',function ($scope) {

  $scope.tinh = function (modal) {
    modal.totalPrice = modal.price * modal.quantity;
  };

});










