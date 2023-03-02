import {wait} from '../../../utils';

export interface AuthInfo {
  nickName: string;
}

class AuthAPI {
  static login = async ({nickName}: AuthInfo) => {
    const res = await wait(2000, nickName);
    return res;
  };
}

export default AuthAPI;
