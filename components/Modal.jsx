import { useState, useEffect } from 'react'
import './Modal.css'

/**
 * Modal dialog component
 * @param {boolean} isOpen - Whether modal is open
 * @param {Function} onClose - Callback when modal closes
 * @param {string} title - Modal title
 * @param {React.ReactNode} children - Modal content
 * @param {Array} actions - Array of action objects: { label, onClick, variant }
 * @param {string} size - Modal size: 'small', 'medium', 'large'
 */
function Modal({ isOpen, onClose, title, children, actions = [], size = 'medium' }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className={`modal modal-${size}`}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          {children}
        </div>
        {actions.length > 0 && (
          <div className="modal-footer">
            {actions.map((action, idx) => (
              <button
                key={idx}
                className={`modal-btn modal-btn-${action.variant || 'primary'}`}
                onClick={() => {
                  action.onClick()
                  onClose()
                }}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Modal
