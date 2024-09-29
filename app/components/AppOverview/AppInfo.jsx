import React from 'react';
import { View, Image, Text } from 'react-native';
import StarRating from './StarRating';

const AppInfo = ({ appName, category, rating, iconUri }) => {
  return (
    <View className="flex-row bg-white rounded-2xl overflow-hidden mb-4">
      <View className="justify-center items-center p-4 rounded-l-2xl">
        <Image
          source={{ uri: iconUri }}
          className="w-16 h-16 rounded-xl"
          accessibilityLabel={`${appName} app icon`}
        />
      </View>
      <View className="flex-1 p-4 justify-between">
        <View>
          <Text className="text-lg font-bold text-neutral-800">{appName}</Text>
          <Text className="text-sm text-zinc-500">{category}</Text>
        </View>
        <View className="flex-row items-center justify-between mt-2">
          <StarRating rating={parseFloat(rating)} />
          <Text className="text-sm font-bold text-stone-900">{rating}</Text>
        </View>
      </View>
    </View>
  );
};

export default AppInfo;