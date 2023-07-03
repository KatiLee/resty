import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import './App.scss';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

const App = () => {

  const [data, setData] = useState(null);
  const [reqParams, setReqParams] = useState ({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('do we have an api')
    async function getData(){
      if (reqParams.method === 'get') {
        let response = await axios.get(reqParams.url);
        setData(response.data.results);
      }
     if (reqParams.method === 'post') {
      let response = await axios.post(reqParams.url, reqParams.json);
      setData(response.data.results);
     }
     if (reqParams.method === 'put') {
      let response = await axios.put(reqParams.url, reqParams.json);
      setData(response.data.results);
     }
     if (reqParams.method === 'delete') {
      let response = await axios.delete(reqParams.url);
      setData(response.data.results);
     }
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
        <div data-testid='test-url'>URL: {reqParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} loading={loading}/>
        <Footer />
      </>
    );
  };

export default App;