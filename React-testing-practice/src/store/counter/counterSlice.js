export const createCounterSlice = (set, get) => ({
    count: 0,
    history: [],
    step: 1,
    setCount: (count) => set({ count }),
    setHistory: (history) => set({ history }),
    setStep: (step) => set({ step }),

    addToHistory: (operation) => {
        const timestamp = new Date().toLocaleTimeString();
        const currentHistory = get().history || [];
        set({ history: [{ operation, timestamp }, ...currentHistory] });
    },

    increment: () => {
        const { count, step } = get();
        set({ count: count + step });
        get().addToHistory(`+${step}`);
    },

    decrement: () => {
        const { count, step } = get();
        set({ count: count - step });
        get().addToHistory(`-${step}`);
    },

    reset: () => {
        set({ count: 0 });
        get().addToHistory('Reset');
    },

    clearHistory: () => {
        set({ history: [] });
    }
})