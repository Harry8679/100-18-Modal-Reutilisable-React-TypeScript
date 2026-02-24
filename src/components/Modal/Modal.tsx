import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useScrollLock } from '../../hooks/useScrollLock';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import { ModalContext } from './ModalContext';
import type { ModalProps, ModalSize, ModalVariant } from '../../types';

const getSizeClasses = (size: ModalSize): string => {
  const sizes: Record<ModalSize, string> = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-full mx-4',
  };
  return sizes[size];
};

const getVariantClasses = (variant: ModalVariant): string => {
  const variants: Record<ModalVariant, string> = {
    default: 'bg-white dark:bg-gray-800',
    danger: 'bg-white dark:bg-gray-800 border-2 border-red-500',
    success: 'bg-white dark:bg-gray-800 border-2 border-green-500',
    warning: 'bg-white dark:bg-gray-800 border-2 border-yellow-500',
    info: 'bg-white dark:bg-gray-800 border-2 border-blue-500',
  };
  return variants[variant];
};

export const Modal = ({
  isOpen,
  onClose,
  children,
  size = 'md',
  variant = 'default',
  closeOnBackdropClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  className = '',
}: ModalProps) => {
  const containerRef = useFocusTrap(isOpen);
  useScrollLock(isOpen);

  // Handle Escape key
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeOnEscape, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (closeOnBackdropClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-fadeIn"
        onClick={handleBackdropClick}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={containerRef}
        className={`relative w-full ${getSizeClasses(size)} ${getVariantClasses(variant)} rounded-2xl shadow-2xl animate-scaleIn ${className}`}
        role="dialog"
        aria-modal="true"
      >
        <ModalContext.Provider value={{ onClose, variant }}>
          {children}
        </ModalContext.Provider>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};