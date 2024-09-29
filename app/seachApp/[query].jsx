import React from 'react';
import { ScrollView, View } from 'react-native';
import AppHeader from '../components/AppOverview/AppHeader';
import AppInfo from '../components/AppOverview/AppInfo';
import AppDetails from '../components/AppOverview/AppDetails';
import { SafeAreaView } from 'react-native-safe-area-context';

const AppOverview = () => (
  <SafeAreaView >
  <ScrollView>
    <View>
      <AppHeader />
      <AppInfo
      appName = "TikTok"
      category = "Entertainment"
      rating = "1"
      iconUri = "https://static.vecteezy.com/system/resources/previews/023/986/561/non_2x/tiktok-logo-tiktok-logo-transparent-tiktok-icon-transparent-free-free-png.png"
      />
      <AppDetails />
    </View>
  </ScrollView>
  </SafeAreaView>
);

export default AppOverview;
