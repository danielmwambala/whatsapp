import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Community from "../screens/Community";
import Chat from "../screens/Chat";
import Status from "../screens/Status";
import Calls from "../screens/Calls";
import { Colors } from "../constants/Colors";

const Tab = createMaterialTopTabNavigator();

const Navigation = () => {
  const tabs = [
    { name: "Community", component: Community },
    { name: "Chat", component: Chat },
    { name: "Status", component: Status },
    { name: "Calls", component: Calls },
  ];
  return (
    <Tab.Navigator
      initialRouteName="Chat"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarIndicatorStyle: {
          backgroundColor: "white",
        },
        tabBarLabelStyle: {
          fontWeight: "bold",
        },
        tabBarStyle: {
          backgroundColor: Colors.primary,
        },
      }}
    >
      {tabs.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.name}
            component={item.component}
            options={{ tabBarLabel: item.name }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default Navigation;
