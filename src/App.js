import Input from './components/Input';
import Logo from './components/Logo';
import Section from './components/Section';
import Select from './components/Select';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  const [selection, setSelection] = useState('');
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const currenciesResult = Number(value) * Number(selection);
    setResult(currenciesResult.toFixed(2));
  };

  const setLoadingState = (state) => {
    setIsLoading(state);
  };

  return (
    <main>
      <div className='container'>
        <div className='content'>
          <Logo isLoading={isLoading} />
          <h3>Jaką kwote chcesz przeliczyć</h3>
          <form onSubmit={handleSubmit}>
            <Input value={value} setValue={setValue} />
            <Select
              selection={selection}
              setSelection={setSelection}
              setLoadingState={setLoadingState}
            />
            <Section result={result} />
          </form>
        </div>
      </div>
    </main>
  );
}

export default App;
