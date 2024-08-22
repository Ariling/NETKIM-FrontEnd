import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type TEditProp = {
  title: string;
  casting: string;
  content: string;
  day: string;
  location: string;
  interview?: string;
};

type TEditStore = {
  states: {
    editProp: TEditProp;
  };
  actions: {
    setData: (dataType: TEdit, data: string) => void;
    setEditData: (data: TEditProp) => void;
    resetData: () => void;
  };
};

export const useEditStore = create<TEditStore>()(
  devtools((set) => ({
    states: {
      editProp: {
        title: 'dd',
        casting: 'ff',
        content: 'ss',
        day: '',
        location: '',
        interview: '',
      },
    },
    actions: {
      setData: (dataType: TEdit, data: string) => {
        set((state) => ({
          states: {
            ...state.states,
            editProp: {
              ...state.states.editProp,
              [`${dataType}`]: data,
            },
          },
        }));
      },
      resetData: () => {
        set((state) => ({
          states: {
            ...state.states,
            editProp: {
              title: '',
              casting: '',
              content: '',
              day: '',
              location: '',
              interview: '',
            },
          },
        }));
      },
      setEditData: (data: TEditProp) => {
        set((state) => ({
          states: {
            ...state.states,
            editProp: data,
          },
        }));
      },
    },
  }))
);
