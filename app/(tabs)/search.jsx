import { Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Searchbar from '../components/searchbar';


const search = () => {
  return (

    <SafeAreaView>
      <View>
      <Searchbar></Searchbar>
      </View>
    </SafeAreaView>
  )
}

export default search
