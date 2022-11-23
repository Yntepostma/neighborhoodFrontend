import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import store from "./Store";
import { Provider } from "react-redux";
import { HomePage, SignupPage } from "./Pages";
import { useDispatch } from "react-redux";
import { getNeighborhoods } from "./Store/neighborhood/thunk";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWrapper;

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Signup" component={SignupPage} />
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
