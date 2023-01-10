import React, { useEffect, useMemo, useState } from 'react';
import Post from '@components/Post';
import CreatePost from '@components/CreatePost';

interface PostTypes {
	id: number;
	title?: string;
	body?: string;
}

const PostPage: React.FC = () => {
	const [posts, setPosts] = useState<PostTypes[]>([]);

	const getPosts = async () => {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1'
		);
		response.json().then((res) => setPosts(res));
	};

	useEffect(() => {
		getPosts();
	}, []);

	const createPost = (post: PostTypes) => {
		post.id = Number(new Date());
		setPosts((prev) => [post, ...prev]);
	};

	const deletePost = (id: number) => {
		setPosts(posts.filter((a) => a.id !== id));
	};

	return (
		<div>
			<h1>Posts Page</h1>
			<CreatePost addPost={createPost} />

			<h3>List posts</h3>
			{posts &&
				posts.map((post: PostTypes, index) => (
					<Post
						post={post}
						key={post.id}
						index={index}
						delPost={deletePost}
					/>
				))}
		</div>
	);
};

export default PostPage;
