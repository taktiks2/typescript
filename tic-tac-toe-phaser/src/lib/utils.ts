import { Game } from "phaser";

export function changeScene(game: Game, scene: string) {
  const url = new URL(location.href);
  url.searchParams.set("scene", scene);
  history.replaceState({}, "", url);
  game.scene.start(scene);
}
