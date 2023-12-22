import React from 'react';
import Hero from '../components/Hero/Hero';
import Cards from '../components/Cards/Cards';

const Home = ({ category, searchTerm }) => {
  return (
    <>
      <Hero />
      <Cards category={category} searchTerm={searchTerm} />
    </>
  );
};

export default Home;