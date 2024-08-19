import { Dispatch } from 'react';

export type NumAction = { type: 'PLUS' } | { type: 'MINUS' } | { type: 'RESET' };

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
