import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import Divider from "@/components/Divider";
import colors from "@/constants/colors";
import { defaultStyles } from "@/constants/styles";
import { Link } from "expo-router";

const Page = () => {
  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.h1}>Welcome back</Text>

      <Text style={[defaultStyles.descriptionText, { marginTop: 10 }]}>
        Enter your phone number, associated with your account
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

      <Link asChild replace href="/signup">
        <TouchableOpacity>
          <Text style={defaultStyles.textLink}>
            Dont have an account? Sign up
          </Text>
        </TouchableOpacity>
      </Link>

      <TouchableOpacity
        style={[
          defaultStyles.pillButton,
          { backgroundColor: colors.primary, marginTop: 30 },
        ]}
      >
        <Text style={[defaultStyles.buttonText, { color: "white" }]}>
          Continue
        </Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 16,
          marginTop: 40,
        }}
      >
        <Divider />
        <Text style={{ color: colors.gray, fontSize: 16 }}>or</Text>
        <Divider />
      </View>

      <View style={{ marginTop: 20 }}>
        <TouchableOpacity style={[defaultStyles.pillButton, styles.iconButton]}>
          <Ionicons name="mail" size={24} />
          <Text style={defaultStyles.buttonText}>Continue with email</Text>
        </TouchableOpacity>
      </View>
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

  iconButton: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
});

export default Page;
