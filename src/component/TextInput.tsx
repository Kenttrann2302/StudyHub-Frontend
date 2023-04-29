import React, { useState } from 'react';
import './TextInput.css';
const variantToInputTypeMap = {
  email: 'email',
  password: 'password',
};
interface ITextInput {
  variant: 'email' | 'password';
}
const TextInput = (props: ITextInput) => {
  const [inputValue, setInputValue] = useState('');
  const variant = props.variant;
  const inputType = variantToInputTypeMap[variant];
  return (
    <div className="textInputContainer">
      <label className="textInputLabel" htmlFor="textInputBox">
        Label
      </label>
      <input
        id="textInputBox"
        type={inputType}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
