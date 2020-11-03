import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Dishdetail from "./DishDetailComponent";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import Home from "./HomeComponent";
import AboutUs from "./AboutComponent";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MenuStack = () => {
  return (
    <Stack.Navigator initialRouteName="Menu">
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Detail" component={Dishdetail} />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#512DA8",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Home" options={{ title: "Home" }} component={Home} />
    </Stack.Navigator>
  );
};

const ContactStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#512DA8",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Contact"
        options={{ title: "" }}
        component={Contact}
      />
    </Stack.Navigator>
  );
};

const AboutStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#512DA8",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Contact"
        options={{ title: "About us" }}
        component={AboutUs}
      />
    </Stack.Navigator>
  );
};

const MainComponent = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="Menu" component={MenuStack} />
        <Drawer.Screen name="Contact" component={ContactStack} />
        <Drawer.Screen name="About us" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainComponent;
