import { FC, useState } from 'react';
import './App.scss';
import InputBox from './Components/InputBox';

const App: FC = () => {
  const [inputValue, setInputValue] = useState<number>(0);

  const handleInputValueChange = (value: number) => {
    setInputValue(value);
  };
  
  return (
    <div className="App">
      <div>
        <InputBox
          label="Input1"
          label2="Input2"
          onInputValueChange={handleInputValueChange}
        />
      </div>
      <div>
      </div>
    </div>
  );
};

export default App;
