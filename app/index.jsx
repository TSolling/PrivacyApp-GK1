import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView } from 'react-native';
import { Link } from 'expo-router';
// import useFonts from 'expo-font'; if different font is needed - 35:10
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <ScrollView className="flex-1 bg-white">
        <View className="flex-1 items-center justify-center ">
          <Text className="text-2xl font-bold">
            Dette er introsiden.
          </Text>
          <Text>To make at a later date.</Text>
          <Link href="home" className="text-blue-500 underline">
            Go to Home
          </Link>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
