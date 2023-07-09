import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import History from './Components/History';

export const initialState = {
  data: null,
  loading: false,
  history: [],
};

export const reqReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING HANDLER':
      return {
        ...state,
        loading: action.payload,
      }
    case 'SET-DATA':
      return {
        ...state,
        data: action.payload.results,
        history: [...state.history, { ...action.payload.reqParams, data: action.payload.results }]
      }
    case 'DISPLAY-HISTORY':
      return {
        ...state,
        data: state.history[action.payload],
      }
    default:
      return state;
  }
};

const App = () => {

  const [state, dispatch] = useReducer(reqReducer, initialState);
  const [reqParams, setReqParams] = useState({});

  const displayHistory = (index) => {
    const action = {
      type: 'DISPLAY-HISTORY',
      payload: index,
    }
    dispatch(action);
  };

  useEffect(() => {
    try {
      dispatch({ type: 'LOADING HANDLER', payload: true });
      async function getData() {
        if (reqParams.method === 'get') {
          let response = await axios.get(reqParams.url);
          dispatch({ type: 'SET-DATA', payload: response.data });
        }
      }
      if (reqParams.method && reqParams.url) {
        getData();
      }
      dispatch({ type: 'LOADING HANDLER', payload: false });
    } catch (error) {
      dispatch({ type: 'SET-DATA', payload: 'NO DATA AVAILABLE' });
      dispatch({ type: 'LOADING HANDLER', payload: false });
    }
  }, [reqParams]);

  const callApi = (reqParams) => {
    setReqParams(reqParams);
  }

  return (
    <>
      <Header />
      <div data-testid='test-method' className='CRUD'>Request Method: {reqParams.method}</div>
      <div data-testid='test-url' className='URL'>URL: {reqParams.url}</div>
      <History history={state.history} displayHistory={displayHistory} />
      <Form handleApiCall={callApi} />
      <Results data={state.data} loading={state.loading} />
      <Footer />
    </>
  );
};

export default App;