import { Dispatch } from 'react';

export type NumAction = { type: 'PLUS' } | { type: 'MINUS' } | { type: 'RESET' };
export type SAction = { type: 'CHANGE'; payload: string } | { type: 'RESET' };

export interface NumberReducer {
  state: number;
  dispath: Dispatch<NumAction>;
}

export function reducer(state: number, action: NumAction) {
  switch (action.type) {
    case 'PLUS':
      return state + 1;
    case 'MINUS':
      return state === 1 ? state : state - 1;
    case 'RESET':
      return 1;
    default:
      return state;
  }
}
export interface InputReducder {
  state: string;
  dispatch: Dispatch<SAction>;
}

export function inputReducer(state: string, action: SAction) {
  switch (action.type) {
    case 'CHANGE':
      return action.payload;
    case 'RESET':
      return '';
  }
}
