import { create } from "zustand";
import { createCounterSlice } from "./counter/counterSlice";

export const useAppStore = create((set, get)=>({
    ...createCounterSlice(set, get),
}))