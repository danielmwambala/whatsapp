import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { chatData } from "../data/ChatData";
import FabButton from "../components/global/FabButton";

const Chat = () => {
  const [data, setData] = useState(chatData);
  useEffect(() => {
    setData(chatData);
  });

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
        <TouchableOpacity className="flex-1 flex-row w-full space-x-1 py-2 items-center">
          <View className="flex-1">
            <View className="flex-row items-center justify-between">
              <Text className="text-base text-gray-700 font-semibold">
                {item.name}
              </Text>
              <Text
                className={`text-xs ${
                  item.totalUnread > 0 ? "text-green-light" : "text-gray-600"
                }`}
              >
                {item.time}
              </Text>
            </View>
            <View className="flex-row items-center justify-between space-x-4">
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                className="text-gray-700 flex-1"
              >
                {item.lastMessage}
              </Text>
              {item.totalUnread > 0 ? (
                <View
                  className={`p-1 bg-green-light rounded-full items-center justify-center h-6 ${
                    item.totalUnread > 99 ? "" : "w-6"
                  }`}
                >
                  <Text className={`text-white text-xs`}>
                    {item.totalUnread}
                  </Text>
                </View>
              ) : null}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }, []);

  const openNewChat = () => {};

  return (
    <View className="flex-1 px-4">
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
        icon={
          <MaterialCommunityIcons
            name="android-messages"
            size={25}
            color="#FFFFFF"
          />
        }
      />
    </View>
  );
};

export default Chat;
