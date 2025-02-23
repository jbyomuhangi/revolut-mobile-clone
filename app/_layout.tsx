import { ClerkLoaded, ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Link, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import "react-native-reanimated";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

import { tokenCache } from "@/cache";
import colors from "@/constants/colors";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayoutNav = () => {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  const { isLoaded, isSignedIn } = useAuth();

  useEffect(() => {
    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    if (error) throw error;
    if (loaded) SplashScreen.hideAsync();
  }, [loaded, error]);

  useEffect(() => {
    console.log("isSignedIn: ", isSignedIn);
  }, [isSignedIn]);

  if (!loaded) return null;

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="signup"
        options={{
          title: "",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: colors.background },
        }}
      />

      <Stack.Screen
        name="login"
        options={{
          title: "",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: colors.background },
          headerRight: () => {
            return (
              <Link asChild href="/help">
                <TouchableOpacity>
                  <Ionicons
                    name="help-circle-outline"
                    size={34}
                    color={colors.dark}
                  />
                </TouchableOpacity>
              </Link>
            );
          },
        }}
      />

      <Stack.Screen name="help" options={{ title: "Help" }} />

      <Stack.Screen
        name="verify/[phone]"
        options={{
          title: "",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: colors.background },
        }}
      />
    </Stack>
  );
};

const RootLayout = () => {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!publishableKey) {
    throw new Error(
      "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
    );
  }

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <RootLayoutNav />
      </ClerkLoaded>
    </ClerkProvider>
  );
};

export default RootLayout;
