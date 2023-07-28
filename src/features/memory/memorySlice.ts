import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { IAnimalsResponse, ICard } from "../../interfaces";
import { BASE_URL, PER_PAGE } from "../../constants";

type FetchError = {
  message: string;
};

// Define a type for the slice state
export interface MemoryState {
  status: "loading" | "idle";
  error: string | null;
  cards: ICard[];
  wins: number;
  errors: number;
  firstCard: number | null;
  secondCard: number | null;
  total: number;
  finished: boolean;
}

// Define the initial state using that type
const initialState: MemoryState = {
  status: "loading",
  error: null,
  cards: [],
  wins: 0,
  errors: 0,
  firstCard: null,
  secondCard: null,
  total: 0,
  finished: false,
};

export const memorySlice = createSlice({
  name: "memory",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openCard: (state, { payload }) => {
      state.cards[payload] = { ...state.cards[payload], open: true };
      if (state.firstCard === null) {
        state.firstCard = payload;
        state.secondCard = null;
        return;
      }
      if (state.cards[state.firstCard].title === state.cards[payload].title) {
        state.wins += 1;
        state.firstCard = null;
        state.secondCard = null;
        if (state.wins === state.total) state.finished = true;
      } else {
        state.errors += 1;
        state.secondCard = payload;
      }
    },
    closeCards: (state) => {
      if (state.firstCard !== null) state.cards[state.firstCard].open = false;
      if (state.secondCard !== null) state.cards[state.secondCard].open = false;
      state.firstCard = null;
      state.secondCard = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCards.pending, (state) => {
      state.status = "loading";
      state.errors = 0;
      state.wins = 0;
      state.finished = false;
      state.error = null;
    });
    builder.addCase(fetchCards.fulfilled, (state, { payload }) => {
      if (payload.entries) {
        const animals = payload.entries.map((entrie) => ({
          url: entrie.fields.image.url,
          title: entrie.fields.image.title.toLowerCase(),
        }));
        const max = animals.length * 2;
        const cards: ICard[] = [];
        animals.concat(animals).forEach((animal) => {
          const rnd = Math.floor(Math.random() * max);
          cards.push({ ...animal, index: rnd, open: false });
        });
        state.cards = cards.sort((a, b) => a.index - b.index);
        state.total = animals.length;
      } else state.error = "error";
      state.status = "idle";
    });
    builder.addCase(fetchCards.rejected, (state, { payload }) => {
      if (payload) state.error = payload.message;
      else state.error = "error";
      state.status = "idle";
    });
  },
});

export const fetchCards = createAsyncThunk<
  IAnimalsResponse,
  number,
  { rejectValue: FetchError }
>("animals", async (items) => {
  const response = await fetch(`${BASE_URL}?${PER_PAGE}=${items}`);
  const data = await response.json();
  return data;
});

export const { openCard } = memorySlice.actions;

export const selectStatus = (state: RootState) => state.memory.status;
export const selectError = (state: RootState) => state.memory.error;
export const selectCards = (state: RootState) => state.memory.cards;
export const selectWins = (state: RootState) => state.memory.wins;
export const selectErrors = (state: RootState) => state.memory.errors;
export const selectFinished = (state: RootState) => state.memory.finished;
export const selectSecondCard = (state: RootState) => state.memory.secondCard;

export default memorySlice.reducer;
