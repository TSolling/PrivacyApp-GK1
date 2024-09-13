import { View, Text, FlatList} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import MainInfoBox from '../components/home/mainInfoBox';
import Applist from '../components/Applist';

const Home = () => {
  return (
   <SafeAreaView>
    <FlatList
    data={[
      {id: 1, title: 'Youtube', icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-color-icon.png", catagory: "Intertainment", score: "87"},
      {id: 2, title: 'Facebook', icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-round-color-icon.png", catagory: "Social", score: "32"},
      {id: 3, title: 'Reddit', icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/reddit-square-color-icon.png", catagory: "Social", score: "72"},
      {id: 4, title: 'Notion', icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/notion-icon.png", catagory: "Productivity", score: "78"},
      {id: 5, title: 'Google', icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-color-icon.png", catagory: "Search", score: "85"}
    ]}
    keyExtractor={(item) => item.$id}
    renderItem={({ item }) => ( 
      <Applist app={item}/>
    )}
    ListHeaderComponent={ 
      <View className=" my-6 px-4 space-y-4">
        <View className="justify-between items-start flex-row mb-6">
          <View>
            <Text className=" font-medium text-sm, text-gray-500">
              Welcome back 
            </Text>
            <Text className="text-2xl font-semibold">Bossman</Text>
          </View>
        </View>
        <MainInfoBox></MainInfoBox>
        <Text className="font-medium text-sm, text-gray-500">My apps</Text>
      </View>
    }
    />
   </SafeAreaView>
)}

export default Home