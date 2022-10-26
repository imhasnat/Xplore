import React from 'react';
import { Outlet } from 'react-router-dom';
import Categories from '../Categories/Categories';

const Courses = () => {
    return (
        <div className="grid grid-cols-10 gap-4 mx-auto">
            <div className="col-span-7">
                <Outlet></Outlet>
            </div>
            <div className="mr-10 col-span-3">
                <Categories></Categories>
            </div>
        </div >
    );
};

export default Courses;