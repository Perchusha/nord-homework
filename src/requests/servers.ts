import { IGetServersParams } from '../types';

export const getServers = async (params: IGetServersParams) => {
  try {
    return fetch(`https://playground.tesonet.lt/v1/servers`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${params.token}`,
        'Content-Type': 'application/json;charset=utf-8',
      },
    }).then(res => res.json());
  } catch (error) {
    console.error(error);
  }
};
