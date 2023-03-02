import {useState} from 'react';
import {useMMKVString} from 'react-native-mmkv';
import {AxiosError} from 'axios';
import AuthAPI from '../../../services/API/Auth';
import {validateNickName} from '../../../utils';

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
