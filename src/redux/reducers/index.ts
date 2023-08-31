import { combineReducers } from 'redux';
import Theme from './theme';
import { IMainState } from '../types';

export const rootReducer = combineReducers<IMainState>({
  Theme,
});
