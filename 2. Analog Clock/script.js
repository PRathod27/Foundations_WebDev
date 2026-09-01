let hour_hand = document.querySelector(".hours-hand");
let minute_hand = document.querySelector(".minutes-hand");
let second_hand = document.querySelector(".seconds-hand");

let dh = document.querySelector(".dh");
let dm = document.querySelector(".dm");
let ds = document.querySelector(".ds");

setInterval(() => {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  let rotate_hours = 30 * (hours % 12) + minutes / 2;
  let rotate_minutes = 6 * minutes;
  let rotate_seconds = 6 * seconds;

  hour_hand.style.transform = `rotate(${rotate_hours}deg)`;
  minute_hand.style.transform = `rotate(${rotate_minutes}deg)`;
  second_hand.style.transform = `rotate(${rotate_seconds}deg)`;

  dh.innerHTML =
    (hours < 10 ? "0" + hours : hours) > 12 ? (hours -= 12) : hours;
  dm.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  ds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
});
