import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Slider from '../Slider/Slider';

const Header = () => {
    return (
        <div style={{ height:'100vh'}}>
            <Navbar></Navbar>
            <Slider></Slider>
        </div>
    );
};

export default Header;