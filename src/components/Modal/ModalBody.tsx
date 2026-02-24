import type { ModalBodyProps } from '../../types';

export const ModalBody = ({ children, className = '' }: ModalBodyProps) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};