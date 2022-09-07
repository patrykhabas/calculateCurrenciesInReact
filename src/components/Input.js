function Input({ value, setValue }) {
  const handleChange = (e) => {
    if (
      e.target.value &&
      Number(e.target.value) >= 0 &&
      Math.abs(e.target.value)
    ) {
      setValue(Math.abs(e.target.value));
    }
  };

  return (
    <input
      type='number'
      min='0'
      onChange={handleChange}
      placeholder='Wpisz kwote'
      value={value}
    />
  );
}

export default Input;
