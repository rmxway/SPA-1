'use client';

import { Container, Flexbox, LayerBlock } from '@/components/Layout';
import { Sticker } from '@/components/ui';

export default function UIPage() {
	return (
		<Container $pt>
			<LayerBlock>
				<h2>Stickers</h2>
				<Flexbox $gap={10}>
					<Sticker>Default</Sticker>
					<Sticker $primary>Primary</Sticker>
                    <Sticker $danger>Danger</Sticker>
                    <Sticker $dark>Dark</Sticker>
                    <Sticker $success>Success</Sticker>
				</Flexbox>
			</LayerBlock>
		</Container>
	);
}
