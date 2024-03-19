import { forwardRef, PropsWithChildren, Ref } from 'react';

import { WrapperSticker, WrapperStickerProps } from './styled';

export const Sticker = forwardRef(
	({ children, ...props }: WrapperStickerProps & PropsWithChildren, ref: Ref<HTMLDivElement>) => (
		<WrapperSticker {...props} ref={ref}>
			{children}
		</WrapperSticker>
	),
);
export default Sticker;
