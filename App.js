import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { CategoriesScreen } from "./screens/CategoriesScreen";
import { MealDetailsScreen } from "./screens/MealDetailsScreen";
import { MealsOverviewScreen } from "./screens/MealsOverviewScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FavoritesScreen } from "./screens/FavoritesScreen";

/* For drawer navigation replace with createDrawerNavigator and import it */
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          /* default options on all screens */
          /* same screenOptions for all Navigators */
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          {/* nested drawer nav  */}
          <Stack.Screen name="Drawer" component={DrawerNavigator} />
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
