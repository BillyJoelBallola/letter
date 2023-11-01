const book = document.querySelector(".book");
const cover = document.querySelector(".cover");
const content = document.querySelector(".content");

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


