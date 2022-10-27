import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';
import '../Pages/Shared/footer.css'

const Main = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <div className='my-8'>
                <Outlet></Outlet>
            </div>
            <div className='main'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;