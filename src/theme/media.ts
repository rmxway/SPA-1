import { generateMedia } from 'styled-media-query';

const breakpoints = {
	xl: '1440px',
	lg: '1280px',
	md: '1024px',
	sm: '750px',
	xs: '500px',
};

const media = generateMedia(breakpoints);

export { breakpoints, media };
export default media;
