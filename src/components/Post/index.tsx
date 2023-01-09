import React, { FC } from 'react';
import ButtonUI from '@components/ui/Button';
import classes from './post.module.scss';

interface TypePost {
	id: number;
	title: string;
	body: string;
}

const Post: FC<TypePost> = ({ id, title, body, ...props }) => {
	return (
		<div {...props} className={classes.post}>
			<div>
				<span>{id}</span> {title}
			</div>
			<p>{body}</p>
			<ButtonUI white>Delete</ButtonUI>
		</div>
	);
};

export default Post;
