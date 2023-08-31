import { useLocation } from 'react-router';
import { NavigateButton } from '../../components';
import { Wrapper, Logo } from './styled';

export const SideBar = () => {
  const location = useLocation();

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
      <NavigateButton to="/contacts" $active={activeLocation('contacts')}>
        Contacts
      </NavigateButton>
    </Wrapper>
  );
};
