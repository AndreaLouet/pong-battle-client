import { gsap } from "gsap";

export class GameScreen {
  constructor(parameters) {
    console.log("Init Game");
    // Ici vous pourrez initialiser les valeurs disponibles dans toute la classe :)
    this.timeline = null;

    // Et ici, les méthodes à lancer au début
    this.init();
  }

  init() {
    this.timeline = gsap.timeline({ paused: true });
    this.timeline.to("#paragraphe", { duration: 5, y: 400 });
  }
}
