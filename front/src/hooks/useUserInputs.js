import { useState } from 'react';

export const useUserInputs = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return ({
      setPassword,
      setUsername,
      value: {
          username,
          password,
      }
  })
}