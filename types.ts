export type Ball = {
  position: {
    x: number;
    y: number;
  };
  velocity: number;
  direction: number;
};

export type GameState = {
  balls: Ball[];
  lives: number;
  percentToWin: number;
  currentPercent: number;
};
