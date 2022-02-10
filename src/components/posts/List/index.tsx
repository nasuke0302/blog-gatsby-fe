import React from 'react';
import Item from '../Item';

const List = ({ title, posts }) => {
	const query = '';
	const handleSearch = () => {};
	return (
		<div>
			{title && <h2 className="text-center mb-4 text-3xl">{title}</h2>}
			<div className="my-8 flex flex-row flex-wrap gap-4 justify-center items-center">
				<input
					type="text"
					className="px-4 py-2 rounded-md border border-green-400"
					value={query}
					placeholder="Search posts titles..."
				/>
				<button
					className="button px-4 py-2 bg-green-400 hover:bg-green-500 transition ease-in-out rounded-md"
					onClick={handleSearch}
				>
					Search
				</button>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-8">
				{posts.map(({ node }, i) => (
					<Item key={i} post={node} />
				))}
			</div>
		</div>
	);
};
export default List;
