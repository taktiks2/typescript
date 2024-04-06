import { SampleGame } from "./scenes/SampleGame";
import { Game, Types } from "phaser";
import { W_WIDTH, W_HEIGHT } from "./lib/constants";

const config: Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: W_WIDTH,
  height: W_HEIGHT,
  parent: "game-container",
  backgroundColor: "#028af8",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [SampleGame],
  // NOTE: physicsを使うときには必須
  physics: {
    default: "arcade",
    arcade: {
      debug: true, // スプライトに緑の枠を表示
      gravity: { y: 300, x: 0 }, // 重力の方向とその強さ
    },
  },
};

export default new Game(config);
