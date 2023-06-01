import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Feather,
  MaterialCommunityIcons,
  Fontisto,
} from "react-native-vector-icons";

const Header = () => {
  return (
    <SafeAreaView className="flex bg-theme-color pb-1 pt-6">
      <View className="flex-row items-center justify-between w-full px-4">
        {/* display app name */}
        <Text className="text-white font-semibold text-xl">WhatsApp</Text>
        {/* display icons */}
        <View className="flex-row space-x-4 items-end">
          <Feather name="camera" size={20} color="white" />
          <Fontisto name="search" size={20} color="white" />
          <MaterialCommunityIcons
            name="dots-vertical"
            size={20}
            color="white"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
