import React, { useState } from 'react';

import './App.scss';

// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

const App = () => {

  const [data, setData] = useState(null);
  const [reqParams, setReqParams] = useState ({});
  const [loading, setLoading] = useState(false);

  const callApi = (reqParams) => {
    setLoading(true);
    setTimeout (() => {
      const data = {
        count: 2,
        results: [
        {name: 'fake thing 1', url: 'http://fakethings.com/1'},
        {name: 'fake thing 2', url: 'http://fakethings.com/2'},
      ],
      };
      setData(data);
      setReqParams(reqParams);
    }, 1000);
  };

    return (
      <>
        <Header />
        <div>Request Method: {reqParams.method}</div>
        <div>URL: {reqParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} loading={loading}/>
        <Footer />
      </>
    );
  };

export default App;