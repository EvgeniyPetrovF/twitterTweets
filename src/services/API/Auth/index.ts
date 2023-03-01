export interface AuthInfo {
  nickName: string;
}

class AuthAPI {
  static login = async (body: AuthInfo) => {
    return 'success';
  };
}

export default AuthAPI;
