import './ProgressBar.css'

/**
 * Generic progress bar for determinate or indeterminate loading states.
 * @param {number} value - Current progress value
 * @param {number} max - Maximum progress value
 * @param {string} label - Optional label above the bar
 * @param {boolean} indeterminate - Animated bar when total progress is unknown
 * @param {string} className - Optional wrapper class
 */
function ProgressBar({
  value = 0,
  max = 100,
  label,
  indeterminate = false,
  className = '',
}) {
  const percent = indeterminate
    ? null
    : max > 0
      ? Math.min(100, Math.max(0, (value / max) * 100))
      : 0

  return (
    <div
      className={`progress-bar ${className}`.trim()}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={indeterminate ? undefined : max}
      aria-valuenow={indeterminate ? undefined : value}
      aria-busy={indeterminate || undefined}
      aria-label={label}
    >
      {label && <div className="progress-bar-label">{label}</div>}
      <div className="progress-bar-track">
        <div
          className={`progress-bar-fill${indeterminate ? ' progress-bar-fill--indeterminate' : ''}`}
          style={indeterminate ? undefined : { width: `${percent}%` }}
        />
      </div>
      {!indeterminate && (
        <div className="progress-bar-meta">{Math.round(percent)}%</div>
      )}
    </div>
  )
}

export default ProgressBar
