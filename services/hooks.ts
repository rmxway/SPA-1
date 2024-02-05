'use client';

import { useEffect, useMemo, useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from '@/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

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
