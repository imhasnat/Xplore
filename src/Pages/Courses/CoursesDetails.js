import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CoursesDetails = () => {
    const details = useLoaderData();
    console.log(details);
    return (
        <div>
            <Link to={'/checkout'}><h1>Details 1</h1></Link>
        </div>
    );
};

export default CoursesDetails;