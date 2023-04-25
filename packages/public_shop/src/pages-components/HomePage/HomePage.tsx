import React from 'react';
import ProductList from '../../components/ProductList';
import Header from '../../pages-components/HomePage/HomePage';
import Footer from '../../components/Footer';


const HomePage = () => {
  return (
    <>    
    <Header/>
    <ProductList />
    <Footer />
    </>

  );
};

export default HomePage;