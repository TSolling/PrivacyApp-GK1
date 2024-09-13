import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';

const Applist = ({ app: {title, icon, catagory, score, link } }) => {
  return (
    <View className="flex-col items-center divide-y-2 devide  px-4 mb-8 ">
        <View className="flex-row gap-3 items-start">
            <View className="justify-center items-center flex-row flex-1" >
                <View className="w-[46px] h-[46px] rounded-lg justify-center items-center p-0.5 ">
                    <Image source={{uri: icon}} className="w-full h-full rounded-lg" resizeMode='cover'></Image>
                </View>
                <View className="justify-center flex-1 ml-3 gap-y-1">
                    <Text className="text-primary font-semibold text-sm" numberOfLines={1}>{title}</Text>
                    <Text className="text-gray-500 text-xs" numberOfLines={1}>{catagory}</Text>
                </View>
            </View>
            <View className="justify-center items-center flex-row gap-2">
                <View className="bg-green-300 items-center justify-center  w-12 h-7 me-2 px-2.5 py-0.5 border-1 border-gray-200 rounded">
                     <Text className="text-sm font-medium text-gray-500">{score}</Text>
                </View>
                <Feather name="more-vertical" size={24} color="black" />
                </View>
        </View>
        
    </View>


  )
}

export default Applist

