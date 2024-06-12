let img = document.querySelector(".imgChangeHoverTwo");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn");
let imgChangeHover = document.querySelector('.imgChangeHover')

img.addEventListener("click", () => {
  console.log("img");
  window.open("http://127.0.0.1:5500/two/index.html", "_blank", "");
  // window.open(
  //   "file:///C:/Users/Mohamed/Desktop/NTN-news/project%20important+9/two/index.html",
  //   "_blank",
  //   ""
  // );
});
console.log(img);
btn1.addEventListener("click", () => {
  btn1.classList.add = 'btnAll'
  console.log("btn1");
});



// btn

console.log(btn1);
