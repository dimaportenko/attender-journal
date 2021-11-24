import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import {
  ActivityIndicator,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import merge from "deepmerge";

const CombinedDefaultTheme = merge(NavigationDefaultTheme, PaperDefaultTheme);
const CombinedDarkTheme = merge(NavigationDarkTheme, PaperDarkTheme);

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import { RootStore, StoreProvider } from "./src/store/store";
import { View } from "react-native";

export default function App() {
  let [rootStore, setRootStore] = useState<RootStore | null>(null);
  useEffect(() => {
    setRootStore(new RootStore());
  }, []);

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const theme = isDark ? CombinedDarkTheme : CombinedDefaultTheme;


  if (!isLoadingComplete || !rootStore) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return (
      <StoreProvider value={rootStore}>
        <PaperProvider theme={theme}>
          <SafeAreaProvider>
            <Navigation theme={theme} />
            <StatusBar style={isDark ? "light" : "dark"} />
          </SafeAreaProvider>
        </PaperProvider>
      </StoreProvider>
    );
  }
}
