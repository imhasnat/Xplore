import React from 'react';
import { FaFilePdf } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CoursesDetails = () => {
    const courseDetails = useLoaderData();
    const { _id, title, details, thumbnail_url, author } = courseDetails;

    return (
        <div>
            <div ref={ref} className="max-w-2xl px-6 py-2 mx-auto space-y-12">
                <article className="space-y-8 dark:text-gray-700">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
                        <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
                            <div className="flex items-center md:space-x-2">
                                <p className='font-semibold text-md'>Instructor: </p>
                                <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
                                <p className="text-sm">{author.name}</p>
                            </div>
                            <Pdf targetRef={ref} filename="Course_Outline.pdf">
                                {({ toPdf }) => <button onClick={toPdf} className="flex-shrink-0 mt-3 text-3xl text-red-600 md:mt-0" title='download pdf'><FaFilePdf></FaFilePdf></button>}
                            </Pdf>
                        </div>
                    </div>
                    <div>
                        <img src={thumbnail_url} alt=''></img>
                    </div>
                    <div className="dark:text-gray-700">
                        <p>{details}</p>
                    </div>
                </article>
                <div>
                </div>
                <div className='text-center '>
                    <Link to={`/checkout/${_id}`} ><button className="btn btn-primary bg-indigo-600 text-white">Get Premium Access</button></Link>
                </div>
            </div>
        </div>

    );
};

export default CoursesDetails;