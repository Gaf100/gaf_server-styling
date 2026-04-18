import './Badge.css'

/**
 * Badge component — small labeled tags.
 */
function Badge({
  variant = 'default',
  children,
  className = '',
  ...props
}) {
  const classes = [
    'badge',
    variant !== 'default' && `badge-${variant}`,
    className
  ].filter(Boolean).join(' ')

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  )
}

export default Badge
