const book = document.querySelector(".book");
const cover = document.querySelector(".cover");
const content = document.querySelector(".content");
const images = document.querySelectorAll(".image");
const previewContainer = document.querySelector(".image-preview-contianer");
const previewImage = document.querySelector(".image-preview");

let isBookOpen = false;
const flipAngle = -110;
const rotateAngle = 5;

book.addEventListener("click", () => {
  if(!isBookOpen){
    cover.style.transform = `rotateY(${flipAngle}deg)`;
    cover.style.transformOrigin = "left";
    book.style.transform = `rotateZ(${rotateAngle}deg)`;
    isBookOpen = true;
  }else{
    cover.style.transform = "rotateY(0)";
    book.style.transform = "rotateZ(0)"
    isBookOpen = false;
  }
})

images.forEach(image => {
  image.addEventListener("mouseover", () => {
    previewContainer.style.opacity = 1;
    previewContainer.style.zIndex = 2;
    previewImage.src = image.currentSrc;
  })

  image.addEventListener("mouseleave", () => {
    previewContainer.style.opacity = 0;
    previewContainer.style.zIndex = 0;
    previewImage.src = "";
  })
})