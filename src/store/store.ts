import { createContext, useContext } from "react";
import { ClassesStore } from "./Classes";

export class RootStore {
  classes: ClassesStore;

  constructor() {
    this.classes = new ClassesStore()
  }
}

export const StoreContext = createContext<RootStore>(null as any);
export const StoreProvider = StoreContext.Provider;
export const useStore = () => useContext(StoreContext);
