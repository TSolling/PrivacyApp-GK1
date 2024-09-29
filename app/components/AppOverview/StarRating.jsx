import React from 'react';
import { View, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
  
    return (
      <View className="flex-row">
        {[...Array(5)].map((_, index) => (
          <Feather
            key={index}
            name={
              index < fullStars
                ? 'star'
                : index === fullStars && hasHalfStar
                ? 'star'
                : 'star'
            }
            size={20}
            color={index < fullStars || (index === fullStars && hasHalfStar) ? '#FFD700' : '#E0E0E0'}
          />
        ))}
      </View>
    );
  };
  
  export default StarRating