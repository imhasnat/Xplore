import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCoursesCard from './AllCoursesCard';

const CoursesList = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div>
            <h1>Card</h1>
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