import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ children, className }) => (
  <TouchableOpacity className={`overflow-hidden gap-2 self-stretch px-4 py-4 w-full bg-blue-600 rounded-xl min-h-[48px] ${className}`}>
    <Text className="text-white text-xs font-semibold">{children}</Text>
  </TouchableOpacity>
);

export default Button;