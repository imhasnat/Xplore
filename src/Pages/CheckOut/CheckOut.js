import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const courseDetails = useLoaderData();
    const { _id, title, details, thumbnail_url } = courseDetails;

    return (
        <div>
            <h1>CheckOut: {title}</h1>
        </div>
    );
};

export default CheckOut;