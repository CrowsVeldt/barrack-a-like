import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

export default function ({ x, y }: { x: number; y: number }) {
  const styleProps = {
    top: x,
    left: y,
  };

  return <Animated.View style={[styles.ball, styleProps]} />;
}
const styles = StyleSheet.create({
  ball: {
    position: "absolute",
    height: 10,
    width: 10,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "black",
    backgroundColor: "black",
  },
});
