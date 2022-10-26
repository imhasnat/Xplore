import React from 'react';
import { Link } from 'react-router-dom';

const AllCoursesCard = ({ course }) => {
    const { _id } = course;
    return (
        <div>
            <Link to={`/courses/coursesdetails/${_id}`}><button >Card</button></Link>
        </div>
    );
};

export default AllCoursesCard;