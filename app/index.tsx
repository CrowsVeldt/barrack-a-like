import { useEffect, useState } from "react";
import { useWindowDimensions, View } from "react-native";
import { GameState } from "@/types";
import { moveBall } from "@/utils";
import Ball from "@/components/Ball";

export default function Index() {
  // x = width
  // y = height
  const { height, width }: { height: number; width: number } =
    useWindowDimensions();
  const [playing, setPlaying] = useState<boolean>(false);
  const [gameState, setGameState] = useState<GameState>({
    balls: [
      { position: { x: 0, y: 0 }, velocity: 5, direction: 45 },
      { position: { x: 10, y: 10 }, velocity: 5, direction: 90 },
      { position: { x: 20, y: 20 }, velocity: 5, direction: 180 },
    ],
    lives: 3,
    percentToWin: 80,
    currentPercent: 0,
  });

  const tick = () => {
    const timeout = setTimeout(() => {
      if (playing) {
        const newGameState: GameState = {
          balls: gameState.balls.map((ball, index) => {
            return moveBall(ball);
          }),
          lives: gameState.lives,
          percentToWin: gameState.percentToWin,
          currentPercent: gameState.currentPercent,
        };

        console.log(newGameState.balls);
        setGameState(newGameState);
        tick();
      } else {
        // end game
        clearTimeout(timeout);
      }
    }, 1000);
  };

  useEffect(() => {
    tick()
  }, [])

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {gameState &&
        gameState.balls.map((ball, index) => {
          return <Ball x={ball.position.x} y={ball.position.y} key={index} />;
        })}
    </View>
  );
}
