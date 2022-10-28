import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text } from "react-native";
import { CategoriesScreen } from "./screens/CategoriesScreen";
import { MealDetailsScreen } from "./screens/MealDetailsScreen";
import { MealsOverviewScreen } from "./screens/MealsOverviewScreen";

/* For drawer navigation replace with createDrawerNavigator and import it */
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          /* default options on all screens */
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            /* options={({ route, navigation }) => {
              const catId = route.params.categoryId;
              return {
                title: catId,
              };
            }} */
          />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailsScreen}
            options={{
              title: "Details",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
