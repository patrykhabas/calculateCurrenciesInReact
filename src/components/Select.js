import axios from 'axios';
import { useState, useEffect } from 'react';

const url = 'https://api.nbp.pl/api/exchangerates/tables/a/';
const availableCurrencies = ['USD', 'EUR', 'CHF'];

function Select({ selection, setSelection, setLoadingState }) {
  const [currencies, setCurrencies] = useState([]);

  const handleChange = (e) => {
    setSelection(e.target.value);
  };

  useEffect(() => {
    setLoadingState(true);
    axios
      .get(url)
      .then((response) => {
        const filteredRates = response.data[0].rates.filter((el) =>
          availableCurrencies.includes(el.code)
        );
        setCurrencies(filteredRates);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setLoadingState(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>Wybierz walute</h3>
      <select value={selection} onChange={handleChange}>
        <option disabled hidden value=''>
          Wybierz walute
        </option>
        {currencies.map((el) => (
          <option value={el.mid} key={el.code}>
            {el.code}
          </option>
        ))}
      </select>{' '}
    </>
  );
}
export default Select;
