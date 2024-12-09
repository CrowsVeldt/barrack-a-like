import { useState } from "react";
import { View } from "react-native";
import { Ball, GameState } from "@/types";

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

  const moveBall = (ball: Ball) => {
    // Calculation for ball movement from: https://math.stackexchange.com/questions/143932/calculate-point-given-x-y-angle-and-distance
    // xx = x + (d * cos(alpha))
    // yy = y + (d * sin(alpha))

    const newBall: Ball = {
      position: {
        x: Math.round(
          ball.position.x +
            ball.velocity * Math.cos(ball.direction * (Math.PI / 180))
        ),
        y: Math.round(
          ball.position.y +
            ball.velocity * Math.sin(ball.direction * (Math.PI / 180))
        ),
      },
      velocity: ball.velocity,
      direction: ball.direction,
    };
    return newBall;
  };
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
