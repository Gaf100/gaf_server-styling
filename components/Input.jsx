/**
 * Input component — styled text input with optional label.
 */
export function Input({
  label = null,
  error = null,
  type = 'text',
  className = '',
  required = false,
  ...props
}) {
  return (
    <>
      {label && (
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
          {label}
          {required && <span style={{ color: 'var(--gaf-primary-from)' }}>*</span>}
        </label>
      )}
      <input
        type={type}
        className={className}
        required={required}
        {...props}
        style={{
          borderColor: error ? 'var(--gaf-primary-from)' : undefined,
          ...props.style
        }}
      />
      {error && (
        <span style={{ color: 'var(--gaf-primary-from)', fontSize: '0.875rem', display: 'block', marginTop: '0.5rem' }}>
          {error}
        </span>
      )}
    </>
  )
}
