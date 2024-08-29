import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type TSearchProp = {
  title: string;
};

type TEditProp = {
  img?: string;
  title: string;
  casting: string;
  feature: string;
  day: string;
  location: string;
  openrun?: string;
  interview?: string;
};

type TEditStore = {
  states: {
    searchProp: TSearchProp;
    editProp: TEditProp;
    toolProp: Array<string>;
    // 모달 오픈용
    open: boolean;
  };
  actions: {
    setData: (dataType: TEdit, data: string) => void;
    setEditData: (data: TEditProp) => void;
    setToolData: (data: Array<string>) => void;
    resetData: () => void;
    setSearchData: (dataType: TSearch, data: string) => void;
    setOpen: () => void;
  };
};

export const useEditStore = create<TEditStore>()(
  devtools((set) => ({
    states: {
      editProp: {
        img: '',
        title: 'dd',
        casting: 'ff',
        feature: 'ss',
        day: '',
        location: '',
        openrun: '',
        interview: '',
      },
      // 이게 search 바 찾는 것
      toolProp: [],
      searchProp: {
        title: '',
        type: '보도용',
      },
      open: false,
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
              img: '',
              title: '',
              casting: '',
              feature: '',
              day: '',
              location: '',
              openturn: '',
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
      setOpen: () => {
        set((state) => ({
          states: {
            ...state.states,
            open: !state.states.open,
          },
        }));
      },
    },
  }))
);
