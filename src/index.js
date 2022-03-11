import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BeerList from "./Component/beerList"
import Details from "./Component/details"
import RandomBier from './Component/randomBeer';


ReactDOM.render(
<BrowserRouter>
<React.StrictMode>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/AllBeer" element={<BeerList />}/>
    <Route path='/Details/:_id' element={<Details />}/>
    <Route path='/randomBeer' element={<RandomBier />}/>

  </Routes>
</React.StrictMode>
</BrowserRouter>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
