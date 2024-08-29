import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type TSearchProp = {
  title: string;
};

type TEditProp = {
  performanceId: number;
  key: string;
  actors: string;
  synopsis: string;
  seats: number;
  interviewee: string;
  interviewContent: string;
};

type TEditStore = {
  states: {
    searchProp: TSearchProp;
    editProp: TEditProp;
    toolProp: Array<string>;
    // 모달 오픈용
    open: {
      open: boolean;
      id: number;
    };
  };
  actions: {
    setData: (dataType: TEdit, data: string) => void;
    setEditData: (data: TEditProp) => void;
    setToolData: (data: Array<string>) => void;
    resetData: () => void;
    setSearchData: (dataType: TSearch, data: string) => void;
    setOpen: (id: number) => void;
  };
};

export const useEditStore = create<TEditStore>()(
  devtools((set) => ({
    states: {
      editProp: {
        performanceId: 0,
        key: '',
        actors: '',
        synopsis: '',
        seats: 0,
        interviewee: '',
        interviewContent: '',
      },
      // 이게 search 바 찾는 것
      toolProp: [],
      searchProp: {
        title: '',
        type: '보도용',
      },
      open: {
        open: false,
        id: 0,
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
              performanceId: 0,
              key: '',
              actors: '',
              synopsis: '',
              seats: 0,
              interviewee: '',
              interviewContent: '',
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
      setOpen: (id: number) => {
        set((state) => ({
          states: {
            ...state.states,
            open: {
              open: !state.states.open.open,
              id: id,
            },
          },
        }));
      },
    },
  }))
);
