import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCoursesCard from './AllCoursesCard';

const CoursesList = () => {
    const courses = useLoaderData();
    // console.log(courses);
    return (
        <div className='sm:w-10/12 md:w-11/12 mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center overflow-hidden'>
            {
                courses.map(course =>
                    <AllCoursesCard
                        key={course._id}
                        course={course}
                    ></AllCoursesCard>)
            }
        </div>
    );
};

export default CoursesList;