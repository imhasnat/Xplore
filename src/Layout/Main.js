import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';
import '../Pages/Shared/footer.css';
import './Main.css';

const Main = () => {
    return (
        <div >
            <div className='page-container'>
                <div className='content-wrapper'>
                    <Navbar></Navbar>
                    <div className='my-8'>
                        <Outlet></Outlet>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;