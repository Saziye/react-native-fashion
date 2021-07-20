import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Slide, { SLIDE_HEIGT } from "./Slide";
import {
  useValue,
  onScrollEvent,
  interpolateColor,
} from "react-native-redash/lib/module/v1";
import Animated from "react-native-reanimated";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGT,
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
});

const slides = [
  { label: "Relaxed", color: "#BFEAF5" },
  { label: "Playful", color: "#BEECC4" },
  { label: "Excentic", color: "#FFE4D9" },
  { label: "Funky", color: "#FFDDDD" },
];

const Onboarding = () => {
  const x = useValue(0);
  const onScroll = onScrollEvent({ x });
  // const backgroundColor = interpolateColor(x, {
  //   inputRange: [0, width, width * 2, width * 3],
  //   outputRange: ["#BFEAF5", "#BEECC4", "#FFE4D9", "#FFDDDD"],
  // });
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...{ onScroll }}
        >
          {slides.map(({ label }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ label }} />
          ))}
          {/* <Slide label="Relaxed" />
          <Slide label="Playful" right />
          <Slide label="Excentic" />
          <Slide label="Funky" right /> */}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <View
          style={{ flex: 1, backgroundColor: "white", borderTopLeftRadius: 75 }}
        />
      </View>
    </View>
  );
};

export default Onboarding;
