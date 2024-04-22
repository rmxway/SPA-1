import { FC } from 'react';

import { LabelStyled } from './styled';

interface LabelProps {
	label: string;
	name: string;
}

export const Label: FC<LabelProps> = ({ label, name }) => <LabelStyled htmlFor={name}>{label}</LabelStyled>;

export default Label;
