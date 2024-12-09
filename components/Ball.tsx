import { StyleSheet, View } from "react-native";

export default function ({ x, y }: { x: number; y: number }) {
  const styleProps = {
    top: x,
    left: y,
  };

  return <View style={[styles.ball, styleProps]} />;
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
