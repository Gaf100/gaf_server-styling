import './GenericButton.css'

/**
 * Generic reusable button component
 * @param {string} children - Button text
 * @param {string} className - Custom CSS classes for styling/color
 * @param {string} variant - Button style variant: 'primary', 'secondary', 'danger', 'success', 'info', 'warning', 'outline', 'light'
 * @param {string} size - Button size: 'small', 'medium', 'large'
 * @param {boolean} disabled - Disable button
 * @param {Function} onClick - Click handler
 * @param {string} type - Button type: 'button', 'submit', 'reset'
 */
function GenericButton({
  children,
  className = '',
  variant = 'secondary',
  size = 'medium',
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) {
  const variantClass = variant ? `btn-${variant}` : ''
  
  return (
    <button
      type={type}
      className={`generic-btn generic-btn-${size} ${variantClass} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default GenericButton
