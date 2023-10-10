// Your code here
const dodger = document.getElementById('dodger');
/*dodger.style.backgroundColor = '#FF69B4';
dodger.style.bottom = '0px';
dodger.style.left = '0px';
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        const leftNumbers = dodger.style.left.replace("px", "");
        const left = parseInt(leftNumbers, 10);
        dodger.style.left = `${left - 1}px`;
    }
})*/
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
});
  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < 400) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
/*function moveDodgerUp() {
    const topNumbers = dodger.style.top.replace("px", "");
    const top = parseInt(topNumbers, 10);
    if (top > 0) {
      dodger.style.top = `${top - 1}px`;
    }
}
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") {
      moveDodgerUp();
    }
})
const 
*/
const h3 = document.createElement('h3');
h3.textContent = 'This is a new Dodger';

document.body.appendChild(h3);