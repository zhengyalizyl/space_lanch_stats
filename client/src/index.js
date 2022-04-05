import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider,ApolloClient,InMemoryCache } from "@apollo/client";
import './index.css';
import App from './App';

const client=new ApolloClient({
  uri:'/graphql',
  cache:new InMemoryCache(),
  grapihql:true
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
