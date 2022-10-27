import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import Swal from 'sweetalert2';

const CheckOut = () => {
    const { user } = useContext(AuthContext);
    const courseDetails = useLoaderData();
    const { title, author, price } = courseDetails;

    const checkout = () => {
        Swal.fire(
            'Success!',
            'Your Payment is complete!',
            'success'

        )
    }

    return (
        <div className='my-44'>
            <div className='mx-auto p-10 bg-gray-100 rounded-lg w-6/12 border border-gray-900'>
                <h1 className='text-center text-4xl font-bold mb-7'>Payment</h1>
                <div className="max-w-2xl px-6 py-2 mx-auto space-y-12">
                    <article className="space-y-3 dark:bg-gray-800 dark:text-gray-50">
                        <div className="">
                            <h1 className="text-2xl md:text-2xl"> <span className='font-bold'>Course Name: </span> {title}</h1>
                        </div>
                        <div>
                            <p><span className='font-semibold'>Price: </span>{price}</p>
                            <p><span className='font-semibold'>Instructor: </span>{author.name} </p>
                            <p> <span className='font-semibold'>Student: </span>{user.displayName}
                            </p>
                        </div>
                    </article>
                    <div>
                    </div>
                    <div className='text-center '>
                        <button onClick={checkout} className="btn btn-outline btn-primary w-56">CheckOut</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;