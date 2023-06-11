import {useState} from 'react';
import './App.css';
import Icon from './components/Icon/Icon';
import ProgressBar from './components/ProgressBar';
import Select from './components/Select/Select';

function App() {
  const [value, setValue] = useState('apple');
  return (
    <>
      <form>
        <Select onChange={evt => setValue(evt.target.value)} value={value}>
          <option value='apple'>Apple</option>
          <option value='potatoes'>Potatoes</option>
        </Select>
      </form>
    </>
  );
}

export default App;
