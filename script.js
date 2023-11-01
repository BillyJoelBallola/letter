const book = document.querySelector(".book");
const cover = document.querySelector(".cover");
const content = document.querySelector(".content");

let isBookOpen = false 

book.addEventListener("click", () => {
  if(!isBookOpen){
    cover.style.transform = "rotateY(-110deg)";
    cover.style.transformOrigin = "left";
    book.style.transform = "rotateZ(5deg)";
    isBookOpen = true;
  }else{
    cover.style.transform = "rotateY(0)";
    book.style.transform = "rotateZ(0)"
    isBookOpen = false;
  }
})


