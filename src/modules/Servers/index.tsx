import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/selectors';
import { getServers } from '../../requests';
import { List } from './list';
import { Server } from './types';
import { Wrapper, LoginTitle } from './styled';

export const Servers = () => {
  const token = useSelector(selectToken);

  const [servers, setServers] = useState<Server[]>([]);

  useEffect(() => {
    if (token) {
      getServers({ token }).then(serversList => {
        setServers(serversList);
      });
    }
  }, [token]);

  return token ? (
    <Wrapper>
      <List data={servers} />
    </Wrapper>
  ) : (
    <Wrapper>
      <LoginTitle>Please login to see list of servers</LoginTitle>
    </Wrapper>
  );
};
