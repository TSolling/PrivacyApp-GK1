import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import SelectAppList from "../components/(Intro)/SelectAppList";
import Button from "../components/Button";


const AppData = [
    { name: 'Facebook', highlighted: true, hasIcon: true },
    { name: 'Instagram', highlighted: false, hasIcon: false },
    { name: 'Whatsapp', highlighted: true, hasIcon: true },
    { name: 'Reddit', highlighted: false, hasIcon: false },
    { name: 'Google', highlighted: false, hasIcon: false },
    { name: 'Gmail', highlighted: false, hasIcon: false },
    { name: 'TikTok', highlighted: true, hasIcon: true },
  ];

const SelectApps = () => {
  return (
    <SafeAreaView className="flex-1 items-center bg-white">
    <View>
    <View className="flex flex-col mt-10 w-full">
      <View >
        <Text className="text-2xl font-extrabold tracking-wide text-neutral-800">Which apps do you use?</Text>
      </View>
      <View >
        <Text className="mt-4 text-sm leading-5 text-zinc-500">
          Choose the main apps that use normally use. You can always add more later on.
        </Text>
      </View>
    </View>
    <ScrollView>
      <View className="flex flex-col mt-10 w-full px-4 text-sm leading-none whitespace-nowrap text-neutral-800">
        {AppData.map((item, index) => (
          <SelectAppList
            key={index}
            name={item.name}
            highlighted={item.highlighted}
            hasIcon={item.hasIcon}
          />
        ))}
      </View>
    </ScrollView>
    <View className="flex flex-col pt-6 pr-4 pl-4 py-8 mt-0  h-[149px]">
      <Button>Next</Button>
    </View>
    </View>
    </SafeAreaView>
  );
};

export default SelectApps;