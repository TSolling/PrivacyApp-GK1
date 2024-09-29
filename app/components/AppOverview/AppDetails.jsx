import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import InfoCard from './InfoCard';

const cardData = [
  {
    text: "You maintain ownership of your data",
    backgroundColor: "bg-green-200"
  },
  {
    text: "Your personal data is not sold",
    backgroundColor: "bg-green-200"
  },
  {
    text: "This app may collect, use and share location data.",
    backgroundColor: "bg-yellow-50"
  },
  {
    text: "Third-party cookies are used for advertising",
    backgroundColor: "bg-yellow-50"
  },
  {
    text: "Your private messages can be read",
    backgroundColor: "bg-rose-100"
  },
  {
    text: "You waive your moral right",
    backgroundColor: "bg-rose-100"
  },
  {
    text: "Content uploaded may be edited by the app for any reason",
    backgroundColor: "bg-rose-100"
  },
];

function AppDetails() {
  return (
    <ScrollView>
      <View className="flex flex-col self-center mt-5 w-full max-w-[330px] text-neutral-800">
        {cardData.map((card, index) => (
          <InfoCard
            key={index}
            text={card.text}
            backgroundColor={card.backgroundColor}
          />
        ))}
      </View>
    </ScrollView>
  );
}

export default AppDetails;