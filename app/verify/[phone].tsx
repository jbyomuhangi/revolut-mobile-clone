import { useSignIn, useSignUp } from "@clerk/clerk-expo";
import { Link, useLocalSearchParams } from "expo-router";
import React, { Fragment, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

import colors from "@/constants/colors";
import { defaultStyles } from "@/constants/styles";

const CELL_COUNT = 6;

const Page = () => {
  const params = useLocalSearchParams<{
    phone: string;
    signIn: string;
  }>();

  const { signIn } = useSignIn();
  const { signUp, setActive } = useSignUp();

  const [code, setCode] = useState("");

  const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: code,
    setValue: setCode,
  });

  const verifyCode = async () => {
    if (!signUp) return;

    try {
      await signUp.attemptPhoneNumberVerification({
        code,
      });

      await setActive({ session: signUp.createdSessionId });
    } catch (error) {
      console.error(error);
    }
  };

  const verifySignIn = async () => {
    if (!signIn) return;

    try {
      await signIn.attemptFirstFactor({
        strategy: "phone_code",
        code,
      });
      await setActive!({ session: signIn.createdSessionId });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (code.length !== 6) return;

    if (params.signIn === "true") {
      verifySignIn();
    } else {
      verifyCode();
    }
  }, [code]);

  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.h1}>Enter 6-digit code</Text>

      <Text style={[defaultStyles.descriptionText, { marginTop: 10 }]}>
        Code sent to &quot;{params.phone}&quot; unless you already have an
        account
      </Text>

      <CodeField
        ref={ref}
        {...props}
        value={code}
        onChangeText={setCode}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Fragment key={index}>
            <View
              // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={[styles.cellRoot, isFocused && styles.focusCell]}
            >
              <Text style={styles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>

            {index === 2 ? (
              <View key={`separator-${index}`} style={styles.separator} />
            ) : null}
          </Fragment>
        )}
      />

      <Link asChild replace href="/login">
        <TouchableOpacity>
          <Text style={defaultStyles.textLink}>
            Already have an account? Log in
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  codeFieldRoot: {
    marginVertical: 20,
    marginLeft: "auto",
    marginRight: "auto",
    gap: 12,
  },
  cellRoot: {
    width: 45,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.lightGray,
    borderRadius: 8,
  },
  cellText: {
    color: "#000",
    fontSize: 36,
    textAlign: "center",
  },
  focusCell: {
    paddingBottom: 8,
  },
  separator: {
    height: 2,
    width: 10,
    backgroundColor: colors.gray,
    alignSelf: "center",
  },
});

export default Page;
