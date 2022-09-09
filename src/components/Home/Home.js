import React from 'react';
import Animation from './Animation/Animation';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Projects from './Projects/Projects';
import Reviews from './Reviews/Reviews';
import Service from './Services/Service';
import Solution from './Solution/Solution/Solution';
import Team from './Team/Team';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <Animation></Animation>
            <Solution></Solution>
            <Projects></Projects>
            <Reviews></Reviews>
            <Team></Team>
            <Footer></Footer>
        </div>
    );
};

export default Home;