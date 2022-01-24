import { useState } from 'react';

function Form() {
  const [value, setValue] = useState('');
  const handleChange = e => {
    setValue(e.target.value);
  };
  return (
    <form>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Введіть назву картинки"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Form;
