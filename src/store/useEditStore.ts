import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type TSearchProp = {
  title: string;
  type: string;
};

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
    searchProp: TSearchProp;
    editProp: TEditProp;
    toolProp: Array<string>;
  };
  actions: {
    setData: (dataType: TEdit, data: string) => void;
    setEditData: (data: TEditProp) => void;
    setToolData: (data: Array<string>) => void;
    resetData: () => void;
    setSearchData: (dataType: TSearch, data: string) => void;
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
      // 이게 search 바 찾는 것
      toolProp: ['뮤지컬1', '뮤지컬2', '뮤지컬3', '뮤지컬4', '뮤지컬5', '뮤지컬6'],
      searchProp: {
        title: '',
        type: '보도용',
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
      setSearchData: (dataType: TSearch, data: string) => {
        set((state) => ({
          states: {
            ...state.states,
            searchProp: {
              ...state.states.searchProp,
              [`${dataType}`]: data,
            },
          },
        }));
      },
      setToolData: (data: Array<string>) => {
        set((state) => ({
          states: {
            ...state.states,
            toolProp: data,
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
