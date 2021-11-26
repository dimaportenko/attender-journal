import { createContext, useContext } from "react";
import { AsyncTrunk } from "mobx-sync";
import { ClassesStore } from "./ClassesStore";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class RootStore {
  classes: ClassesStore;

  constructor() {
    this.classes = new ClassesStore();
  }
}

const STORAGE_KEY = "STORAGE_KEY";

export const store = new RootStore();
export const trunk = new AsyncTrunk(store, {
  storage: AsyncStorage,
  storageKey: STORAGE_KEY,
});

export const StoreContext = createContext<RootStore>(store);
export const StoreProvider = StoreContext.Provider;
export const useStore = () => useContext(StoreContext);
