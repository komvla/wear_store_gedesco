import React from 'react';
import ReactDOM from 'react-dom';
// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages 
import  HomePage  from './pages-components/HomePage/HomePage';
import  ProductDetailsPage  from './pages-components/ProductDetailsPage/ProductDetailsPage';
// Styles
import './index.scss'

class App extends React.Component  {
  public render() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/product/:id' element={<ProductDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );    
  }

};

ReactDOM.render(<App />, document.getElementById('root'));