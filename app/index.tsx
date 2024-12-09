import { useState } from "react";
import { View } from "react-native";
import { GameState } from "@/types";
import { moveBall } from "@/utils";

export default function Index() {
  const [playing, setPlaying] = useState<boolean>(false);
  const [gameState, setGameState] = useState<GameState>({
    balls: [
      { position: { x: 0, y: 0 }, velocity: 5, direction: 45 },
      { position: { x: 0, y: 0 }, velocity: 5, direction: 90 },
      { position: { x: 0, y: 0 }, velocity: 5, direction: 180 },
    ],
    lives: 3,
    percentToWin: 80,
    currentPercent: 0,
  });

  console.log(moveBall(gameState.balls[2]));

  const tick = () => {
    const timeout = setTimeout(() => {
      if (playing) {
        // update gamestate
      } else {
        // end game
      }
    }, 1000 / 60);
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    ></View>
  );
}
