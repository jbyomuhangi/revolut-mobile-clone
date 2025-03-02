import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { zustandStorage } from "./mmkvStorage";

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  date: string;
}

export interface BalanceState {
  transactions: Array<Transaction>;
  runTransaction: (transaction: Transaction) => void;
  balance: () => number;
  clearTransactions: () => void;
}

export const useBalanceStore = create<BalanceState>()(
  persist(
    (set, get) => ({
      transactions: [],

      runTransaction: (transaction: Transaction) => {
        set((state) => ({
          transactions: [...state.transactions, transaction],
        }));
      },

      balance: () => {
        const total = get().transactions.reduce(
          (acc, transaction) => acc + transaction.amount,
          0
        );

        return total;
      },

      clearTransactions: () => {
        set({ transactions: [] });
      },
    }),

    {
      name: "balance",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);
