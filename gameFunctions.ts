import { BallType, GameStateType } from "./types";
import Constants from "expo-constants";

export const update: (gameState: GameStateType) => GameStateType = (
  gameState
) => {
  const newGameState: GameStateType = {
    balls: gameState.balls.map((ball, index) => {
      return moveBall(ball);
    }),
    lives: gameState.lives,
    percentToWin: gameState.percentToWin,
    currentPercent: gameState.currentPercent,
  };
  return newGameState;
};

export const moveBall: (
  ball: BallType,
  width: number,
  height: number
) => BallType = (ball, width, height) => {
  // Calculation for ball movement from: https://math.stackexchange.com/questions/143932/calculate-point-given-x-y-angle-and-distance
  // xx = x + (d * cos(alpha))
  // yy = y + (d * sin(alpha))

  const newX: number = Math.round(
    ball.position.x + ball.velocity * Math.cos(ball.direction * (Math.PI / 180))
  );

  const newY: number = Math.round(
    ball.position.y + ball.velocity * Math.sin(ball.direction * (Math.PI / 180))
  );

  const atEdge = (x: number, y: number) => {
    // Need to finalize x's second value
    const xAtEdge =
      x < 0 + Constants.statusBarHeight ||
      x >= height - Constants.statusBarHeight - 10;
    const yAtEdge = y < 0 || y >= width - 10;

    return xAtEdge || yAtEdge;
  };

  const newBall: BallType = {
    position: {
      x: atEdge(newX, newY) ? ball.position.x : newX,
      y: atEdge(newX, newY) ? ball.position.y : newY,
    },
    velocity: ball.velocity,
    direction: atEdge(newX, newY)
      ? (ball.direction + 180) % 360
      : ball.direction,
  };
  return newBall;
};
