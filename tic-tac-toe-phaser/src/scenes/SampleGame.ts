import { Scene } from "phaser";
import { W_WIDTH, W_HEIGHT } from "../lib/constants";
import { changeScene } from "../lib/utils";

export class SampleGame extends Scene {
  camera: Phaser.Cameras.Scene2D.Camera;
  background: Phaser.GameObjects.Image;
  msg_text: Phaser.GameObjects.Text;
  player: Phaser.Physics.Arcade.Sprite;
  cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
  stars: Phaser.Physics.Arcade.Group;

  constructor() {
    super("SampleGame");
  }

  preload() {
    console.log("preload");
    this.load.setPath("assets");
    this.load.image("ghost", "ghost.png");
    this.load.image("star", "star.png");
    this.load.image("ground", "ground.png");
    this.load.image("block", "block.png");
  }

  create() {
    console.log("create");
    // プレイヤーの配置
    this.player = this.physics.add.sprite(W_WIDTH / 2, W_HEIGHT / 2, "ghost");

    // フィールドの配置
    const staticGroup = this.physics.add.staticGroup();
    staticGroup.create(W_WIDTH / 2, W_HEIGHT, "ground");
    staticGroup.create(400, 700, "block");
    staticGroup.create(700, 700, "block");

    // プレイヤーとフィールドの衝突判定
    this.physics.add.collider(this.player, staticGroup);

    // 星の配置
    this.stars = this.physics.add.group();
    this.stars.create(370, 300, "star");
    this.stars.create(730, 300, "star");

    // 星とフィールドの衝突判定
    this.physics.add.collider(this.stars, staticGroup);

    // プレイヤーと星の衝突判定
    this.physics.add.overlap(this.player, this.stars, (_, star) => {
      // 衝突判定時の処理
      star.destroy();
    });

    // 次のシーンへ遷移できるテキストの追加
    const text = this.add.text(W_WIDTH / 2, W_HEIGHT / 2, "Next Scene");
    text.setInteractive();
    text.on("pointerdown", () => {
      changeScene(this.game, "TicTacToe");
    });
  }

  update() {
    console.log("update");
    this.cursors = this.input.keyboard?.createCursorKeys();

    if (this.cursors?.up.isDown) {
      this.player.setVelocityY(-100);
    } else if (this.cursors?.left.isDown) {
      this.player.setVelocityX(-100);
    } else if (this.cursors?.right.isDown) {
      this.player.setVelocityX(100);
    } else {
      this.player.setVelocityX(0);
    }
  }
}
