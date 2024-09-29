import { StyleSheet, Text, View, } from 'react-native'
import { Link } from 'expo-router';
import React from 'react'
import Feather from '@expo/vector-icons/Feather';

const MainInfoBox = () => {
  return (
    <View className="flex flex-col items-center space-x-4 w-full h-36 px-4 bg-white rounded-2xl border-2 border-gray-200">
        <View className=" flex flex-row gap-2 py-3 ">
        <Feather name="smile" size={24} color="green" />
        <Text className="text-xl font-semibold text-green-700">You are all set!</Text>
        </View>
        <View className="flex gap-2">
        <Text className="text-sm font-medium text-gray-600">
            You have no pending tasks to improve your privacy. This is great news!
        </Text>
        <View className="flex-row-reverse  py-1">
            <Feather name="chevron-right" size={20} color="gray" />
            <Link href="search" className="text-blue-500 underline">
            Learn more
          </Link>
        </View>
        </View>
      </View>


  )
}

export default MainInfoBox

