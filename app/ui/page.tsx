'use client';

import { Container, Flexbox, Grid, LayerBlock } from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { mockProduct } from '@/components/ProductCard/mockProduct';
import { Button, Sticker } from '@/components/ui';

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
			<LayerBlock>
				<h2>Buttons</h2>
				<Flexbox $gap={10}>
					<Button>Default</Button>
					<Button $primary>Primary</Button>
					<Button $danger>Danger</Button>
					<Button $dark>Dark</Button>
					<Button $success>Success</Button>
				</Flexbox>
			</LayerBlock>

			<h2>Product</h2>
			<Grid>
				<ProductCard product={mockProduct} />
			</Grid>
		</Container>
	);
}
