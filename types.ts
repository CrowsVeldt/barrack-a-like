export type BallType = {
  position: {
    x: number;
    y: number;
  };
  velocity: number;
  direction: number;
};

export type GameStateType = {
  balls: BallType[];
  lives: number;
  percentToWin: number;
  currentPercent: number;
};
