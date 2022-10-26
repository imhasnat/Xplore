import React from 'react';
import { Outlet } from 'react-router-dom';
import Categories from '../Categories/Categories';

const Courses = () => {
    return (
        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4">
                <Categories></Categories>
            </div>
            <div className="col-span-8">
                <Outlet></Outlet>
            </div>
        </div >
    );
};

export default Courses;