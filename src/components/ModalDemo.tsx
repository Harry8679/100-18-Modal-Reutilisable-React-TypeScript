import { useState } from 'react';
import { useModal } from '../hooks/useModal';
import { Modal } from './Modal';
import { AlertModal } from './AlertModal';
import { ConfirmModal } from './ConfirmModal';
import { FormModal } from './FormModal';
import { NestedModalDemo } from './NestedModalDemo';

export const ModalDemo = () => {
  const basicModal = useModal();
  const alertModal = useModal();
  const confirmModal = useModal();
  const formModal = useModal();
  const customModal = useModal();

  const [alertType, setAlertType] = useState<'success' | 'danger' | 'warning' | 'info'>('info');

  const handleConfirm = () => {
    alert('Action confirmée !');
  };

  const handleFormSubmit = (data: { name: string; email: string; message: string }) => {
    console.log('Form data:', data);
    alert(`Merci ${data.name} ! Message envoyé.`);
  };

  const openAlert = (type: 'success' | 'danger' | 'warning' | 'info') => {
    setAlertType(type);
    alertModal.open();
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            🪟 Modal Réutilisable
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">
            Projet 18/100 • React Portals & Composition
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            Modals avancés avec portals, focus trap et composition
          </p>
        </div>

        {/* Demo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Basic Modal */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
              Modal Basique
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
              Modal simple avec composition de composants
            </p>
            <button
              onClick={basicModal.open}
              className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors"
            >
              Ouvrir
            </button>
          </div>

          {/* Alert Modals */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
              Modals d'Alerte
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
              Différents variants avec icônes
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => openAlert('success')}
                className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-semibold transition-colors"
              >
                Succès
              </button>
              <button
                onClick={() => openAlert('danger')}
                className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-semibold transition-colors"
              >
                Erreur
              </button>
              <button
                onClick={() => openAlert('warning')}
                className="px-3 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-sm font-semibold transition-colors"
              >
                Attention
              </button>
              <button
                onClick={() => openAlert('info')}
                className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-semibold transition-colors"
              >
                Info
              </button>
            </div>
          </div>

          {/* Confirm Modal */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
              Modal de Confirmation
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
              Demander confirmation avant action
            </p>
            <button
              onClick={confirmModal.open}
              className="w-full px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors"
            >
              Supprimer
            </button>
          </div>

          {/* Form Modal */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
              Modal avec Formulaire
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
              Formulaire dans un modal
            </p>
            <button
              onClick={formModal.open}
              className="w-full px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-semibold transition-colors"
            >
              Contacter
            </button>
          </div>

          {/* Custom Modal */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
              Modal Personnalisé
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
              Contenu personnalisé avec images
            </p>
            <button
              onClick={customModal.open}
              className="w-full px-4 py-2 bg-linear-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-lg font-semibold transition-colors"
            >
              Découvrir
            </button>
          </div>

          {/* Nested Modal */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
              Modals Imbriqués
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
              Modals dans d'autres modals
            </p>
            <NestedModalDemo />
          </div>
        </div>

        {/* Features */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            ✨ Fonctionnalités
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">React Portals</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Rendu en dehors du DOM parent
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Focus Trap</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Navigation au clavier Tab/Shift+Tab
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Scroll Lock</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Body scroll bloqué quand modal ouvert
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Escape Key</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Fermeture avec la touche Escape
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Backdrop Click</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Fermeture au clic extérieur
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Compound Components</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Modal.Header, Modal.Body, Modal.Footer
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Variants</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Default, Danger, Success, Warning, Info
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Animations</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Fade in backdrop + scale in modal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal isOpen={basicModal.isOpen} onClose={basicModal.close} size="md">
        <Modal.Header>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Modal Basique
          </h2>
        </Modal.Header>
        <Modal.Body>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Ceci est un modal basique utilisant le pattern de composition (Compound Components).
          </p>
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-sm text-blue-700 dark:text-blue-300">
              💡 Vous pouvez fermer ce modal en cliquant sur le bouton, en cliquant à l'extérieur, ou en appuyant sur Escape.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={basicModal.close}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors"
          >
            Fermer
          </button>
        </Modal.Footer>
      </Modal>

      <AlertModal
        isOpen={alertModal.isOpen}
        onClose={alertModal.close}
        title={
          alertType === 'success'
            ? 'Succès !'
            : alertType === 'danger'
            ? 'Erreur !'
            : alertType === 'warning'
            ? 'Attention !'
            : 'Information'
        }
        message={
          alertType === 'success'
            ? 'Votre action a été effectuée avec succès.'
            : alertType === 'danger'
            ? 'Une erreur est survenue lors de l\'opération.'
            : alertType === 'warning'
            ? 'Veuillez vérifier les informations avant de continuer.'
            : 'Voici une information importante à prendre en compte.'
        }
        variant={alertType}
      />

      <ConfirmModal
        isOpen={confirmModal.isOpen}
        onClose={confirmModal.close}
        onConfirm={handleConfirm}
        title="Confirmer la suppression"
        message="Êtes-vous sûr de vouloir supprimer cet élément ? Cette action est irréversible."
        confirmText="Supprimer"
        cancelText="Annuler"
        variant="danger"
      />

      <FormModal
        isOpen={formModal.isOpen}
        onClose={formModal.close}
        onSubmit={handleFormSubmit}
      />

      <Modal isOpen={customModal.isOpen} onClose={customModal.close} size="lg">
        <Modal.Header>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Découvrez nos fonctionnalités
          </h2>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
              alt="Development"
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-linear-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                <h3 className="font-bold text-gray-800 dark:text-white mb-2">🚀 Performance</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Optimisé pour les meilleures performances
                </p>
              </div>
              <div className="p-4 bg-linear-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-lg">
                <h3 className="font-bold text-gray-800 dark:text-white mb-2">🎨 Design</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Interface moderne et intuitive
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={customModal.close}
            className="px-6 py-2 bg-linear-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-lg font-semibold transition-colors"
          >
            Compris !
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};