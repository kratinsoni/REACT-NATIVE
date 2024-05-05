import React, {useState} from 'react';
import {View, Text} from 'react-native';

//Form validation
import * as Yup from 'yup';

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'should be at least 4 characters')
    .max(16, 'should be at most 16 characters')
    .required('required'),
});

const App = () => {
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [isLowercase, setIsLowercase] = useState(true);
  const [isUppercase, setIsUppercase] = useState(false);
  const [isNumbers, setIsNumbers] = useState(false);
  const [isSymbols, setIsSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let charachterList = '';

    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const digits = '0123456789';
    const special = '!@#$%^&*()_+';

    if (isLowercase) {
      charachterList += lowercase;
    }

    if (isUppercase) {
      charachterList += uppercase;
    }

    if (isNumbers) {
      charachterList += digits;
    }

    if (isSymbols) {
      charachterList += special;
    }

    const passwordResult = createPassword(charachterList, passwordLength);
    setPassword(passwordResult);
    setIsPasswordGenerated(true);
  };

  const createPassword = (charachters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const charachterIndex = Math.round(Math.random() * charachters.length);
      result += charachters.charAt(charachterIndex);
    }

    return result;
  };

  const resetPassword = () => {
    setPassword('');
    setIsPasswordGenerated(false);
    setIsLowercase(true);
    setIsUppercase(false);
    setIsNumbers(false);
    setIsSymbols(false);
  };

  return (
    <View>
      <Text>Hello, world!</Text>
    </View>
  );
};

export default App;
