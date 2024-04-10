window.addEventListener('scroll', function() {
    const menu = document.querySelector('.row'); // Thay đổi thành lớp chứa menu của bạn
    const distanceY = window.pageYOffset || document.documentElement.scrollTop;

    if (distanceY > 100) { // Điều kiện để kích hoạt menu cố định, thay đổi giá trị 100 tùy thuộc vào vị trí bạn muốn menu cố định
        menu.classList.add('fixed-menu');
    } else {
        menu.classList.remove('fixed-menu');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const listImage = document.querySelector('.list-images');
    if (listImage) {
        const imgs = listImage.getElementsByTagName('img');
        const btnLeft = document.querySelector('.btn-left');
        const btnRight = document.querySelector('.btn-right');
        const indexItems = document.querySelectorAll('.index-item'); // Lấy tất cả các phần tử có class 'index-item'
        const length = imgs.length;
        let current = 0;
        let handleEventChangeSlide; // Khai báo biến handleEventChangeSlide

        function moveSlide(direction) {
            let width = imgs[0].offsetWidth;
            if (direction === 'left') {
                current = (current === 0) ? length - 1 : current - 1;
            } else if (direction === 'right') {
                current = (current === length - 1) ? 0 : current + 1;
            }
            listImage.style.transform = `translateX(${width * -current}px)`;

            // Loại bỏ lớp 'active' khỏi tất cả các chỉ mục
            indexItems.forEach(item => {
                item.classList.remove('active');
            });
            // Thêm lớp 'active' cho chỉ mục hiện tại
            indexItems[current].classList.add('active');
        }

        btnLeft.addEventListener('click', function() {
            clearInterval(handleEventChangeSlide);
            moveSlide('left');
            handleEventChangeSlide = setInterval(function() {
                moveSlide('right');
            }, 4000);
        });

        btnRight.addEventListener('click', function() {
            clearInterval(handleEventChangeSlide);
            moveSlide('right');
            handleEventChangeSlide = setInterval(function() {
                moveSlide('right');
            }, 4000);
        });

        handleEventChangeSlide = setInterval(function() {
            moveSlide('right');
        }, 4000);
    } else {
        console.error("Không tìm thấy phần tử với lớp 'list-images'");
    }
});
questionFirst = $("[data-question]:first").attr("data-question");
$("#chatlist ul").append(
  '<li class="admin-message"> ' + questionFirst + "</li>"
);

$("[data-question]:first").appendTo(".message-box");

$("#send").click(function (event) {
  questionVal = $(".message-box [data-question]").val();

  $("#chatlist ul").append(
    '<li class="client-message"> ' + questionVal + "</li>"
  );
  dataName = $(".admin-client-message-wrap [data-name]").attr("data-question");
  if ($(".message-box [name]").attr("name") == "name") {
    nameVal = $(".message-box [name]").val();
    $(".admin-client-message-wrap [data-name]").attr(
      "data-question",
      "Hi " + nameVal + ", </br>" + dataName
    );
  }
  $(".message-box [data-question").appendTo(".submit_info");

  if ($(".admin-client-message-wrap").children().length != 0) {
    questionFirst = $("[data-question]:first").attr("data-question");
    $("#chatlist ul").append(
      '<li class="admin-message"> ' + questionFirst + "</li>"
    );
    $("[data-question]:first").appendTo(".message-box");
  }

  $("#charlist").animate({ screenTop: 5000 });
});

$("#send").css({ "pointer-events": "none" });

$(".message-box [data-question]").bind("click change keyup", function (event) {
  if ($(this).val() == "") {
    $("#send").css({ "pointer-events": "none" });
  } else {
    $("#send").css({ "pointer-events": "auto" });
  }
});

$("#confirm").click(function (event) {
  $("#submit").trigger("click");
});

$("#notconfirm").click(function (event) {
  location.reload();
});
$(".chat-icon").click(function (event) {
  $(".chatbot-box").toggleClass("active");
});
document.addEventListener("DOMContentLoaded", function() {
    // Lấy thẻ <a> trong phần social-fixed
    var goToTopLink = document.querySelector('.social-fixed a');
  
    // Xử lý sự kiện click trên liên kết
    goToTopLink.addEventListener('click', function(event) {
      // Ngăn chặn hành vi mặc định của liên kết
      event.preventDefault();
  
      // Cuộn trang lên đầu
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Làm mượt cuộn
      });
    });
  });

  $(document).ready(function(){
    $(".brand_prev").click(function(){ // Xử lý khi click vào nút prev
        $("#brand-carousel").trigger("prev.owl.carousel");
    });
    $(".brand_next").click(function(){ // Xử lý khi click vào nút next
        $("#brand-carousel").trigger("next.owl.carousel");
    });
});



function toggleHeight() {
  var entryContent = document.querySelector('.entry-content');
  var entryMoreBtn = document.querySelector('.entry-more-btn span');

  if (entryContent.style.height === '412px') {
      entryContent.style.height = 'auto';
      entryMoreBtn.textContent = 'Thu gọn';
  } else {
      entryContent.style.height = '412px';
      entryMoreBtn.textContent = 'Xem thêm';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var items = document.querySelectorAll('.box-product-group .items a');
  var mainImage = document.querySelector('#slider-for .item a img');

  items.forEach(function(item) {
      item.addEventListener('click', function(event) {
          event.preventDefault(); // Ngăn chặn hành vi mặc định khi click vào thẻ a

          var imageUrl = this.querySelector('img').getAttribute('src');
          mainImage.setAttribute('src', imageUrl);
          mainImage.setAttribute('data-zoom-image', imageUrl); // Cập nhật ảnh zoom
      });
  });
});

// Lấy phần tử .zoomLens và .zoomWindow
const zoomLens = document.querySelector('.zoomLens');
const zoomWindow = document.querySelector('.zoomWindow');

// Thêm sự kiện mousemove vào phần tử zoomLens
zoomLens.addEventListener('mousemove', function(event) {
    // Tính toán vị trí của chuột trong phần tử zoomLens
    const x = event.offsetX - zoomWindow.offsetWidth / 2;
    const y = event.offsetY - zoomWindow.offsetHeight / 2;

    // Cập nhật vị trí của phần tử zoomWindow
    zoomWindow.style.left = `${x}px`;
    zoomWindow.style.top = `${y}px`;

    // Hiển thị phần tử zoomWindow
    zoomWindow.style.display = 'block';
});

// Thêm sự kiện mouseleave vào phần tử zoomLens
zoomLens.addEventListener('mouseleave', function() {
    // Ẩn phần tử zoomWindow khi chuột rời khỏi phần tử zoomLens
    zoomWindow.style.display = 'none';
});

