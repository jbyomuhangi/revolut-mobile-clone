import React from "react";
import { Text, View } from "react-native";

import { useLocalSearchParams } from "expo-router";

const Page = () => {
  const { phone } = useLocalSearchParams<{ phone: string }>();

  return (
    <View>
      <Text>Page</Text>
    </View>
  );
};

export default Page;
