import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CoursesDetails = () => {
    const details = useLoaderData();
    console.log(details);
    return (
        <div>
            <h1>Details 1</h1>
        </div>
    );
};

export default CoursesDetails;