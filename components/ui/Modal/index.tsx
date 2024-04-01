'use client';

import { AnimatePresence } from 'framer-motion';
import { UIEvent, useRef } from 'react';

import { LinkIcon } from '@/components/ui/LinkIcon';

import { ModalBody, ModalHeader, ModalWindow, ModalWrapper, windowVariants, wrapperVariants } from './styled';

interface ModalProps {
	open: boolean;
	onClose: () => void;
	title?: string;
	children: React.ReactNode;
}

export const Modal = ({ open, onClose, title, children }: ModalProps) => {
	const wrapperRef = useRef(null);

	const handleClose = (e: UIEvent) => {
		if (e.target === wrapperRef.current) onClose();
	};

	return (
		<AnimatePresence mode="sync" presenceAffectsLayout>
			{open && (
				<ModalWrapper
					variants={wrapperVariants}
					initial="hidden"
					animate="visible"
					exit="hidden"
					transition={{
						duration: 0.15,
					}}
					onClick={handleClose}
					ref={wrapperRef}
				>
					<ModalWindow variants={windowVariants}>
						<LinkIcon icon="times-small" onClick={onClose} />
						{title && <ModalHeader>{title}</ModalHeader>}
						<ModalBody>{children}</ModalBody>
					</ModalWindow>
				</ModalWrapper>
			)}
		</AnimatePresence>
	);
};

export default Modal;
