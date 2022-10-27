import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className=" dark:text-gray-700">
            <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                <h1 className="text-3xl font-bold leading-none sm:text-4xl">For the best return on
                    <span className="dark:text-violet-400"> your money, pour your purse</span> into your head.
                </h1>
                <p className="px-8 mt-8 mb-12 text-lg">Start, switch, or advance your career with your desire courses. Learning never exhausts the mind. So learn without limit.</p>
                <div className="flex flex-wrap justify-center">
                    <Link to={'/courses'}> <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-indigo-600 text-white">Get started</button></Link>
                    <Link to={'/faq'}><button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-700 dark:border-gray-700">Learn more</button></Link>
                </div>
            </div>
        </section>
    );
};

export default Home;