import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/selectors';
import { NavigateButton } from '../../components';
import { Wrapper, Logo, BottomPart } from './styled';

export const SideBar = () => {
  const location = useLocation();
  const token = useSelector(selectToken);

  const activeLocation = (href: string) => {
    return location.pathname.indexOf(href) !== -1;
  };

  return (
    <Wrapper>
      <Logo href="https://perchusha.github.io/Portfolio/" target="_blank">
        Perch.dev
      </Logo>
      <NavigateButton to="/welcome" $active={activeLocation('welcome')}>
        Welcome
      </NavigateButton>
      <NavigateButton to="/servers" $active={activeLocation('servers')}>
        Servers
      </NavigateButton>
      <NavigateButton to="/settings" $active={activeLocation('settings')}>
        Settings
      </NavigateButton>
      <BottomPart>
        <NavigateButton to={token ? '/logout' : '/login'}>
          {token ? 'Logout' : 'Login'}
        </NavigateButton>
      </BottomPart>
    </Wrapper>
  );
};
