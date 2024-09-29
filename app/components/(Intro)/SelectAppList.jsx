import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SelectAppList = ({ name, highlighted, hasIcon }) => {
  const containerClass = `flex flex-row justify-between items-center p-4 mt-2 w-full rounded-xl ${
    highlighted ? 'bg-indigo-50' : 'border-solid border-[0.5px] border-stone-300'
  }`;

  return (
    <TouchableOpacity className={containerClass}>
      <View className="flex-1 shrink self-stretch my-auto min-w-[240px]">
        <Text>{name}</Text>
      </View>
      {hasIcon && (
        <Feather name="check" size={24} color="black" />
      )}
    </TouchableOpacity>
  );
};

export default SelectAppList;