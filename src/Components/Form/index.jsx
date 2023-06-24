import React from 'react';
import { useState } from 'react';
// import './Form.scss';

function Form (props) {
    const [url, setUrl] = useState('');
    const [method, setMethod] = useState('GET');
    const [data, setData] = useState('');

    const handleClick = (e) => {
      setMethod(e.target.id);
    }
  
    let handleSubmit = (e) => {
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
            <span id="get" onClick={handleClick} data-testid='test-get'style={{backgroundColor : method === 'get' ? 'yellow' : 'silver'}}>GET</span>
            <span id="post" onClick={handleClick} data-testid='test-post'style={{backgroundColor : method === 'post' ? 'lime' : 'silver'}}>POST</span>
            <span id="put" onClick={handleClick} data-testid='test-put'style={{backgroundColor : method === 'put' ? 'lavender' : 'silver'}}>PUT</span>
            <span id="delete" onClick={handleClick} data-testid='test-minus' style={{backgroundColor : method === 'delete' ? 'pink' : 'silver'}}>DELETE</span>
          </label>
          {method === 'post' && <textarea onChange={(e) => setData(e.target.value)} />}
          {method === 'put' && <textarea onChange={(e) => setData(e.target.value)} />}
        </form>
      </>
    );
  }


export default Form;