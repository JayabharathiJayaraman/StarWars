import './home.css';
import React from 'react';
import { Header } from 'semantic-ui-react';
const Home = () => {
    return (
        <>
        <Header>
        <h1 className='homePage'>Welcome!!</h1>
    </Header>
        <h1 className ='homePara'>Here you can find StarWars people</h1>        
        <ul className='homePageList'>
            <li>You can scroll down to see all the StarWars people.</li>
            <li>You can click on it to see more info about each of them.</li>
            <li>You can also search through peoples.</li>
        </ul>
    </>
    );
};
export default Home;