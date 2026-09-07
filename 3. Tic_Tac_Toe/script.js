let boxes = document.querySelectorAll(".boxes");
let turn1 = document.querySelector(".turn1");
let turn2 = document.querySelector(".turn2");
let msg = document.querySelector(".msg");
let span = document.querySelector("#result");
let reset = document.getElementById("reset");
let ng = document.getElementById("ng");
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

reset.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    box.classList.add("hover");
    // box.classList.remove("b-s");
    msg.classList.add("hide");
  });
});

ng.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    box.classList.add("hover");
    // box.classList.remove("b-s");
    msg.classList.add("hide");
  });
});

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerText = "X";
      box.style.color = "white";
      turn2.classList.add("b-s");
      turn1.classList.remove("b-s");
      turnX = false;
    } else {
      box.innerText = "O";
      box.style.color = "red";
      turn1.classList.add("b-s");
      turn2.classList.remove("b-s");
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
        boxes.forEach((box) => {
          box.classList.add("b-s");
        });
        boxes[condition[0]].classList.remove("b-s");
        boxes[condition[1]].classList.remove("b-s");
        boxes[condition[2]].classList.remove("b-s");
      }
    }

    console.log(condition[0]);
  }
}

function showResult(winner) {
  boxes.forEach((box) => {
    box.disabled = true;
    box.classList.remove("hover");
  });

  msg.classList.remove("hide");
  span.innerText = winner;
  if (winner === "X") {
    span.style.color = "black";
  } else {
    span.style.color = "red";
  }
}
