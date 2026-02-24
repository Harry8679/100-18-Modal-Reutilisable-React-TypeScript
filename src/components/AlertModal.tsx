import { Modal } from './Modal';
import type { AlertModalProps } from '../types';

export const AlertModal = ({
  isOpen,
  onClose,
  title,
  message,
  variant = 'info',
}: AlertModalProps) => {
  const getIcon = () => {
    switch (variant) {
      case 'danger':
        return '❌';
      case 'success':
        return '✅';
      case 'warning':
        return '⚠️';
      case 'info':
      default:
        return 'ℹ️';
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm" variant={variant}>
      <Modal.Header>
        <div className="flex items-center gap-3">
          <span className="text-3xl">{getIcon()}</span>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h2>
        </div>
      </Modal.Header>
      <Modal.Body>
        <p className="text-gray-700 dark:text-gray-300">{message}</p>
      </Modal.Body>
      <Modal.Footer>
        <button
          onClick={onClose}
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors"
        >
          OK
        </button>
      </Modal.Footer>
    </Modal>
  );
};