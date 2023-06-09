import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { statusData } from "../data/StatusData";
import FabButton from "../components/global/FabButton";
import avatar from "../../assets/images/avatar.jpg";

const Status = () => {
  const [data, setData] = useState(statusData);
  useEffect(() => {
    setData(statusData);
  });

  const combinedStatusData = [
    {
      title: "Recent updates",
      data: data?.filter((item) => item.viewed === false),
    },
    {
      title: "Viewed updates",
      data: data?.filter((item) => item.viewed === true),
    },
  ];

  const renderItem = useCallback((itemData) => {
    const { item } = itemData;

    return (
      <View className="">
        <Text className="text-base text-gray-600 my-2">{item.title}</Text>
        <FlatList
          data={item.data}
          keyExtractor={(item) => item.id.toString()}
          extraData={item.data}
          nestedScrollEnabled={true}
          maxToRenderPerBatch={3}
          initialNumToRender={3}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View className="flex-row space-x-3 my-2">
              <View className="w-12 h-12 rounded-full">
                <Image
                  source={{ uri: item.photos }}
                  className="w-full h-full rounded-full bg-gray-300"
                />
              </View>
              <TouchableOpacity className="flex-1">
                <Text className="text-base text-gray-700 font-semibold">
                  {item.name}
                </Text>
                <Text className={`text-xs text-gray-600`}>{item.time}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }, []);

  const viewStatus = () => {};
  const createStatus = () => {};

  return (
    <View className="flex-1 px-4">
      {/* my status */}
      <TouchableOpacity
        onPress={createStatus}
        className="flex-row items-center justify-between my-3 space-x-3"
      >
        <View className="w-12 h-12 rounded-full">
          <Image
            source={avatar}
            className="w-full h-full rounded-full bg-gray-300"
          />
          <View className="absolute bg-theme-color h-5 w-5 rounded-full items-center justify-center bottom-1 right-0 border border-white">
            <MaterialCommunityIcons name="plus" size={16} color="#FFFFFF" />
          </View>
        </View>
        <View className="flex-1">
          <Text className="text-lg text-gray-700 font-semibold">My status</Text>
          <Text className="text-gray-700">Tap to add status update</Text>
        </View>
      </TouchableOpacity>

      {/* display the statuses */}
      <FlatList
        data={combinedStatusData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        extraData={combinedStatusData}
        nestedScrollEnabled={true}
        maxToRenderPerBatch={3}
        initialNumToRender={3}
        showsVerticalScrollIndicator={false}
      />
      <FabButton
        onPressAction={viewStatus}
        icon={
          <MaterialCommunityIcons name="pencil" size={25} color="#FFFFFF" />
        }
      />
    </View>
  );
};

export default Status;
