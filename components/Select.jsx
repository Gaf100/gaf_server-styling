import './Select.css'

/**
 * Reusable select/dropdown component
 * @param {string} label - Select label
 * @param {string} value - Selected value
 * @param {Function} onChange - Change handler
 * @param {Array} options - Array of { value, label } objects
 * @param {string} placeholder - Placeholder text
 * @param {boolean} required - Whether select is required
 * @param {string} error - Error message
 * @param {boolean} disabled - Disable select
 */
function Select({
  label,
  value,
  onChange,
  options = [],
  placeholder = 'בחר אפשרות',
  required = false,
  error = '',
  disabled = false,
  ...props
}) {
  return (
    <div className="select-wrapper">
      {label && (
        <label className="select-label">
          {label}
          {required && <span className="select-required">*</span>}
        </label>
      )}
      <select
        className={`select ${error ? 'select-error' : ''}`}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="select-error-message">{error}</span>}
    </div>
  )
}

export default Select
