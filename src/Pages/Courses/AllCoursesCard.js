import React from 'react';
import { Link } from 'react-router-dom';

const AllCoursesCard = ({ course }) => {
    const { _id, title, details, thumbnail_url } = course;
    return (
        <div className="card card-compact w-60 bg-white text-gray-500 shadow-xl mb-5">
            <figure><img className="" src={thumbnail_url} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <p className='text-slate-500'>
                    {
                        details.length > 200 ?
                            <>{details.slice(0, 150) + '....'}<Link to={`/courses/coursesdetails/${_id}`}>See more</Link></>
                            :
                            details
                    }
                </p>
                <div className="card-actions w-100 justify-center">
                    <Link className='btn btn-primary btn-outline w-full text-white' to={`/courses/coursesdetails/${_id}`}><button className="" >Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AllCoursesCard;