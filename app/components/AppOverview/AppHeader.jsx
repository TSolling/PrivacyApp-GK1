import React from 'react';
import { View, Text, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

const AppHeader = () => (
  <View>
  <View className="flex-row items-center justify-between py-5 px-6 bg-white">
  <View className="flex-1 items-center">
    <Text className="text-xl font-bold">TikTok</Text>
  </View>
  <Feather name="search" size={24} color="black" />
</View>
<View className="flex flex-row justify-center items-center self-center p-1 w-full rounded-2xl bg-slate-50 max-w-[343px] ">
    <View className="flex-1 shrink items-center justify-center gap-2.5 self-stretch px-3 py-2 my-auto bg-white rounded-xl">
      <Text className=" font-semibold">Overview</Text>
    </View>
    <View className="flex-1 shrink gap-2.5  items-center justify-center self-stretch px-3 py-2 my-auto rounded-xl">
      <Text className=" font-semibold">Guides</Text>
    </View>
  </View>
</View>
);

export default AppHeader;