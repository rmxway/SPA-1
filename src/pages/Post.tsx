import React from 'react';
import ButtonUI from '../components/ui/Button';

const PostPage: React.FC = () => {
	return (
		// https://jsonplaceholder.typicode.com/posts

		<div>
			<h1>Post Page</h1>
			<ButtonUI>Create post</ButtonUI>
		</div>
	);
};

export default PostPage;
