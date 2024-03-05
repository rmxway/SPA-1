'use client';

import { useEffect, useMemo, useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux';

import type { AppDispatch, RootState, RootStore } from '@/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => RootStore = useStore;

/**
 * Observable screen width breakpoints and if matched return a boolean value
 * @param {string}query - string
 * @returns boolean
 * @example const match = useMediaQuery('1024px') // return true if screen width from 0 to 1024 px
 */
export const useMediaQuery = (query: string) => {
	const mediaQuery = useMemo(() => {
		if (typeof window !== 'undefined') {
			return window.matchMedia(`(max-width: ${query})`);
		}
		return undefined;
	}, [query]);
	const [match, setMatch] = useState(mediaQuery?.matches);

	useEffect(() => {
		const onChange = () => setMatch(mediaQuery?.matches);
		mediaQuery?.addEventListener('change', onChange);

		return () => mediaQuery?.removeEventListener('change', onChange);
	}, [mediaQuery]);

	return match;
};

export default useMediaQuery;
