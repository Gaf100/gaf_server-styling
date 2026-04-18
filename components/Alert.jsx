/**
 * Alert component — success, error, warning, info messages.
 */
export function Alert({
  type = 'info',
  children,
  className = '',
  onClose = null,
  ...props
}) {
  const classes = [
    'alert',
    `alert-${type}`,
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      <div style={{ flex: 1 }}>
        {children}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: 0,
            color: 'inherit'
          }}
        >
          ×
        </button>
      )}
    </div>
  )
}
