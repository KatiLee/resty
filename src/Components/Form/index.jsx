import { useState } from 'react';
import './Form.scss';

function Form (props) {
    const [url, setUrl] = useState('');
    const [method, setMethod] = useState('GET');
    const [json, setJson] = useState('');

    const handleClick = (e) => {
      setMethod(e.target.id);
    }
  
    const handleSubmit = e => {
      e.preventDefault();
      const formData = {
      method: method,
      url: url,
      json: json,
    };
    props.handleApiCall(formData);
  };

    return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' onChange={(event) => setUrl(event.target.value)}/>
            <button type="submit">GO!</button>
          </label>
          <label className="methods">
            <span id="get" onClick={handleClick} data-testid='test-get'>GET</span>
            <span id="post" onClick={handleClick} data-testid='test-post'>POST</span>
            <span id="put" onClick={handleClick} data-testid='test-put'>PUT</span>
            <span id="delete" onClick={handleClick} data-testid='test-minus'>DELETE</span>
          </label>
        </form>
      </>
    );
  }


export default Form;