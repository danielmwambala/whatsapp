import { View, ImageBackground } from "react-native";
import React from "react";
import image from "../../../assets/images/bg.jpg";

const Wrapper = ({ children }) => {
  return (
    <View className="flex-1">
      <ImageBackground source={image} resizeMode="cover" className="flex-1">
        {children}
      </ImageBackground>
    </View>
  );
};

export default Wrapper;
