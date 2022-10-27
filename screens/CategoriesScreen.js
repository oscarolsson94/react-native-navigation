import { View, Text, FlatList } from "react-native";
import { CategoryGridTile } from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

export const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (item) => {
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={() => navigation.navigate("MealsOverview")}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={({ item }) => renderCategoryItem(item)}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};
