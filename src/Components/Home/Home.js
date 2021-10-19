import React from 'react';
import Doctors from '../Doctors/Doctors';
import Header from '../Header/Header';
import Helpline from '../Helpline/Helpline';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Doctors></Doctors>
            <Helpline></Helpline>
        </div>
    );
};

export default Home;