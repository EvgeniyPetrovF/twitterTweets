import {useState} from 'react';
import AuthAPI from '../../../services/API/Auth';

import {AxiosError} from 'axios';
import {useMMKVString} from 'react-native-mmkv';

const validateNickName = (name: string) => {
  if (name.match(/(twitter|admin)/i)) {
    return 'No account names can contain Twitter or Admin';
  }
  const re = /^@?([a-z0-9_]){4,15}$/i;
  if (!re.test(name)) {
    return 'Username cannot be longer than 15 characters or shorter than 4 characters';
  }
};

const useLoginForm = () => {
  const [nickName, setNickName] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [_, setUsername] = useMMKVString('nickname');

  const onChangeText = (text: string) => {
    setError('');
    setNickName(text);
  };

  const loginHandler = async () => {
    try {
      setIsLoading(true);
      const validationError = validateNickName(nickName);
      if (validationError) {
        setError(validationError);
        return;
      }
      await AuthAPI.login({nickName});

      setUsername(nickName);
    } catch (e) {
      setError((e as AxiosError).message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    nickName,
    error,
    isLoading,
    onChangeText,
    loginHandler,
  };
};

export default useLoginForm;
