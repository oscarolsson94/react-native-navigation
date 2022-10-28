import { View, StyleSheet, FlatList } from "react-native";
import { MealItem } from "../components/MealItem";
import { MEALS } from "../data/dummy-data";

export const MealsOverviewScreen = ({ route }) => {
  const id = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.includes(id));

  const renderMealItem = (item) => (
    <MealItem title={item.title} imageUrl={item.imageUrl} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderMealItem(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
