import './LoadingSpinner.css'

/**
 * Generic LoadingSpinner component
 * @param {string} text - Loading text
 * @param {boolean} fullScreen - Full screen overlay
 */
function LoadingSpinner({ text = 'טוען...', fullScreen = false }) {
  const content = (
    <div className="loading-spinner">
      <div className="spinner"></div>
      {text && <p className="loading-text">{text}</p>}
    </div>
  )

  if (fullScreen) {
    return (
      <div className="loading-spinner-fullscreen">
        {content}
      </div>
    )
  }

  return content
}

export default LoadingSpinner
