import { Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import MainInfoBox from '../components/home/mainInfoBox';

import Feather from '@expo/vector-icons/Feather';

const search = () => {
  return (

    <SafeAreaView>
      <View>
      <MainInfoBox></MainInfoBox>
      </View>
    </SafeAreaView>
  )
}

export default search
