// Lấy phần tử nút "X" và banner
const closeBtn = document.querySelector('.close-btn');
const topBanner = document.getElementById('top-banner');

// Thêm sự kiện click cho nút "X"
closeBtn.addEventListener('click', () => {
    // Ẩn banner
    topBanner.style.display = 'none';
});

const navList = document.getElementById('navbarContent'); // Chọn thanh điều hướng
const navItems = Array.from(navList.getElementsByClassName('nav-item')); // Lấy tất cả các mục trong nav

// Cập nhật danh sách khi thay đổi kích thước màn hình
function updateNavItems() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 992) {
        // Màn hình lớn (lg): Hiển thị tất cả
        navItems.forEach(item => item.classList.remove('hidden'));
    } else if (screenWidth >= 768) {
        // Màn hình trung bình (md): Hiển thị 5 mục đầu, ẩn mục còn lại
        navItems.forEach((item, index) => {
            item.classList.toggle('hidden', index >= 5); // Ẩn các mục sau 5 mục đầu
        });
    } else {
        // Màn hình nhỏ: Hiển thị chỉ 3 mục đầu
        navItems.forEach((item, index) => {
            item.classList.toggle('hidden', index >= 3); // Ẩn các mục sau 3 mục đầu
        });
    }
}

// Lắng nghe thay đổi kích thước màn hình và khi DOM đã sẵn sàng
window.addEventListener('resize', updateNavItems);
window.addEventListener('DOMContentLoaded', updateNavItems);



// Thêm sự kiện submit cho form
const form = document.querySelector('.contact-form');
const formStatus = document.getElementById('form-status');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Chặn gửi form để thử nghiệm
    formStatus.style.display = 'block';
    formStatus.innerText = 'Cảm ơn bạn đã đăng ký !';
});
//Hàm chuyển ảnh ở ss 6
document.querySelectorAll('.img-ss6').forEach(image => {
    // Lưu URL gốc
    const originalSrc = image.src;
    // Lấy URL hover từ data-hover
    const hoverSrc = image.getAttribute('data-hover');

    // Thay đổi ảnh và thu nhỏ khi di chuột vào
    image.addEventListener('mouseover', () => {
        image.src = hoverSrc; // Đổi URL ảnh
        image.style.transform = 'scale(0.9)'; // Thu nhỏ ảnh 90%
        image.style.transition = 'transform 0.3s ease'; // Hiệu ứng mượt mà
    });

    // Khôi phục ảnh và kích thước ban đầu khi di chuột ra
    image.addEventListener('mouseout', () => {
        image.src = originalSrc; // Khôi phục URL ảnh
        image.style.transform = 'scale(1)'; // Trả lại kích thước ban đầu
    });
});
//animation ss3
document.querySelectorAll('.card-img-top').forEach((image) => {
    // Khi di chuột vào
    image.addEventListener('mousemove', () => {
        image.style.transform = 'rotateX(50deg)';
        image.style.transition = 'transform 0.3s ease';
    });

    // Khi di chuột ra ngoài
    image.addEventListener('mouseout', () => {
        image.style.transform = 'rotateX(0deg)';
    });
});

// Hiệu ứng scale và đổi ảnh cho ảnh lồng
document.querySelectorAll('.img-hover').forEach((image) => {
    // Lưu URL gốc
    const originalSrc = image.src;
    // Lấy URL hover từ data-hover
    const hoverSrc = image.getAttribute('data-hover');

    // Khi di chuột vào
    image.addEventListener('mouseover', () => {
        image.src = hoverSrc; // Đổi URL ảnh
        image.style.transform = 'scale(1.2)';
        image.style.transition = 'transform 0.3s ease';
    });

    // Khi di chuột ra ngoài
    image.addEventListener('mouseout', () => {
        image.src = originalSrc; // Khôi phục URL ảnh
        image.style.transform = 'scale(1)';
    });
});
//Hàm phóng to hình ảnh ở ss2
document.querySelectorAll('.img-ss2').forEach((image) => {
    // Lưu URL gốc
    const originalSrc = image.src;
    // Lấy URL hover từ data-hover
    ;

    // Khi di chuột vào
    image.addEventListener('mouseover', () => {

        image.style.transform = 'scale(1.05)';
        image.style.transition = 'transform 0.3s ease';
    });

    // Khi di chuột ra ngoài
    image.addEventListener('mouseout', () => {

        image.style.transform = 'scale(1)';
    });
});
// countdown


function startCountdown() {
    const targetTime = new Date();
    targetTime.setHours(23, 59, 59, 0); // Đặt giờ đích đến 23:59:59

    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    setInterval(() => {
        const now = new Date();
        let diff = targetTime - now; // Lấy khoảng cách thời gian

        if (diff < 0) {
            diff += 24 * 60 * 60 * 1000; // Nếu thời gian đã qua, cộng thêm 24 giờ
        }

        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        hoursElement.textContent = hours.toString().padStart(2, "0");
        minutesElement.textContent = minutes.toString().padStart(2, "0");
        secondsElement.textContent = seconds.toString().padStart(2, "0");
    }, 1000);
}

// Gọi hàm khi trang được load
window.onload = startCountdown;
