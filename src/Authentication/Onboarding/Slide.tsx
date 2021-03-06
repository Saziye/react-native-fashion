import React from "react";
import { View, Dimensions, StyleSheet, Image, ImageRequireSource } from "react-native";
import {Text} from "../../components";

const { width, height } = Dimensions.get("window");
export const SLIDE_HEIGT = height * 0.61;
export const BORDER_RADIUS = 75;

const styles = StyleSheet.create({
  container: {
    width,
  },
  underlay: {
      ...StyleSheet.absoluteFillObject,
      justifyContent:"flex-end"
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    width:undefined,
    height:undefined,
    borderBottomRightRadius: BORDER_RADIUS
  },
  titleContainer: {
    height: 100,
    justifyContent: "center",
  },
});

interface SlideProps {
  title: string;
  right?: boolean;
  picture: {
    src:ImageRequireSource,
    width:number,
    height:number
  }
}

const Slide = ({ title, right, picture }: SlideProps) => {
  const transform = [
    { translateY: (SLIDE_HEIGT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? "-90deg" : "90deg" },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.underlay}>
        <Image source={picture.src} style={styles.picture} />
      </View>
      <View style={[styles.titleContainer, { transform }]}>
        <Text variant="hero">{title}</Text>
      </View>
    </View>
  );
};

export default Slide;
