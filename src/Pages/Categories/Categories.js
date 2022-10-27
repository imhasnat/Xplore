import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='overflow-hidden'>
            {
                categories.map(category =>
                    <p key={category.id}><Link to={`/courses/categories/coursesDetails/${category.id}`}> <button className="btn btn-primary w-full mt-3 bg-indigo-600 text-white">{category.name}</button></Link ></p>)
            }
        </div>
    );
};

export default Categories;

// const [categories, setCategories] = useState([]);
//     console.log(categories);
//     useEffect(() => {
//         fetch('http://localhost:5000/categories')
//             .then(res => res.json())
//             .then(data => setCategories(data));
//     }, [])

//     return (
//         <div>
//             <h1>All categories: {categories.length}</h1>
//             {
//                 categories.map(category =>
//                     <Category
//                         key={category.id}
//                         category={category}
//                     ></Category>)
//             }
//         </div>
//     );