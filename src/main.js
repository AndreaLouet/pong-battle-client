import "./style.css";
import { io } from "socket.io-client";
import { LeftScreen } from "./timeline/AILeft";
import { RightScreen } from "./timeline/AIRight";
import { GameScreen } from "./timeline/GameScreen";

// Vous pouvez remplacer par votre URL de serveur railway
const socket = io("http://localhost:3000");

const left = document.querySelector("#left");
const game = document.querySelector("#game");
const right = document.querySelector("#right");

let screen = null;

function selectRole(role) {
  setReady();

  switch (role) {
    case "LeftScreen":
      screen = new LeftScreen();
      break;
    case "RightScreen":
      screen = new RightScreen();
      console.log(screen)
      break;
    case "GameScreen":
      screen = new GameScreen();
      break;
  }
}

function setReady() {
  console.log("I am ready");
  socket.emit("ready");
}

socket.on("start", () => {
  console.log("Start reçu", screen);
  screen.timeline?.play();
});

left.addEventListener("click", () => selectRole("LeftScreen"));
game.addEventListener("click", () => selectRole("RightScreen"));
right.addEventListener("click", () => selectRole("GameScreen"));
