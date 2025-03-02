import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import MoreActionIcon from "./MoreActionIcon";
import RoundIconButton from "./RoundIconButton";

const styles = StyleSheet.create({
  account: {
    margin: 80,
    alignItems: "center",
  },

  balanceContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: 10,
  },

  balance: {
    fontSize: 50,
    fontWeight: "bold",
  },

  currency: {
    fontSize: 20,
    fontWeight: "bold",
  },

  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
});

const Page = () => {
  return (
    <ScrollView>
      <View style={styles.account}>
        <View style={styles.balanceContainer}>
          <Text style={styles.balance}>100</Text>
          <Text style={styles.currency}>$</Text>
        </View>
      </View>

      <View style={styles.actionRow}>
        <RoundIconButton iconName="add" label="Add money" />
        <RoundIconButton iconName="refresh" label="Exchange" />
        <RoundIconButton iconName="list" label="Details" />
        <MoreActionIcon />
      </View>
    </ScrollView>
  );
};

export default Page;
