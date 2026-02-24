import { useState } from 'react';
import { Modal } from './Modal';
import { useModal } from '../hooks/useModal';

export const NestedModalDemo = () => {
  const parentModal = useModal();
  const childModal = useModal();
  const [level, setLevel] = useState(1);

  const openNextLevel = () => {
    setLevel((prev) => prev + 1);
    childModal.open();
  };

  return (
    <>
      <button
        onClick={parentModal.open}
        className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-semibold transition-colors"
      >
        Ouvrir Modal Imbriqué
      </button>

      <Modal isOpen={parentModal.isOpen} onClose={parentModal.close} size="lg">
        <Modal.Header>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Modal Niveau {level}
          </h2>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Ceci est un modal au niveau {level}. Les modals peuvent être imbriqués les uns dans les autres !
            </p>
            <div className="p-4 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
              <p className="text-sm text-purple-700 dark:text-purple-300">
                💡 <strong>Astuce :</strong> Chaque modal gère son propre focus trap et peut être fermé indépendamment avec Escape.
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={parentModal.close}
            className="px-6 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg font-semibold transition-colors"
          >
            Fermer
          </button>
          <button
            onClick={openNextLevel}
            className="px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-semibold transition-colors"
          >
            Ouvrir Niveau {level + 1}
          </button>
        </Modal.Footer>
      </Modal>

      <Modal isOpen={childModal.isOpen} onClose={childModal.close} size="md">
        <Modal.Header>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Modal Niveau {level}
          </h2>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              C'est le niveau {level} ! Vous pouvez continuer à imbriquer autant que nécessaire.
            </p>
            <div className="p-4 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg">
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                ⚠️ <strong>Note :</strong> Dans une vraie application, limitez l'imbrication pour une meilleure UX.
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={() => {
              childModal.close();
              setLevel(1);
            }}
            className="px-6 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg font-semibold transition-colors"
          >
            Fermer
          </button>
          {level < 5 && (
            <button
              onClick={openNextLevel}
              className="px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-semibold transition-colors"
            >
              Continuer ({level + 1})
            </button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};