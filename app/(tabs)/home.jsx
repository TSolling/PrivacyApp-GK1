import { View, Text, FlatList} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, {useEffect} from 'react'
import MainInfoBox from '../components/home/mainInfoBox';
import Applist from '../components/Applist';
import { getAllApps } from '../../lib/appwrite';

const Home = () => {

const [data, setData] = React.useState([])
const [loading, setLoading] = React.useState(true)

useEffect(() => {
  const fetchData = async () => {
    setLoading(true);

    try {

      const response = await getAllApps();
      setData(response);
      console.log(data);
    }
    catch (error) {
      console.error(error);
    }
    finally {
      setLoading(false);
    }
  }
  fetchData();
}, []);

  



  return (
   <SafeAreaView>
<FlatList
  data={data}
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
            <Text className="text-2xl font-semibold">Tobias</Text>
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
