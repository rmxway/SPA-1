import React, { FC, useState } from 'react';
import ButtonUI from '@components/ui/Button';
import InputUI from '@components/ui/Input';

interface CreatePostType {
	addPost: Function;
}

const defaultPost = {
	id: null,
	title: '',
	body: '',
};

const CreatePost: FC<CreatePostType> = ({ addPost }) => {
	const [newPost, setNewPost] = useState(defaultPost);

	const createPostHandle = () => {
		addPost(newPost);
		setNewPost(defaultPost);
	};

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewPost({ ...newPost, [e.target.id]: e.target.value });
	};

	return (
		<div className="layerBlock">
			<InputUI
				name="title"
				label="Title"
				value={newPost.title}
				onChange={onChange}
			/>

			<InputUI
				name="body"
				label="Body"
				value={newPost.body}
				onChange={onChange}
			/>
			<ButtonUI onClick={createPostHandle}>Create post</ButtonUI>
		</div>
	);
};

export default CreatePost;
