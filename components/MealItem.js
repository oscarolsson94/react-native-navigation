import { View, Text } from "react-native";
import React from "react";

export const MealItem = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};
