import { forwardRef, PropsWithChildren } from 'react';

import { WrapperSticker, WrapperStickerProps } from './styled';

export const Sticker = forwardRef<HTMLDivElement, WrapperStickerProps & PropsWithChildren>(
	({ children, ...props }, ref) => (
		<WrapperSticker {...props} ref={ref}>
			{children}
		</WrapperSticker>
	),
);
export default Sticker;
