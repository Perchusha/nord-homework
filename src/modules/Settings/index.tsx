import { useSelector, useDispatch } from 'react-redux';
import { selectTheme } from '../../redux/selectors';
import { setTheme } from '../../redux/actions';
import { StyledButton } from '../../components';
import { ITheme } from '../../types';
import { Wrapper, SettingBlock, Title, ThemeButtons } from './styled';

export const Settings = () => {
  const { key } = useSelector(selectTheme);
  const dispatch = useDispatch();

  const changeTheme = (theme: ITheme) => {
    dispatch(setTheme(theme));
    const root = document.documentElement;
    root.style.setProperty('color-scheme', theme === 'dark' ? 'dark' : 'light');
  };

  return (
    <Wrapper>
      <SettingBlock>
        <Title>Change application theme</Title>
        <ThemeButtons>
          <StyledButton onClick={() => changeTheme(ITheme.Light)} $active={key === 'light'}>
            Light
          </StyledButton>
          <StyledButton onClick={() => changeTheme(ITheme.Dark)} $active={key === 'dark'}>
            Dark
          </StyledButton>
          <StyledButton onClick={() => changeTheme(ITheme.Green)} $active={key === 'green'}>
            Green
          </StyledButton>
        </ThemeButtons>
      </SettingBlock>
    </Wrapper>
  );
};
