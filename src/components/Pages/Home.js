import React from 'react';
import Header from '../Home/Header';
import Banner from '../Home/Banner';
import CardList from '../Home/Card';
import Footer from '../Footer/Footer';



function Home() {
    return (
        <div className="home-container">
            <Header/>
            <Banner/>
            <CardList/>
            <Footer/>
        </div>
    );
}

export default Home;