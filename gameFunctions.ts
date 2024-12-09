import { BallType, GameStateType } from "./types";

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

export const moveBall: (ball: BallType) => BallType = (ball) => {
  // Calculation for ball movement from: https://math.stackexchange.com/questions/143932/calculate-point-given-x-y-angle-and-distance
  // xx = x + (d * cos(alpha))
  // yy = y + (d * sin(alpha))

  const newX: number = Math.round(
    ball.position.x + ball.velocity * Math.cos(ball.direction * (Math.PI / 180))
  );

  const newY: number = Math.round(
    ball.position.y + ball.velocity * Math.sin(ball.direction * (Math.PI / 180))
  );

  const newBall: BallType = {
    position: {
      x: newX,
      y: newY,
    },
    velocity: ball.velocity,
    direction: ball.direction,
  };
  return newBall;
};
