import { useState } from 'react'
import './MultiSelect.css'

/**
 * Reusable multi-select component
 * @param {string} label - Select label
 * @param {Array} value - Array of selected values
 * @param {Function} onChange - Change handler receives array of selected values
 * @param {Array} options - Array of { value, label } objects
 * @param {string} placeholder - Placeholder text
 * @param {boolean} required - Whether select is required
 * @param {string} error - Error message
 * @param {boolean} disabled - Disable select
 */
function MultiSelect({
  label,
  value = [],
  onChange,
  options = [],
  placeholder = 'בחר אפשרויות',
  required = false,
  error = '',
  disabled = false,
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = (optionValue) => {
    const newValue = value.includes(optionValue)
      ? value.filter(v => v !== optionValue)
      : [...value, optionValue]
    onChange(newValue)
  }

  const selectedLabels = options
    .filter(opt => value.includes(opt.value))
    .map(opt => opt.label)

  return (
    <div className="multi-select-wrapper">
      {label && (
        <label className="multi-select-label">
          {label}
          {required && <span className="multi-select-required">*</span>}
        </label>
      )}
      <div className={`multi-select ${error ? 'multi-select-error' : ''}`}>
        <button
          type="button"
          className="multi-select-trigger"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
        >
          <div className="multi-select-display">
            {value.length === 0 ? (
              <span className="multi-select-placeholder">{placeholder}</span>
            ) : (
              <div className="multi-select-tags">
                {selectedLabels.map((label, idx) => (
                  <span key={idx} className="multi-select-tag">
                    {label}
                    <button
                      type="button"
                      className="multi-select-tag-remove"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleToggle(options[options.findIndex(opt => opt.label === label)].value)
                      }}
                    >
                      ✕
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
          <span className={`multi-select-chevron ${isOpen ? 'open' : ''}`}>▼</span>
        </button>

        {isOpen && (
          <div className="multi-select-dropdown">
            {options.map((option) => (
              <div
                key={option.value}
                className={`multi-select-option ${value.includes(option.value) ? 'selected' : ''}`}
                onClick={() => handleToggle(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
      {error && <span className="multi-select-error-message">{error}</span>}
    </div>
  )
}

export default MultiSelect
