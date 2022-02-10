import React from 'react';

const Category = ({ category }) => {
	return (
		<span className="text-white text-xs rounded-2xl font-semibold px-2 py-1 bg-cyan-500 align-middle">
			{category.title}
		</span>
	);
};

export default Category;
