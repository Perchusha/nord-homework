import { login } from './login';
import { ILoginParams } from '../types';

describe('Login function', () => {
  it('successfully login and return a token', async () => {
    const validParams: ILoginParams = { username: 'tesonet', password: 'partyanimal' };
    const response = await login(validParams);

    expect(response).toHaveProperty('token');
    expect(response.token).toMatch(/\w+/);
  });

  it('unauthorized user and return message', async () => {
    const invalidParams: ILoginParams = { username: '123123123', password: '123123123' };
    const response = await login(invalidParams);

    expect(response).toHaveProperty('message');
    expect(response.message).toEqual('Unauthorized');
  });
});
