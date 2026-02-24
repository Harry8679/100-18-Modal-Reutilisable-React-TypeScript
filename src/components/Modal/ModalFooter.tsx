import type { ModalFooterProps } from '../../types';

export const ModalFooter = ({ children, className = '' }: ModalFooterProps) => {
  return (
    <div className={`flex items-center justify-end gap-3 p-6 border-t border-gray-200 dark:border-gray-700 ${className}`}>
      {children}
    </div>
  );
};