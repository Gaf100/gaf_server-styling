import { Alert } from '@gaf/ui'
import './StatusMessage.css'

/**
 * Generic StatusMessage component - handle error/success messages
 * @param {string} error - Error message
 * @param {string} success - Success message
 * @param {Function} onDismissError - Callback to clear error
 * @param {Function} onDismissSuccess - Callback to clear success
 */
function StatusMessage({ error, success, onDismissError, onDismissSuccess }) {
  return (
    <div className="status-message-container">
      {error && (
        <div className="status-message-item">
          <Alert type="error">{error}</Alert>
          {onDismissError && (
            <button className="status-dismiss" onClick={onDismissError}>×</button>
          )}
        </div>
      )}
      {success && (
        <div className="status-message-item">
          <Alert type="success">{success}</Alert>
          {onDismissSuccess && (
            <button className="status-dismiss" onClick={onDismissSuccess}>×</button>
          )}
        </div>
      )}
    </div>
  )
}

export default StatusMessage
