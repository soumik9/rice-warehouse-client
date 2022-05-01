import React from 'react';
import Banner from '../../components/Banner/Banner';
import ChooseUs from '../../components/ChooseUs/ChooseUs';
import Products from '../../components/Products/Products/Products';
import Reviews from '../../components/Reviews/Reviews/Reviews';

const Home = () => {
    return (
        <main>
          <Banner />
          <Products />
          <ChooseUs />
          <Reviews />
        </main>
    );
};

export default Home;