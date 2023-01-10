import React, { FC } from 'react';
import ButtonUI from '@components/ui/Button';
import classes from './post.module.scss';

interface TypePost {
	post: {
		id: number;
		title?: string;
		body?: string;
	};
	index: number;
	delPost: Function;
}

const Post: FC<TypePost> = ({ post, index, delPost, ...props }) => {
	const { id, title, body } = post;
	return (
		<div {...props} className={classes.post}>
			<div>
				<span>{index + 1}</span> {title}
			</div>
			<p>{body}</p>
			<ButtonUI white onClick={() => delPost(id)}>
				Delete
			</ButtonUI>
		</div>
	);
};

export default Post;
