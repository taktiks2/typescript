import { Scene } from "phaser";
import { BOARD_SIZE } from "../lib/constants";

export class TicTacToe extends Scene {
  board: Phaser.GameObjects.Graphics;

  constructor() {
    super("TicTacToe");
  }

  create() {
    // 背景色の設定
    this.cameras.main.setBackgroundColor("#333");

    const cellSize = BOARD_SIZE / 3;
    // ボードの左上
    const boardOriginX = (this.cameras.main.width - BOARD_SIZE) / 2;
    const boardOriginY = (this.cameras.main.height - BOARD_SIZE) / 2;

    // 枠線のスタイルを指定
    this.board = this.add.graphics({
      lineStyle: { width: 2, color: 0xffffff },
    });

    // 2点間を指定して枠線を描画
    for (let i = 0; i <= 3; i++) {
      this.board.lineBetween(
        boardOriginX,
        boardOriginY + i * cellSize,
        boardOriginX + BOARD_SIZE,
        boardOriginY + i * cellSize,
      ); // 横線
      this.board.lineBetween(
        boardOriginX + i * cellSize,
        boardOriginY,
        boardOriginX + i * cellSize,
        boardOriginY + BOARD_SIZE,
      ); // 縦線
    }
  }

  update() {}

  drawBoard() {}
}
