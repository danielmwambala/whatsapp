import { Text, TouchableOpacity } from "react-native";
import React from "react";

const FabButton = ({ onPressAction, icon }) => {
  return (
    <TouchableOpacity
      className={`bg-theme-color opacity-80 items-center justify-center right-3 h-14 w-14 p-2 rounded-full  bottom-10 z-50 absolute`}
      onPress={onPressAction}
    >
      {icon}
    </TouchableOpacity>
  );
};

export default FabButton;
