import { ILoginParams } from '../types';

export const login = async (params: ILoginParams) => {
  try {
    return fetch('https://playground.tesonet.lt/v1/tokens', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then(res => res.json());
  } catch (err) {
    console.error(err);
  }
};
