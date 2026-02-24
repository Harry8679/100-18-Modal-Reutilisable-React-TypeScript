import { Modal } from './Modal';
import type { ConfirmModalProps } from '../types';

export const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'Confirmer',
  cancelText = 'Annuler',
  variant = 'danger',
}: ConfirmModalProps) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm" variant={variant}>
      <Modal.Header>
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h2>
      </Modal.Header>
      <Modal.Body>
        <p className="text-gray-700 dark:text-gray-300">{message}</p>
      </Modal.Body>
      <Modal.Footer>
        <button
          onClick={onClose}
          className="px-6 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg font-semibold transition-colors"
        >
          {cancelText}
        </button>
        <button
          onClick={handleConfirm}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
            variant === 'danger'
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          {confirmText}
        </button>
      </Modal.Footer>
    </Modal>
  );
};