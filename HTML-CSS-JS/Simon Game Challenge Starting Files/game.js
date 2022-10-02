const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let count = 0;
let level = 0;
let started = false;
let index = 0;

$(".btn").click(function () {
  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userChosenColour);
});

$("body").keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    userClickedPattern = [];
    started = true;
  }
});

// Create a new Pattern
function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChoseColour = buttonColours[randomNumber];
  gamePattern.push(randomChoseColour);

  $("#" + randomChoseColour)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChoseColour);

  level++;
  $("#level-title").text("Level " + level);
}

function playSound(name) {
  audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if (currentLevel === gamePattern[index]) {
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(() => {
        nextSequence();
        userClickedPattern = [];
        index = 0;
      }, 1000);
    }
    index++;
  } else if (level !== 0) {
    if (currentLevel !== gamePattern[index]) {
      playSound("wrong");
      $("body").addClass("game-over");
      $("h1").text("Game Over");
      setTimeout(() => {
        $("body").removeClass("game-over");
        $("h1").text("Press A Key to Start");
        gamePattern = [];
        started = false;
        level = 0;
        index = 0;
      }, 200);
    }
  }
}
