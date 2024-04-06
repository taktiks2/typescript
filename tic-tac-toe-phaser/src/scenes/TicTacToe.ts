import { Scene } from "phaser";
import { W_WIDTH, W_HEIGHT } from "../lib/constants";

export class TicTacToe extends Scene {
  constructor() {
    super("TicTacToe");
  }

  preload() {}

  create() {
    const text = this.add.text(W_WIDTH / 2, W_HEIGHT / 2, "test text");
    this.cameras.main.setBackgroundColor("#e6c000");
  }

  update() {}
}
