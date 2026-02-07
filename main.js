let index = 0; // Vị trí hiện tại
const track = document.querySelector('.anhslidengang');
const columns = 4; // Số lượng ảnh bạn muốn hiển thị trên khung
const totalItems = 8; // TỔNG SỐ ẢNH bạn đang có (hãy đếm và điền đúng số vào đây)

// Hàm trượt sang PHẢI (Tiến)
function nextSlide() {
    // Chỉ cho trượt tiếp nếu chưa tới ảnh cuối cùng
    if (index < totalItems - columns) { 
        index++;
        updateSlide();
    } else {
        console.log("Đã hết ảnh để tiến!");
    }
}

// Hàm trượt về TRÁI (Lùi)
function prevSlide() {
    // Chỉ cho lùi nếu index đang lớn hơn 0
    if (index > 0) {
        index--;
        updateSlide();
    } else {
        console.log("Đã về ảnh đầu tiên!");
    }
}

// Hàm phụ để cập nhật giao diện (viết riêng cho gọn)
function updateSlide() {
    const widthPerItem = 320; // 300px ảnh + 20px gap
    track.style.transform = `translateX(-${index * widthPerItem}px)`;
    track.style.transition = "0.5s ease-in-out";
}