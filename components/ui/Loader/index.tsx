import { StyledLoader, Wrapper } from './styled';

interface LoaderTypes {
	loading: boolean;
}

export function Loader({ loading }: LoaderTypes) {
	return loading ? (
		<Wrapper>
			<StyledLoader />
		</Wrapper>
	) : null;
}

export default Loader;
