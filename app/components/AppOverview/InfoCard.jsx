import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

const InfoCard = ({ text, backgroundColor }) => {
  const getIconName = () => {
    switch (backgroundColor) {
      case 'bg-green-200':
        return 'check';
      case 'bg-yellow-50':
        return 'alert-circle';
      case 'bg-rose-100':
        return 'x-circle';
      default:
        return 'info';
    }
  };

  const getIconColor = () => {
    switch (backgroundColor) {
      case 'bg-green-200':
        return '#4CAF50';
      case 'bg-yellow-50':
        return '#FFC107';
      case 'bg-rose-100':
        return '#F44336';
      default:
        return '#000000';
    }
  };

  return (
    <View className={`flex-row items-center p-4 mt-3 ${backgroundColor} rounded-2xl`}>
      <Feather name={getIconName()} size={24} color={getIconColor()} />
      <View className="flex-1 ml-4">
        <Text className="font-bold text-sm">{text}</Text>
      </View>
    </View>
  );
};

export default InfoCard;