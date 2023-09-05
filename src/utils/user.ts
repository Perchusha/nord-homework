import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions';

export const logout = () => {
  const dispatch = useDispatch();
  dispatch(setUser({ token: '', username: '' }));
};
