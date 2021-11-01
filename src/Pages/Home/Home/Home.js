import React from 'react';
// import ReactSpiner from '../../ReactSpiner/ReactSpiner';
import Services from '../../Services/Services';
import ContactHome from '../ContactHome/ContactHome';
import PopularTour from '../PopularTour/PopularTour';
import Sliders from './../Sliders/Sliders';


const Home = () => {
    return (
        <div>
            {/* <ReactSpiner></ReactSpiner> */}
            <Sliders></Sliders>
            <Services></Services>
            <PopularTour></PopularTour>
            <ContactHome></ContactHome>

        </div>
    );
};

export default Home;