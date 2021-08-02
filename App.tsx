import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "@shopify/restyle";
import { Onboarding, Welcome } from "./src/Authentication";
import { LoadAssets, theme } from "./src/components";
const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
  "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
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
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts }}>
        <AuthenticationNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
}
