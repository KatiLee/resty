import { useState } from 'react';
import './Form.scss';

function Form (props) {
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    const [method, setMethod] = useState('GET');
    const [data, setData] = useState('');

    const handleClick = (e) => {
      setMethod(e.target.id);
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = {
      method: method,
      url: url,
      data: data,
    };
    props.handleApiCall(formData);
  };

    return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' onChange={(e) => setUrl(e.target.value)}/>
            <button type="submit">GO!</button>
          </label>
          <label className="methods">
            <span id="get" onClick={handleClick} data-testid='test-get'>GET</span>
            <span id="post" onClick={handleClick} data-testid='test-post'>POST</span>
            <span id="put" onClick={handleClick} data-testid='test-put'>PUT</span>
            <span id="delete" onClick={handleClick} data-testid='test-minus'>DELETE</span>
          </label>
          {(method === 'post' || method ==='put') && <textarea onChange={(e) => setData(e.target.value)} />}
        </form>
      </>
    );
  }


export default Form;