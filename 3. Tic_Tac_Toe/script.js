let boxes = document.querySelectorAll(".boxes");
let turnX = true;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerText = "X";
      box.style.color = "white";
      turnX = false;
    } else {
      box.innerText = "O";
      box.style.color = "red";
      turnX = true;
    }
  });
});
