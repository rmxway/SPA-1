import React, { useEffect, useState } from 'react';
import InputUI from '@ui/Input';
import ButtonUI from '@ui/Button';

const PostPage: React.FC = () => {
	const [posts, setPosts] = useState([]);

	const getPosts = async () => {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/posts'
		);
		response.json().then((res) => setPosts(res));
	};

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<div>
			<h1>Post Page</h1>
			<div className="layerBlock">
				<InputUI name="title" label="Title" />
				<ButtonUI>Create post</ButtonUI>
			</div>
			<div className="layerBlock">
				<h3>List posts</h3>
				{posts &&
					posts.map(({ id, title, body }) => (
						<div key={id}>
							{id}. {title}
							{body}
						</div>
					))}
			</div>
		</div>
	);
};

export default PostPage;
