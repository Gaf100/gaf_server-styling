import './DatePicker.css'

/**
 * Reusable date picker component
 * @param {string} label - Input label
 * @param {string} value - Date value (YYYY-MM-DD format)
 * @param {Function} onChange - Change handler
 * @param {boolean} required - Whether input is required
 * @param {string} error - Error message
 * @param {boolean} disabled - Disable input
 * @param {string} hint - Helper text below input
 * @param {string} min - Minimum date (YYYY-MM-DD format)
 * @param {string} max - Maximum date (YYYY-MM-DD format)
 */
function DatePicker({
  label,
  value,
  onChange,
  required = false,
  error = '',
  disabled = false,
  hint = '',
  min = '',
  max = '',
  ...props
}) {
  return (
    <div className="date-picker-wrapper">
      {label && (
        <label className="date-picker-label">
          {label}
          {required && <span className="date-picker-required">*</span>}
        </label>
      )}
      <input
        type="date"
        className={`date-picker ${error ? 'date-picker-error' : ''}`}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        min={min}
        max={max}
        {...props}
      />
      {error && <span className="date-picker-error-message">{error}</span>}
      {hint && !error && <span className="date-picker-hint">{hint}</span>}
    </div>
  )
}

export default DatePicker
