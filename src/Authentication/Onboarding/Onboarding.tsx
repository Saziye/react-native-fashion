import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Slide, {SLIDE_HEIGT} from "./Slide";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
  },
  slider: {
    height: SLIDE_HEIGT,
    backgroundColor: "cyan",
    borderBottomRightRadius:75
  },
  footer: {
    flex: 1,
  },
});

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          bounces={false}
        >
          <Slide label="Relaxed" />
          <Slide label="Playful" right />
          <Slide label="Excentic" />
          <Slide label="Funky" right />
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View style={{...StyleSheet.absoluteFillObject,backgroundColor:"cyan"}}/>
        <View style={{flex:1,backgroundColor:"white", borderTopLeftRadius:75}}/>
      </View>
    </View>
  );
};

export default Onboarding;
