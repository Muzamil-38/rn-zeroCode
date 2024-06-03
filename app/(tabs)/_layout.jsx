import { Text, View } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
        <Tabs.Screen name="perm"/>
    </Tabs>
  );
};

export default TabsLayout;

