import './GenericButton.css'

const BUTTON_VARIANTS = ['primary', 'secondary', 'danger', 'success', 'info', 'warning', 'outline', 'light']
const LEGACY_VARIANT_CLASSES = new Set(BUTTON_VARIANTS.map(name => `btn-${name}`))

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
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) {
  const classNames = String(className).split(/\s+/).filter(Boolean)
  const legacyVariant = classNames.find(name => LEGACY_VARIANT_CLASSES.has(name))
  const resolvedVariant = legacyVariant ? legacyVariant.replace('btn-', '') : variant
  const customClasses = classNames.filter(name => !LEGACY_VARIANT_CLASSES.has(name))

  return (
    <button
      type={type}
      className={`generic-btn generic-btn-${size} generic-btn-${resolvedVariant} ${customClasses.join(' ')}`.trim()}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default GenericButton
