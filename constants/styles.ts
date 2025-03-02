import { StyleSheet } from "react-native";

import colors from "./colors";

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },

  pillButton: {
    padding: 10,
    height: 60,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  pillButtonSmall: {
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  h1: {
    fontSize: 40,
    fontWeight: "700",
  },

  h2: {
    fontSize: 20,
    fontWeight: "700",
  },

  descriptionText: {
    fontSize: 18,
    color: colors.gray,
  },

  textLink: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: "500",
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "500",
  },

  // buttonTextSmall: {
  //   color: "#fff",
  //   fontSize: 16,
  //   fontWeight: "500",
  // },
  // block: {
  //   marginHorizontal: 20,
  //   padding: 14,
  //   backgroundColor: "#fff",
  //   borderRadius: 16,
  //   gap: 20,
  // },
});
