import { Ball, GameState } from "./types";

export const update: (gameState: GameState) => GameState = (gameState) => {
  const newGameState: GameState = {
    balls: gameState.balls.map((ball, index) => {
      return moveBall(ball);
    }),
    lives: gameState.lives,
    percentToWin: gameState.percentToWin,
    currentPercent: gameState.currentPercent,
  };
  return newGameState;
};

export const moveBall = (ball: Ball) => {
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
