import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import React from 'react';
import { useColorScheme } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => <MaterialIcons size={28} name={'person'} />,
        }}
      />
      <Tabs.Screen
        name="My-Profile"
        options={{
          title: 'Profile', tabBarIcon: () => (
            <MaterialIcons
              size={28}
              name="home"
            />
          )
        }} />
    </Tabs >
  );
}