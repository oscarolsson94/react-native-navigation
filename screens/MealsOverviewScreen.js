import { View, Text, StyleSheet } from "react-native";

export const MealsOverviewScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MealsOverviewScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
