import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import {
  MaterialCommunityIcons,
  Fontisto,
  MaterialIcons,
} from "react-native-vector-icons";
import { callsData } from "../data/CallsData";
import FabButton from "../components/global/FabButton";
import { Colors } from "../constants/Colors";

const Calls = () => {
  const [data, setData] = useState(callsData);
  useEffect(() => {
    setData(callsData);
  });

  const callCategory = (type) => {
    switch (type) {
      case "missed":
        return (
          <MaterialCommunityIcons
            name="call-received"
            size={15}
            color={"red"}
          />
        );

      case "incoming":
        return (
          <MaterialCommunityIcons
            name="call-received"
            size={15}
            color={Colors.green}
          />
        );

      case "outgoing":
        return (
          <MaterialCommunityIcons
            name="call-made"
            size={15}
            color={Colors.green}
          />
        );

      default:
        return null;
    }
  };

  const renderItem = useCallback((itemData) => {
    const { item } = itemData;

    return (
      <View className="flex-row items-center justify-between my-1 space-x-3">
        <View className="w-12 h-12 rounded-full">
          <Image
            source={{ uri: item.photos }}
            className="w-full h-full rounded-full bg-gray-300"
          />
        </View>
        <TouchableOpacity className="flex-1 flex-col w-full space-y-1 py-2">
          <Text className="text-base text-gray-700 font-semibold">
            {item.name}
          </Text>
          <View className="flex-row items-center space-x-1">
            {callCategory(item.category)}
            <Text className={`text-xs text-gray-600`}>{item.time}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="">
          <MaterialCommunityIcons
            name={item.type === "voice" ? "phone" : "video"}
            size={26}
            color={Colors.primary}
          />
        </TouchableOpacity>
      </View>
    );
  }, []);

  const openNewChat = () => {};
  const createStatus = () => {};

  return (
    <View className="flex-1 px-4">
      {/* my status */}
      <View className="flex-row items-center justify-between">
        <TouchableOpacity
          onPress={createStatus}
          className="flex-row flex-1 items-center justify-between my-3 space-x-3"
        >
          <View className="bg-theme-color h-10 w-10 rounded-full items-center justify-center">
            <Fontisto name="link" size={16} color="#FFFFFF" />
          </View>
          <View className="flex-1">
            <Text className="text-lg text-gray-700">Create call link</Text>
            <Text className="text-gray-700">
              Share a link for your whatsApp call
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="flex items-center justify-center">
          <Fontisto name="trash" size={16} color="red" />
        </TouchableOpacity>
      </View>

      <Text className="text-base text-gray-600 my-2">Recent</Text>
      {/* display the call list */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        extraData={data}
        nestedScrollEnabled={true}
        maxToRenderPerBatch={3}
        initialNumToRender={3}
        showsVerticalScrollIndicator={false}
      />
      <FabButton
        onPressAction={openNewChat}
        icon={<MaterialIcons name="add-call" size={25} color="#FFFFFF" />}
      />
    </View>
  );
};

export default Calls;
