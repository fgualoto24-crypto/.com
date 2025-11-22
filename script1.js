function openImage(url) {
    document.getElementById("popup-img").src = url;
    document.getElementById("popup").style.display = "flex";
}

function closeImage() {
    document.getElementById("popup").style.display = "none";
}

let galleryImages = [];
let currentIndex = 0;

function openGallery(images) {
    galleryImages = images;
    currentIndex = 0;
    openImage(galleryImages[currentIndex]);
}

function openImage(url) {
    document.getElementById("popup-img").src = url;
    document.getElementById("popup").style.display = "flex";
}

function closeImage() {
    document.getElementById("popup").style.display = "none";
}

function nextImage() {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    openImage(galleryImages[currentIndex]);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    openImage(galleryImages[currentIndex]);
}
