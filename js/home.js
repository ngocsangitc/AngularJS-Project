var app = angular.module("myApp",[]);
app.controller("myCtrl", ($scope) => {
  // cà phê và capuchina
  $scope.b =[
    {
      h3: "Vị vừa đắng vừa ngọt liệu bạn đã thử chưa?",
      contents: "Chào buổi sáng với một ly cốc cà phê hay là một cốc capuchino sẽ  làm cho ta thêm tỉnh táo và làm việc hiệu quả. Hãy thưởng thức ngay nào",
      image: "./img/about.jpg"
    },

    {
      h3: "Bánh Tráng Trộn Món Ăn Yêu Thích Của Các Bạn Trẻ",
      contents: " Buổi sáng với một ly cốc cà phê hay là một cốc capuchino sẽ  làm cho ta thêm tỉnh táo và làm việc hiệu quả. Hãy thưởng thức ngay nào",
      image: "./img/bt1.jpg",
      name: "Bánh Tráng Trộn Món Ăn Yêu Thích Của Các Bạn Trẻ",
      
    },

    {
      h3: "Ai Tà Tữa hông, tà tữa ngon rẻ uống vào là mê ly",
      contents: "Mỗi Buổi sáng với một ly cốc cà phê hay là một cốc capuchino sẽ  làm cho ta thêm tỉnh táo và làm việc hiệu quả. Hãy thưởng thức ngay nào",
      image: "./img/t6.jpg",
      name: "Bánh Tráng Trộn Món Ăn Yêu Thích Của Các Bạn Trẻ",
    }, 
  ];
    

//----------------------------------------------------
  //các sản phẩm nhỏ nhỏ 
  $scope.section = [
  {
    img: "./img/1 (5).jpg",
    content: "Một góc học tập lý tưởng cho ngày cuối tuần khi vừa nhâm nhi cốc capuchino và vừa thả tâm hồn ta vào học",
    name: "Ý Tưởng Hay",
    price : 30000,
  },
  {
    img: "./img/1 (8).jpg",
    content: "Đâu Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur explicabo unde fugiat in minus perspiciatis",
    name: "Cà phê",
    price : 30000,
  },
  {
    img: "./img/1 (9).jpg",
    content: "Nói Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur explicabo unde fugiat in minus perspiciatis",
    name: "Cà phê",
    price : 30000,
  },
  {
    img: "./img/1 (11).jpg",
    content: "Biết Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur explicabo unde fugiat in minus perspiciatis",
    name: "Cà phê",
    price : 30000,
  },
  {
    img: "./img/t (1).jpg",
    content: "Hãy Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur explicabo unde fugiat in minus perspiciatis",
    name: "Trà Sữa",
    price : 29000,
  },
  {
    img: "./img/t (2).jpg",
    content: "Nếu Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur explicabo unde fugiat in minus perspiciatis",
    name: "Trà Sữa  ",
    price : 28000,
  },
  {
    img: "./img/t (3).jpg",
    content: "Khi Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur explicabo unde fugiat in minus perspiciatis",
    name: "Trà Sữa ",
    price : 35000,
  },
  {
    img: "./img/t (4).jpg",
    content: "Đúng Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur explicabo unde fugiat in minus perspiciatis",
    name: "Trà",
    price : 40000,
  },
  {
    img: "./img/t12.png",
    content: "Giữa Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur explicabo unde fugiat in minus perspiciatis",
    name: "Nước Ép",
    price : 49000,
  },
  {
    img: "./img/t1.jpg",
    content: "Tin Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur explicabo unde fugiat in minus perspiciatis",
    name: "Nước Cam",
    price : 39000,
  },

  {
    img: "./img/1 (13).jpg",
    content: "Một bức hình với bao nhiêu tâm huyết dồn nén để chụp được nó ",
    name: "Góc Ấn Tượng ",
    price : 30000,
  },
  {
    img: "./img/1 (14).jpg",
    content: "Lúc Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur explicabo unde fugiat in minus perspiciatis",
    name: "Cà phê",
    price : 15000,
  },
  {
    img: "./img/1 (15).jpg",
    content: "Được Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur explicabo unde fugiat in minus perspiciatis",
    name: "Cà phê",

    price : 20000,
  },
  {
    img: "./img/1 (17).jpg",
    content: "Nhiều  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur explicabo unde fugiat in minus perspiciatis",
    name: "Cà phê",
    price : 17000,
  },
  {
    img: "./img/1 (18).jpg",
    content: "Ghé Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur explicabo unde fugiat in minus perspiciatis",
    name: "Cà phê",
    price : 25000,
  },
  {
    img: "./img/bt1.jpg",
    content: "Nhìn hấp dẫn không ạ, hãy đến với chúng tôi để thưởng thức những dĩa bánh tránh ngon  lành cành đào nha  ",
    name: "Bánh Tráng ",
    price : 24000,
  },
  {
    img: "./img/bt2.jpg",
    content: " Thong Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur explicabo unde fugiat in minus perspiciatis",
    name: "Bánh Tráng",
    price : 22000,
  },
  {
    img: "./img/bt3.jpg",
    content: "Tưởng tượng Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur explicabo unde fugiat in minus perspiciatis",
    name: "Bánh Tráng",
    price : 24000,
  },
  {
    img: "./img/bt4.jpg",
    content: "Thưởng Thức Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur explicabo unde fugiat in minus perspiciatis",
    name: "Bánh Tráng",
    price : 26000,
  },
  {
    img: "./img/bt5.jpg",
    content: "Tận hưởng Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur explicabo unde fugiat in minus perspiciatis",
    name: "Bánh Tráng",
    price : 30000,
  },
];

  $scope.ftct =[
    "Hãy đến đây để tận hưởng những món ăn ngon và nước uống độc lạ nhé.  Kính Mời!!!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,recusandae, et nam iusto vitae sunt numquam sapiente",
  ];
  $scope.ftspan = [
    
    "Email: thucanchatre@gmail.com",
    "Địa chỉ: 123 Hoàng Diệu, P.11,Q. 3,Tp.HCM",
    "Liên hệ: 0858 203 137",
  ];
  $scope.ft =["./img/fb.png","./img/gg.png","./img/pin.png","./img/tw.png"]

  $scope.chitieta = (index) => {
    $scope.detaila = {};
    $scope.detaila = $scope.section[index]
  };
});

