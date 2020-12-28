import React from 'react';
import Services from "./components/Services";
import Hero from "./components/hero/Hero";
import TopDeals from "../../components/top-deals/TopDeals";
import Stories from "./components/stories/Stories";

const Home = () => {
    return (
        <div className='container-fluid bg-light p-0'>
            <Hero />
            <Services />
            <TopDeals />
            <Stories />
        </div>
    );
};

export default Home;
