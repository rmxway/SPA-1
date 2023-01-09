import React, { useEffect, useState } from 'react';
import Post from '@components/Post';
import CreatePost from '@components/CreatePost';

const PostPage: React.FC = () => {
	const [posts, setPosts] = useState([]);

	const getPosts = async () => {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1'
		);
		response.json().then((res) => setPosts(res));
	};

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<div>
			<h1>Posts Page</h1>
			<CreatePost />

			<h3>List posts</h3>
			{posts &&
				posts.map(({ id, title, body }) => (
					<Post {...{ id, title, body }} key={id} />
				))}
		</div>
	);
};

export default PostPage;
