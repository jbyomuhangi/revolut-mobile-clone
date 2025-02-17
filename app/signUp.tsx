import { useSignUp } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import colors from "@/constants/colors";
import { defaultStyles } from "@/constants/styles";

const Page = () => {
  const router = useRouter();
  const { signUp } = useSignUp();

  const onSignUp = async () => {
    const phoneNumber = "";

    try {
      await signUp!.create({ phoneNumber });
      router.push({
        pathname: "/verify/[phone]",
        params: { phone: phoneNumber },
      });
    } catch (error) {
      console.error("Error signing up: ", error);
    }
  };

  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.h1}>Lets get started!</Text>

      <Text style={[defaultStyles.descriptionText, { marginTop: 10 }]}>
        Enter your phone number, we will send you a verification code
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="+60"
          keyboardType="numeric"
        />

        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Mobile number"
          keyboardType="numeric"
        />
      </View>

      <Link asChild replace href="/login">
        <TouchableOpacity>
          <Text style={defaultStyles.textLink}>
            Already have an account? Log in
          </Text>
        </TouchableOpacity>
      </Link>

      <TouchableOpacity
        style={[
          defaultStyles.pillButton,
          { backgroundColor: colors.primary, marginTop: "auto" },
        ]}
        onPress={onSignUp}
      >
        <Text style={[defaultStyles.buttonText, { color: "white" }]}>
          Sign up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    gap: 20,
    marginVertical: 20,
  },

  input: {
    padding: 16,
    borderRadius: 16,
    backgroundColor: colors.lightGray,
    fontSize: 20,
  },
});

export default Page;
