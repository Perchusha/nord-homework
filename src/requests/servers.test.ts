import { getServers } from './servers';
import { login } from './login';
import { Server } from '../modules/Servers/types';
import { IGetServersParams, ILoginParams } from '../types';

describe('Get servers function', () => {
  it('successfully get servers and return it', async () => {
    const validLoginParams: ILoginParams = { username: 'tesonet', password: 'partyanimal' };
    const { token: validToken } = await login(validLoginParams);
    const validParams: IGetServersParams = { token: validToken };
    const response = await getServers(validParams);

    expect(Array.isArray(response)).toBe(true);

    response.forEach((server: Server[]) => {
      expect(typeof server).toBe('object');
    });
  });

  it('invalid token and return message', async () => {
    const validParams: IGetServersParams = { token: 'invalidToken' };
    const response = await getServers(validParams);

    expect(response).toHaveProperty('message');
    expect(response.message).toEqual('Unauthorized');
  });
});
