/**
 * FormGroup component — wraps label + input with consistent spacing.
 */
export function FormGroup({
  label,
  error = null,
  children,
  className = '',
  required = false,
  ...props
}) {
  return (
    <div className={`form-group ${className}`} {...props}>
      {label && (
        <label>
          {label}
          {required && <span style={{ color: 'var(--gaf-primary-from)', marginRight: '0.25rem' }}>*</span>}
        </label>
      )}
      {children}
      {error && (
        <span style={{ color: 'var(--gaf-primary-from)', fontSize: '0.875rem', marginTop: '0.25rem' }}>
          {error}
        </span>
      )}
    </div>
  )
}
