// 下矢印をクリックした時のスクロール動作
document.getElementById("scroll-down").addEventListener("click", function () {
  window.scrollBy({
    top: window.innerHeight, // 一画面分スクロール
    behavior: "smooth", // スムーズスクロール
  });
});

function randomPosition() {
  const butterfly = document.getElementById("butterfly");
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  butterfly.style.top = y + "px";
  butterfly.style.left = x + "px";
}

setInterval(randomPosition, 5000);

document.getElementById("play-bgm").addEventListener("click", function () {
  var audio = document.getElementById("bgm");
  audio.play();
});

document.getElementById("stop-bgm").addEventListener("click", function () {
  var audio = document.getElementById("bgm");
  audio.pause();
  audio.currentTime = 0;
});

const text = document.querySelector(".first-text");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
  text.innerHTML +=
    "<span class='letter' style='animation-delay:" +
    i / 10 +
    "s'>" +
    splitText[i] +
    "</span>";
}

window.onload = function () {
  setTimeout(function () {
    const centerText = document.querySelector(".center-text");
    centerText.style.opacity = "1";
  }, 5000);
};

document.getElementById("scrollButton").addEventListener("click", function () {
  const targetElement = document.querySelector(".timeline"); // スクロール先の要素
  targetElement.scrollIntoView({ behavior: "smooth" });
});
