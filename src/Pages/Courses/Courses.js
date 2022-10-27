import React from 'react';
import { Outlet } from 'react-router-dom';
import Categories from '../Categories/Categories';

const Courses = () => {
    return (
        <div className="flex flex-col md:grid grid-cols-10 gap-4 mx-auto py-10">
            <div className="col-span-3 flex justify-center">
                <Categories></Categories>
            </div>
            <div className="col-span-7">
                <Outlet></Outlet>
            </div>
        </div >
    );
};

export default Courses;