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
        <div className="status-message-item status-message-error">
          <div className="status-message-content">{error}</div>
          {onDismissError && (
            <button className="status-dismiss" onClick={onDismissError}>×</button>
          )}
        </div>
      )}
      {success && (
        <div className="status-message-item status-message-success">
          <div className="status-message-content">{success}</div>
          {onDismissSuccess && (
            <button className="status-dismiss" onClick={onDismissSuccess}>×</button>
          )}
        </div>
      )}
    </div>
  )
}

export default StatusMessage
