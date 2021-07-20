import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding:44
  },
  subtitle: {
    fontFamily: "SFProText-Semibold",
    fontSize:24,
    lineHeight:30,
    marginBottom:12,
    color:'#0C0D34'
  },
  description: {
    fontFamily: "SFProText-Regular",
    fontSize:16,
    lineHeight:24,
    color:'#0C0D34',
    textAlign:"center"
  }
});

interface SubslideProps {
  subtitle: string;
  description: string;
  last?: boolean;
}

const Subslide = ({ subtitle, description, last}:SubslideProps ) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default Subslide;
