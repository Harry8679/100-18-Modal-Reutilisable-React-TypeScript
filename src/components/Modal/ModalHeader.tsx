import { useModalContext } from './ModalContext';
import type { ModalHeaderProps } from '../../types';

export const ModalHeader = ({ children, className = '' }: ModalHeaderProps) => {
  const { onClose } = useModalContext();

  return (
    <div className={`flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 ${className}`}>
      <div className="flex-1">{children}</div>
      <button
        onClick={onClose}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
        aria-label="Close modal"
      >
        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};