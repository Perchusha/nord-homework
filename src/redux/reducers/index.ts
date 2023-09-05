import { combineReducers } from 'redux';
import Theme from './theme';
import User from './user';
import { IMainState } from '../../types';

export const rootReducer = combineReducers<IMainState>({
  Theme,
  User,
});
