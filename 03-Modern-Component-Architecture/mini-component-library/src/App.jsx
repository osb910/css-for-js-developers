import {useState} from 'react';
import './App.css';
import Icon from './components/Icon/Icon';
import ProgressBar from './components/ProgressBar';
import Select from './components/Select/Select';
import IconInput from './components/IconInput/IconInput';

function App() {
  const [value, setValue] = useState('apple');
  return (
    <>
      <form>
        <IconInput
          label='Email'
          icon='at-sign'
          placeholder='Email'
          size={'large'}
          type='email'
        />
      </form>
    </>
  );
}

export default App;
