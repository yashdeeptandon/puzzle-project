let beat = new Audio("assets/bg-music.wav");

document.getElementById("play-btn").onclick = function () {
  beat.play();
  setTimeout(route, 700);
};

function route() {
  location.href = "quiz1.html";
}

setInterval(
  (checkCurrentLoggedInUser = () => {
    const user = firebase.auth().currentUser;
    console.log(user);
  }),
  10000
);
