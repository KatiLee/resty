import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import './App.scss';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

function App () {

  const [data, setData] = useState(null);
  const [reqParams, setReqParams] = useState ({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('do we have an api')
    async function getData(){
      console.log(getData)
      const response = await axios.get(`https://pokeapi.co/api/v2/${reqParams.url}`);
     console.log('api response: ', response.data);
     setData(response.data);
    } 
    if (reqParams.url && reqParams.method) {
      getData();
    }
  }, [reqParams]);



  const callApi = (reqParams) => {
    setLoading(true);
    setTimeout (() => {
      setReqParams(reqParams);
      setLoading(false);
    }, 1000);
  };

    return (
      <>
        <Header />
        <div data-testid='test-method'>Request Method: {reqParams.method}</div>
        <div data-testid='test-url'>URL: {`https://pokeapi.co/api/v2/${reqParams.url}`}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} loading={loading}/>
        <Footer />
      </>
    );
  };

export default App;