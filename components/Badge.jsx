/**
 * Badge component — small labeled tags.
 */
export function Badge({
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
