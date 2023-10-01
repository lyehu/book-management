import { forwardRef, useState } from 'react';
import { InputText } from './InputText.Styles';

const Input = forwardRef((props, ref) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };

  return <InputText ref={ref} {...props} value={inputValue} onChange={handleInputChange} />;
});

export default Input;
