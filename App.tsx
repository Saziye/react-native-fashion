import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {Onboarding, Welcome} from "./src/Authentication";
import { LoadAssets } from "./src/components";

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

const AuthenticationStcak = createStackNavigator();
const AuthenticationNavigator = () => {
  return (
    <AuthenticationStcak.Navigator headerMode={"none"}>
      <AuthenticationStcak.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStcak.Screen name="Welcome" component={Welcome} />
    </AuthenticationStcak.Navigator>
  );
};

export default function App() {
  return (
    <LoadAssets {...{fonts}}>
      <AuthenticationNavigator />
    </LoadAssets>
  );
}
