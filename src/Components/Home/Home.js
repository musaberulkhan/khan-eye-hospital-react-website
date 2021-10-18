import React from 'react';
import Header from '../Header/Header';
import Helpline from '../Helpline/Helpline';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Helpline></Helpline>
        </div>
    );
};

export default Home;