import React, { FC } from 'react';
import ButtonUI from '@components/ui/Button';
import InputUI from '@components/ui/Input';

const CreatePost: FC = () => {
	return (
		<div className="layerBlock">
			<InputUI name="title" label="Title" />
			<InputUI name="body" label="Body" />
			<ButtonUI>Create post</ButtonUI>
		</div>
	);
};

export default CreatePost;
