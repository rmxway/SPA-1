import Link from 'next/link';

import { Container, Flexbox, Space } from '@/components/Layout';

import { RenderNavbar } from './RenderNavbar';
import { Logo, StyledNavbar } from './styled';

export const Navbar = () => (
	<StyledNavbar layoutRoot>
		<Container>
			<Flexbox $align="center" $nowrap $gap={10}>
				<Logo>
					<Link href="/" />
					GS
					<span>
						Green Shop <br />
						Brand
					</span>
				</Logo>
				<Space />
				<RenderNavbar />
			</Flexbox>
		</Container>
	</StyledNavbar>
);

export default Navbar;
