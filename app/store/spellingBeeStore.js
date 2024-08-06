import { create } from 'zustand'
import { shuffleArray } from '../services';

export const useSpellingBeeStore = create((set) => ({
    hiveLetters: "MDGLBT".split(""),
    centerLetter: "S",
    word: "",
    correctWords: [],
    score: 0,
    addLetters: (data) => set(() => ({ hiveLetters: data.hiveLetters, centerLetter: data.centerLetter })),
    getShuffledLetters: () => set((state) => ({ hiveLetters: shuffleArray(state.hiveLetters) })),
    addLetterToWord: (data) => set((state) => ({ word: state.word + data })),
    removeLetterToWord: () => set((state) => ({ word: state.word.substring(0, state.word.length - 1) })),
    resetWord: () => set(() => ({ word: "" })),
    addCorrectWord: (data) => set((state) => ({ correctWords: [...state.correctWords, data] })),
    setScore: (data) => set((state) => ({ score: state.score + data })),
}))