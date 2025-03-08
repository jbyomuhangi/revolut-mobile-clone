import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import MoreActionIcon from "@/components/pages/home/MoreActionIcon";
import RoundIconButton from "@/components/pages/home/RoundIconButton";
import colors from "@/constants/colors";
import { defaultStyles } from "@/constants/styles";
import { useBalanceStore } from "@/store/balanceStore";

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
  },

  transactionsContainer: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginTop: 10,
  },

  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.lightGray,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Page = () => {
  const balance = useBalanceStore((state) => state.balance());
  const transactions = useBalanceStore((state) => state.transactions);

  const runTransaction = useBalanceStore((state) => state.runTransaction);

  const handleAddMoney = () => {
    runTransaction({
      id: new Date().toISOString(),
      amount: Math.floor(Math.random() * 1000),
      date: new Date().toISOString(),
      title: "Added money",
    });
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <View style={styles.account}>
        <View style={styles.balanceContainer}>
          <Text style={styles.balance}>{balance}</Text>
          <Text style={styles.currency}>$</Text>
        </View>
      </View>

      <View style={styles.actionRow}>
        <RoundIconButton
          iconName="add"
          label="Add money"
          onPress={handleAddMoney}
        />
        <RoundIconButton iconName="refresh" label="Exchange" />
        <RoundIconButton iconName="list" label="Details" />
        <MoreActionIcon />
      </View>

      <View style={{ marginTop: 40 }}>
        <Text style={defaultStyles.h2}>Transactions</Text>

        <View style={styles.transactionsContainer}>
          {transactions.length === 0 && (
            <Text style={{ padding: 14, color: colors.gray }}>
              No transactions yet
            </Text>
          )}

          {transactions.map((transaction) => {
            return (
              <View
                key={transaction.id}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 16,
                  padding: 10,
                }}
              >
                <View style={styles.circle}>
                  <Ionicons
                    name={transaction.amount > 0 ? "add" : "remove"}
                    size={24}
                    color={colors.dark}
                  />
                </View>

                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: "400" }}>{transaction.title}</Text>
                  <Text style={{ color: colors.gray, fontSize: 12 }}>
                    {new Date(transaction.date).toDateString()}
                  </Text>
                </View>

                <Text>{transaction.amount}$</Text>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default Page;
