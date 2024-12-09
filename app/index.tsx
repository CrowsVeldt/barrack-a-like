import { useEffect, useState } from "react";
import { Button, useWindowDimensions, View } from "react-native";
import { GameStateType, BallType } from "@/types";
import { moveBall, update } from "@/gameFunctions";
import Ball from "@/components/Ball";
import {
  SharedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

export default function Index() {
  // x = width, y = height
  const { width, height }: { height: number; width: number } =
    useWindowDimensions();
  const gameState: SharedValue<GameStateType> = useSharedValue({
    balls: [
      { position: { x: height / 2, y: width / 2 }, velocity: 5, direction: 45 },
      { position: { x: height / 2, y: width / 2 }, velocity: 5, direction: 90 },
      { position: { x: height / 2, y: width / 2 }, velocity: 5, direction: 0 },
    ],
    lives: 3,
    percentToWin: 80,
    currentPercent: 0,
  });
  const [currentBalls, setCurrentBalls] = useState<BallType[]>(
    gameState.value.balls
  );
  const [playing, setPlaying] = useState<boolean>(false);

  useEffect(() => {
    const newBalls = currentBalls.map((ball) => moveBall(ball));
    setCurrentBalls(newBalls)
  }, [playing]);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {currentBalls &&
        currentBalls.map((ball, index) => {
          return <Ball x={ball.position.x} y={ball.position.y} key={index} />;
        })}
      <Button title="play" onPress={() => setPlaying(!playing)} />
    </View>
  );
}
