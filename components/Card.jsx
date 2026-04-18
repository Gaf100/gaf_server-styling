/**
 * Card component — container with shadow and padding.
 */
export function Card({ 
  children, 
  className = '',
  header = null,
  footer = null,
  ...props 
}) {
  return (
    <div className={`card ${className}`} {...props}>
      {header && (
        <div className="card-header">
          {typeof header === 'string' ? <h3>{header}</h3> : header}
        </div>
      )}
      <div className="card-body">
        {children}
      </div>
      {footer && (
        <div className="card-footer">
          {typeof footer === 'string' ? <p>{footer}</p> : footer}
        </div>
      )}
    </div>
  )
}
