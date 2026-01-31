"use strict"

const images = [
  "folder/Gray.jpg",
  "folder/Blue.jpg",
  "folder/Purple.jpg",
  "folder/Gold.jpg"
];

const Gold = [
  "folder/じゃがいも.png",
  "folder/たまねぎ.png",
]

const Purple = [
  "folder/だいこん.png",
  "folder/にんじん.png",
]

const Blue = [
  "folder/キャベツ.png",
  "folder/トマト.png",
  "folder/ほうれん草.png"
]

const Gray = [
  "folder/ナス.png",
  "folder/豆苗.png",
  "folder/ごぼう.png",
  "folder/きゅうり.png"
]

const sounds = {
  click: new Audio("sounds/ドアを開ける2.mp3"),
  normal: new Audio("sounds/カーソル移動9.mp3"),
  rare: new Audio("sounds/決定ボタンを押す16.mp3"),
}

function playSE(name) {
  sounds[name].currentTime = 0;
  sounds[name].play();
}

function displayRandomImages() {
  const grid = document.getElementById("slotGrid");
  grid.innerHTML = "";
  playSE("click");

  for (let i = 0; i < 10; i++) {
    let rate = Math.random() * 100;
    let rarity = 0;
    if(2 > rate){
      rarity = 3
    } else if(10 > rate){
      rarity = 2
    } else if(40 > rate){
      rarity = 1
    } else {
      rarity = 0
    }
    const randomImage = images[rarity];
    const img = document.createElement("img");
    img.src = randomImage;
    grid.appendChild(img);

    setTimeout(() => {
      img.style.opacity = 1;
    }, i * 25);

    setTimeout(() => {
      const filename = img.src.split("/").pop();

      if (filename === "Gold.jpg") {
        const randomGold = Gold[Math.floor(Math.random() * Gold.length)];
        img.src = randomGold;
        playSE("rare");
      }

      if (filename === "Purple.jpg") {
        const randomPurple = Purple[Math.floor(Math.random() * Purple.length)];
        img.src = randomPurple;
        playSE("rare");
      }

      if (filename === "Blue.jpg") {
        const randomBlue = Blue[Math.floor(Math.random() * Blue.length)];
        img.src = randomBlue;
        playSE("normal");
      }

      if (filename === "Gray.jpg") {
        const randomGray = Gray[Math.floor(Math.random() * Gray.length)];
        img.src = randomGray;
        playSE("normal");
      }

    }, i * 175 + 750);
  }

}

document.getElementById("10pull").addEventListener("click", displayRandomImages);

const grid = document.getElementById("slotGrid");
grid.innerHTML = "";

for (let i = 0; i < 10; i++) {
  const img = document.createElement("img");
  img.src = "";
  grid.appendChild(img);
}