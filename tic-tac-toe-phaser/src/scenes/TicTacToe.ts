import { Scene } from "phaser";
import { BOARD_SIZE } from "../lib/constants";

enum Stone {
  X,
  O,
}

type Result = "X" | "O" | "DRAW" | null;

const resultTextColor: { [key: string]: string } = {
  X: "#0000ff",
  O: "#ff0000",
  DRAW: "#00ff00",
};

export class TicTacToe extends Scene {
  cellSize: number;
  boardOriginX: number;
  boardOriginY: number;
  stoneSize: number;
  turn: number;
  board: (Stone | null)[][];
  graphics: Phaser.GameObjects.Graphics;
  result: Result;

  constructor() {
    super("TicTacToe");
  }

  preload() {
    // 背景色の設定
    this.cameras.main.setBackgroundColor("#333");

    this.cellSize = BOARD_SIZE / 3;
    this.stoneSize = this.cellSize * 0.25;
    this.turn = 0;
    this.result = null;

    // ボードの基準点(左上)
    this.boardOriginX = (this.cameras.main.width - BOARD_SIZE) / 2;
    this.boardOriginY = (this.cameras.main.height - BOARD_SIZE) / 2;

    this.drawFrame();
    this.initBoard();
  }

  create() {
    // マウスクリックのイベントを追加
    this.input.on("pointerdown", (pointer: Phaser.Input.Pointer) => {
      const [y, x] = this.getClickedCell(pointer);

      // 有効なセル場がクリックされたら描画する
      if (
        y >= 0 &&
        y < 3 &&
        x >= 0 &&
        x < 3 &&
        this.board[y][x] === null &&
        !this.result
      ) {
        this.putStone(y, x);

        this.result = this.getResult();

        if (this.result) {
          this.drawResult(
            this.result === "DRAW" ? "DRAW" : `${this.result} WIN`,
            resultTextColor[this.result],
          );
          this.drawAgainButton();
          return;
        }

        this.changeTurn();
      }
    });
  }

  initBoard() {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }

  drawFrame() {
    // 枠線のスタイルを指定
    this.graphics = this.add.graphics({
      lineStyle: { width: 2, color: 0xffffff },
    });
    // 2点間を指定して枠線を描画
    for (let i = 0; i <= 3; i++) {
      this.graphics.lineBetween(
        this.boardOriginX,
        this.boardOriginY + i * this.cellSize,
        this.boardOriginX + BOARD_SIZE,
        this.boardOriginY + i * this.cellSize,
      ); // 横線
      this.graphics.lineBetween(
        this.boardOriginX + i * this.cellSize,
        this.boardOriginY,
        this.boardOriginX + i * this.cellSize,
        this.boardOriginY + BOARD_SIZE,
      ); // 縦線
    }
  }

  drawAgainButton() {
    const button = this.add
      .text(
        this.cameras.main.centerX,
        this.cameras.main.height - 50,
        "Play Again?",
        { fontSize: "32px", color: "#fff" },
      )
      .setInteractive({ useHandCursor: true })
      .setOrigin(0.5);

    button.on("pointerdown", () => {
      this.scene.restart();
    });
  }

  drawResult(text: string, color: string) {
    this.add
      .text(this.cameras.main.centerX, 40, text, {
        fontSize: "32px",
        color,
      })
      .setOrigin(0.5);
  }

  getClickedCell(pointer: Phaser.Input.Pointer) {
    const y = Math.floor((pointer.y - this.boardOriginY) / this.cellSize);
    const x = Math.floor((pointer.x - this.boardOriginX) / this.cellSize);
    return [y, x];
  }

  getCellCenter(y: number, x: number) {
    const centerY = this.boardOriginY + y * this.cellSize + this.cellSize / 2;
    const centerX = this.boardOriginX + x * this.cellSize + this.cellSize / 2;
    return [centerY, centerX];
  }

  drawX(y: number, x: number) {
    const [centerY, centerX] = this.getCellCenter(y, x);
    this.graphics.lineStyle(5, 0x0000ff);
    this.graphics.lineBetween(
      centerX - this.stoneSize,
      centerY - this.stoneSize,
      centerX + this.stoneSize,
      centerY + this.stoneSize,
    );
    this.graphics.lineBetween(
      centerX + this.stoneSize,
      centerY - this.stoneSize,
      centerX - this.stoneSize,
      centerY + this.stoneSize,
    );
  }

  drawO(y: number, x: number) {
    const [centerY, centerX] = this.getCellCenter(y, x);
    this.graphics.lineStyle(5, 0xff0000);
    this.graphics.strokeCircle(centerX, centerY, this.stoneSize);
  }

  putStone(y: number, x: number) {
    if (this.turn) {
      this.board[y][x] = Stone.O;
      this.drawO(y, x);
    } else {
      this.board[y][x] = Stone.X;
      this.drawX(y, x);
    }
  }

  changeTurn() {
    this.turn ^= 1;
  }

  getResult(): Result {
    const lines = [
      // 各行
      [this.board[0][0], this.board[0][1], this.board[0][2]],
      [this.board[1][0], this.board[1][1], this.board[1][2]],
      [this.board[2][0], this.board[2][1], this.board[2][2]],
      // 各列
      [this.board[0][0], this.board[1][0], this.board[2][0]],
      [this.board[0][1], this.board[1][1], this.board[2][1]],
      [this.board[0][2], this.board[1][2], this.board[2][2]],
      // 2つの対角線
      [this.board[0][0], this.board[1][1], this.board[2][2]],
      [this.board[2][0], this.board[1][1], this.board[0][2]],
    ];

    for (const line of lines) {
      const [a, b, c] = line;
      // 3つのセルが同じマークで埋まっているかを確認
      if (a !== null && a === b && b === c) {
        return a === Stone.X ? "X" : "O";
      }
    }

    // 2次元配列を1次元配列に変換して、全てのセルが埋まっているかを確認
    if (this.board.flat().every((cell) => cell !== null)) {
      return "DRAW";
    }

    return null;
  }
}
