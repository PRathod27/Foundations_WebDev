let boxes = document.querySelectorAll(".boxes");
let turnX = true;

let WinnerCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

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
    checkWinner();
  });
});

function checkWinner() {
  for (let condition of WinnerCondition) {
    let box1 = boxes[condition[0]].innerText;
    let box2 = boxes[condition[1]].innerText;
    let box3 = boxes[condition[2]].innerText;

    if (box1 !== "" && box2 !== "" && box3 !== "") {
      if (box1 === box2 && box2 === box3) {
        console.log("Winner" + box1);
        showResult(box1);
      }
    }

    console.log(condition[0]);
  }
}

function showResult(winner) {}
