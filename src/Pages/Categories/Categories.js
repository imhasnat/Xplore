import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Categories = () => {

    const [categories, setCategories] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <h1>All categories: {categories.length}</h1>
        </div>
    );
};

export default Categories;