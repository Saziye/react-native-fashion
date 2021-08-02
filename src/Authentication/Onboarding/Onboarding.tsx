import React, { useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import {
  interpolateColor,
  useScrollHandler,
} from "react-native-redash/lib/module/v1";
import Animated, { divide, multiply } from "react-native-reanimated";

import Slide, { SLIDE_HEIGT, BORDER_RADIUS } from "./Slide";
import Subslide from "./Subslide";
import Dot from "./Dot";

const { width } = Dimensions.get("window");

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
  footerContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

const slides = [
  {
    title: "Relaxed",
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfits? Don't worry! Find the best outfits here!",
    color: "#BFEAF5",
    picture: {
      src: require("../../../assets/images/1.png"),
      width:2513,
      height:3583

    }
  },
  {
    title: "Playful",
    subtitle: "Hear it First, Wear it first",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
    color: "#BEECC4",
    picture: {
      src: require("../../../assets/images/2.png"),
      width:2791,
      height:3744
    }
  },
  {
    title: "Excentic",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday",
    color: "#FFE4D9",
    picture: {
      src: require("../../../assets/images/3.png"),
      width:2738,
      height:3244
    }
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: "#FFDDDD",
    picture: {
      src:require("../../../assets/images/4.png"),
      width:1757,
      height:2551
    }
  },
];

const Onboarding = () => {
  const scroll = useRef<Animated.ScrollView>(null);
  // const x = useValue(0);
  // const onScroll = onScrollEvent({ x });
  const { scrollHandler, x } = useScrollHandler();
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
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          // {...{ onScroll }}
          {...scrollHandler}
        >
          {slides.map(({ title, picture }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title, picture }} />
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
        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              width: width * slides.length,
              flexDirection: "row",
              transform: [{ translateX: multiply(x, -1) }],
            }}
          >
            {slides.map(({ subtitle, description }, index) => (
              <Subslide
                key={index}
                last={index === slides.length - 1}
                onPress={() => {
                  if (scroll.current) {
                    scroll.current
                      .getNode()
                      .scrollTo({ x: width * (index + 1), animated: true });
                  }
                }}
                {...{ subtitle, description }}
              />
            ))}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;
