import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import CoverSection from '../CoverSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <CoverSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;