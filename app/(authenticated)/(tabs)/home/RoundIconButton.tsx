import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import colors from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 10,
  },

  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.lightGray,
    justifyContent: "center",
    alignItems: "center",
  },

  label: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.dark,
  },
});

type RoundBtnProps = {
  iconName: typeof Ionicons.defaultProps;
  label?: string;
  onPress?: () => void;
};

const RoundIconButton: React.FC<RoundBtnProps> = ({
  iconName,
  label,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.circle}>
        <Ionicons name={iconName} size={30} color={colors.dark} />
      </View>

      {label && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
};

export default RoundIconButton;
