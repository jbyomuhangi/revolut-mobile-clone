import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "@/constants/colors";

const Divider = () => {
  return (
    <View
      style={{
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: colors.gray,
      }}
    />
  );
};

export default Divider;
