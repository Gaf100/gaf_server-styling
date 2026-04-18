import './Card.css'

/**
 * Card container component
 * @param {React.ReactNode} children - Card content
 * @param {string} title - Optional card title
 * @param {string} className - Additional CSS classes
 * @param {string} variant - Card style: 'default', 'outlined', 'elevated'
 */
function Card({ children, title, className = '', variant = 'default', ...props }) {
  return (
    <div className={`card card-${variant} ${className}`} {...props}>
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-content">
        {children}
      </div>
    </div>
  )
}

export default Card
