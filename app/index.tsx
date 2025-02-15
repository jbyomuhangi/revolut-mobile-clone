import { useAssets } from "expo-asset";
import { ResizeMode, Video } from "expo-av";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import colors from "@/constants/colors";
import { defaultStyles } from "@/constants/styles";

const Page = () => {
  const [assets] = useAssets([require("@/assets/videos/intro.mp4")]);

  return (
    <View style={styles.container}>
      {assets && (
        <Video
          isMuted
          isLooping
          shouldPlay
          source={{ uri: assets[0].uri }}
          style={styles.video}
          resizeMode={ResizeMode.COVER}
        />
      )}

      <View style={styles.overlayContainer}>
        <Text style={styles.headerText}>
          Ready to change the way you make money?
        </Text>

        <View style={styles.buttonsCOntainer}>
          <Link
            href="/login"
            asChild
            style={[
              defaultStyles.pillButton,
              { backgroundColor: colors.dark, flex: 1 },
            ]}
          >
            <TouchableOpacity>
              <Text style={[styles.buttonText, { color: "white" }]}>Login</Text>
            </TouchableOpacity>
          </Link>

          <Link
            href={"/signUp"}
            asChild
            style={[
              defaultStyles.pillButton,
              { flex: 1, backgroundColor: "white" },
            ]}
          >
            <TouchableOpacity>
              <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  video: {
    flex: 1,
  },

  overlayContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    padding: 16,
    justifyContent: "space-between",
  },

  headerText: {
    fontSize: 36,
    color: "white",
    fontWeight: "900",
    textTransform: "uppercase",
  },

  buttonsCOntainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
  },

  buttonText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default Page;
