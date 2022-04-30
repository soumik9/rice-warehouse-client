import React from 'react';
import Banner from '../../components/Banner/Banner';
import ChooseUs from '../../components/ChooseUs/ChooseUs';
import Reviews from '../../components/Reviews/Reviews/Reviews';

const Home = () => {
    return (
        <main>
          <Banner />
          <ChooseUs />
          <Reviews />
        </main>
    );
};

export default Home;