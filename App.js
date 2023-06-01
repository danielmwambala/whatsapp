import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Header from "./src/components/Header";
import Navigation from "./src/components/Navigation";

export default function App() {
  return (
    <NavigationContainer>
      <View className="flex-1">
        <StatusBar backgroundColor="#0e806a" barStyle="light-content" />
        <Header />
        <View className="flex-1 bg-white">
          <Navigation />
        </View>
      </View>
    </NavigationContainer>
  );
}
