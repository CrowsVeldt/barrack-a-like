import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { GameState } from "@/types";

export default function Index() {
  const playing = useState<boolean>(false);
  const gameState = useState<GameState>({
    balls: [
      { x: 0, y: 0, velocity: 5, direction: 45 },
      { x: 0, y: 0, velocity: 5, direction: 90 },
      { x: 0, y: 0, velocity: 5, direction: 180 },
    ],
    lives: 3,
    percentToWin: 80,
    currentPercent: 0,
  });

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
