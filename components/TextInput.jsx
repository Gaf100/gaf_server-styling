import './TextInput.css'

/**
 * Reusable text input component
 * @param {string} label - Input label
 * @param {string} value - Input value
 * @param {Function} onChange - Change handler
 * @param {string} placeholder - Placeholder text
 * @param {string} type - Input type: 'text', 'email', 'password', 'number', etc.
 * @param {boolean} required - Whether input is required
 * @param {string} error - Error message
 * @param {boolean} disabled - Disable input
 * @param {string} hint - Helper text below input
 */
function TextInput({
  label,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  required = false,
  error = '',
  disabled = false,
  hint = '',
  ...props
}) {
  return (
    <div className="text-input-wrapper">
      {label && (
        <label className="text-input-label">
          {label}
          {required && <span className="text-input-required">*</span>}
        </label>
      )}
      <input
        type={type}
        className={`text-input ${error ? 'text-input-error' : ''}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        {...props}
      />
      {error && <span className="text-input-error-message">{error}</span>}
      {hint && !error && <span className="text-input-hint">{hint}</span>}
    </div>
  )
}

export default TextInput
