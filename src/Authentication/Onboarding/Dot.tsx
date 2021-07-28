import React from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2CB9B0",
    height: 8,
    width: 8,
    borderRadius: 4,
  },
});

interface DotProps {
  index: number;
  currentIndex: Animated.Node<number>;
}

const Dot = ({ index, currentIndex }: DotProps) => {
  return <Animated.View style={styles.container}></Animated.View>;
};

export default Dot;
