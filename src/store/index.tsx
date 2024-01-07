import type { ReactNode } from 'react';
import { create, createStore } from 'zustand';

export const StepsObj: Record<number, ReactNode> = {
  1: <div>step 1 Initial</div>,
  2: <div>step 2 Accessories</div>,
  3: <div>step 3 Addons</div>,
  4: <div>step 4 Configurator</div>,
  5: <div>step 5 Invoice</div>,
  6: <div>step 6 Quote</div>,
  7: <div>step 7</div>,
};

type State = {
  currentStep: number;
  maxStep: number;
};

type Actions = {
  goToNextStep: () => void;
  goToPrevStep: () => void;
  reset: () => void;
  canGoToNextStep: () => boolean;
  canGoToPrevStep: () => boolean;
  setStep: (step: number) => void;
};

const initialState: State = {
  currentStep: 1,
  maxStep: Object.keys(StepsObj).length,
};

export const stepStore = createStore<State & Actions>()((set, get) => ({
  ...initialState,

  canGoToNextStep: () => get().currentStep + 1 <= get().maxStep,
  canGoToPrevStep: () => get().currentStep - 1 >= 1,

  setStep: (step) => set(() => ({ currentStep: step })),

  reset: () => {
    set(initialState);
  },

  goToNextStep: () => {
    if (get().canGoToNextStep()) {
      set((state) => ({ currentStep: state.currentStep + 1 }));
    }
  },

  goToPrevStep: () => {
    if (get().canGoToPrevStep()) {
      set((state) => ({ currentStep: state.currentStep - 1 }));
    }
  },
}));

export const useStepStore = create<State & Actions>()((set, get) => ({
  ...initialState,

  canGoToNextStep: () => get().currentStep + 1 <= get().maxStep,
  canGoToPrevStep: () => get().currentStep - 1 >= 1,

  setStep: (step) => set(() => ({ currentStep: step })),

  reset: () => {
    set(initialState);
  },

  goToNextStep: () => {
    if (get().canGoToNextStep()) {
      set((state) => ({ currentStep: state.currentStep + 1 }));
    }
  },

  goToPrevStep: () => {
    if (get().canGoToPrevStep()) {
      set((state) => ({ currentStep: state.currentStep - 1 }));
    }
  },
}));
