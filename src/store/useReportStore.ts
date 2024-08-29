import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type TReport = {
  reporterId: number;
  reporterName: string;
  email: string;
  press: string;
  reporterType: string;
  memberIdx: number;
};

type TEditStore = {
  states: {
    reporterArray: Array<TReport>;
  };
  actions: {
    setReporter: (data: Array<TReport>) => void;
  };
};

export const useReportStore = create<TEditStore>()(
  devtools((set) => ({
    states: {
      reporterArray: [],
    },
    actions: {
      setReporter: (data: Array<TReport>) => {
        set((state) => ({
          states: {
            ...state.states,
            reporterArray: data,
          },
        }));
      },
    },
  }))
);
