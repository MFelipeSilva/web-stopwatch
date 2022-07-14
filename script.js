window.onload = function () {
  const textsCounter = document.querySelectorAll(".time");
  const hoursCounter = document.querySelector("#hours");
  const minutesCounter = document.querySelector("#minutes");
  const secondsCounter = document.querySelector("#seconds");
  const milliCounter = document.querySelector("#milliseconds");
  const onButtons = document.querySelectorAll(".button");

  let cleanInterval;
  let hours = 0;
  let seconds = 0;
  let milli = 0;
  let minutes = 0;

  //Botões responsáveis para começar, parar, e resetar o cronômetro.
  onButtons[0].addEventListener("click", () => {
    clearInterval(cleanInterval);
    textsCounter[0].style.animation = "";
    textsCounter[1].style.animation = "";
    textsCounter[2].style.animation = "";
    textsCounter[3].style.animation = "";
    textsCounter[4].style.animation = "";
    cleanInterval = setInterval(onInterval, 10);
  });

  onButtons[1].addEventListener("click", () => {
    clearInterval(cleanInterval);
    textsCounter[0].style.animation = "";
    setTimeout(
      () => (textsCounter[0].style.animation = "animate 1s linear infinite"),
      5
    );
    setTimeout(
      () => (textsCounter[1].style.animation = "animate 1s linear infinite"),
      5
    );
    setTimeout(
      () => (textsCounter[2].style.animation = "animate 1s linear infinite"),
      5
    );
    setTimeout(
      () => (textsCounter[3].style.animation = "animate 1s linear infinite"),
      5
    );
    setTimeout(
      () => (textsCounter[4].style.animation = "animate 1s linear infinite"),
      5
    );
  });

  onButtons[2].addEventListener("click", () => {
    clearInterval(cleanInterval);
    textsCounter[0].style.animation = "";
    textsCounter[1].style.animation = "";
    textsCounter[2].style.animation = "";
    textsCounter[3].style.animation = "";
    textsCounter[4].style.animation = "";

    minutes = "";
    seconds = "00";
    milli = "00";

    minutesCounter.textContent = minutes;
    secondsCounter.textContent = seconds;
    milliCounter.textContent = milli;
  });

  //função resposável para executar em determinados intervalos de tempo, alterando o fluxo de execução.
  function onInterval() {
    milli++;
    milliCounter.textContent = "0" + milli;

    if (milli > 10) {
      milliCounter.textContent = milli;
    }
    if (milli == 100) {
      seconds++;
      secondsCounter.textContent = "0" + seconds;
      milli = 0;
    }

    if (seconds >= 10) {
      secondsCounter.textContent = seconds;
    }

    if (seconds == 60) {
      minutes++;
      minutesCounter.textContent = minutes + ":";
      seconds = 0;
    }

    if (minutes == 60) {
      clearInterval(cleanInterval);
      hours = "1";
      minutes = "00";
      seconds = "00";
      milli = "00";
      hoursCounter.textContent = hours;
      minutesCounter.textContent = minutes;
      secondsCounter.textContent = seconds;
      milliCounter.textContent = milli;
    }
  }
};
