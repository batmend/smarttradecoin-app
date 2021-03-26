import React from "react";
import { WebView } from "react-native-webview";
import { View } from "react-native";

export default function App() {
  return (
    <>
      <View style={{ height: 40, backgroundColor: "#1c0697" }}></View>
      <WebView
        source={{
          uri: "https://go.smarttradecoin.com?hash=f5324bdbec325ad86fcfc1cb",
        }}
        onError={(event) =>
          alert(`Webview error ${event.nativeEvent.description}`)
        }
      />
    </>
  );
}
