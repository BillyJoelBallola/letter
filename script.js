const book = document.querySelector(".book");
const cover = document.querySelector(".cover");
const content = document.querySelector(".content");
const images = document.querySelectorAll(".image");
const previewContainer = document.querySelector(".image-preview-contianer");
const previewImage = document.querySelector(".image-preview");
const letter = document.querySelector(".letter");

let isBookOpen = false;
const flipAngle = -110;
const rotateAngle = 5;

let i = 0;
let txt = "Hi baby, <br/><br/>I just want you to know that my love for you is genuine and will never change. Whatever happens, you'll always have my heart. <br/><br/>Love,<br/>Bjay";
const speed = 20;

function typeWriter() {
  if (i < txt.length) {
    if (txt.charAt(i) === '<') {
      const closingIndex = txt.indexOf('>', i);
      if (closingIndex !== -1) {
        const tag = txt.slice(i, closingIndex + 1);
        letter.innerHTML += tag;
        i = closingIndex + 1;
      }
    } else {
      letter.innerHTML += txt.charAt(i);
      i++;
    }
    setTimeout(typeWriter, speed);
  }
}

function resetTypeWriter() {
  i = 0;
  letter.innerHTML = "";
}

book.addEventListener("click", () => {
  if(!isBookOpen){
    cover.style.transform = `rotateY(${flipAngle}deg)`;
    cover.style.transformOrigin = "left";
    book.style.transform = `rotateZ(${rotateAngle}deg)`;
    resetTypeWriter();
    typeWriter();
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
