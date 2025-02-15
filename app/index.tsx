import { useAssets } from "expo-asset";
import { ResizeMode, Video } from "expo-av";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
          <Link href="/login" asChild>
            <TouchableOpacity>
              <Text>Login</Text>
            </TouchableOpacity>
          </Link>

          <Link href={"/signUp"} asChild>
            <TouchableOpacity>
              <Text>Signup</Text>
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
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
  },
});

export default Page;
