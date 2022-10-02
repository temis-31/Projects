// PLAY LIST
document.querySelector(".icon").addEventListener("click", function () {
  var x = document.querySelector("#mytopnav");
  if (x.classList.value === "topnav") {
    x.className += " remove-nav";
  } else {
    x.className = "topnav";
  }
  console.log(music.  length);
});

let songs = [
  {
    name: "Monkey Island Theme",
    img: "./images/monkey.jpg",
    sound: "./sounds/01 MonkeyIslandTheme.mp3",
  },
  {
    name: "The SCUMM Bar",
    img: "./images/scummbar.jpg",
    sound: "./sounds/02 TheScummBar.mp3",
  },
  {
    name: "LeChuck's Theme",
    img: "./images/lechuck.jpg",
    sound: "./sounds/03 LeChuck'sTheme.mp3",
  },
  {
    name: "Monkey Island (Remix)",
    img: "./images/monkey-mix.jpg",
    sound: "./sounds/04 MonkeyIslandRemix.mp3",
  },
];

let songIndex = 0;

loadsong(songs[songIndex].sound);

function loadsong(song) {
  $("#audio").attr("src", song);
  $(".control-letter h2").text(songs[songIndex].name);
  $("#art").css("background-image", "url(" + songs[songIndex].img + ")");
}

//Play
var pl = document.querySelector(".play");
pl.addEventListener("click", playSong);

function playSong() {
  pl.classList.add("remove-control");
  pa.classList.remove("remove-control");
  audio.play();
}

// Pause
var pa = document.querySelector(".pause");
pa.addEventListener("click", pauseSong);

function pauseSong() {
  pl.classList.remove("remove-control");
  pa.classList.add("remove-control");
  audio.pause();
}

// Next
var nex = document.querySelector(".next");
nex.addEventListener("click", next);

function next() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadsong(songs[songIndex].sound);
  playSong();
}

// Prev
var pre = document.querySelector(".prev");
pre.addEventListener("click", prev);

function prev() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadsong(songs[songIndex].sound);
  playSong();
}

document.getElementById("audio").addEventListener("ended", next);

// Play list
var numberOfList = document.querySelectorAll(".playlist-but").length;
for (var i = 0; i < numberOfList; i++) {
  document
    .querySelectorAll(".playlist-but")
    [i].addEventListener("click", function () {
      songIndex = this.classList[1] - 1;
      loadsong(songs[songIndex].sound);
      playSong();
    });
}

document.getElementById("progres").addEventListener("click", setProgress);

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

audio.addEventListener("timeupdate", updateProgress);

function updateProgress(e) {
  const { duration, currentTime } = e.target;
  const progressPercent = (currentTime / duration) * 100;
  document.getElementById("prog").style.width = progressPercent + "%";
}

$("body").keypress(function (e) {
  $("#challenge").text(e.key);
});
