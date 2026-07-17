import Modal from './Modal';
import { Button } from './Button';
export const ConfirmationModal = ({ open, title, description, confirmLabel = 'Confirm', onClose, onConfirm, loading }) => <Modal open={open} title={title} onClose={onClose}><p className="text-sm text-text-secondary">{description}</p><div className="mt-8 flex justify-end gap-3 border-t border-gray-100 pt-5"><Button variant="secondary" onClick={onClose}>Cancel</Button><Button variant="primary" loading={loading} onClick={onConfirm}>{confirmLabel}</Button></div></Modal>;
