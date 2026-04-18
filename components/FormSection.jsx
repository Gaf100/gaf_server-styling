import { Card } from '@gaf/ui'
import './FormSection.css'

/**
 * Generic FormSection component - consistent form containers
 * @param {string} title - Section title
 * @param {JSX} children - Form fields
 * @param {string} className - Optional CSS class
 */
function FormSection({ title, children, className = '' }) {
  return (
    <Card className={`form-section ${className}`}>
      {title && <h2 className="form-section-title">{title}</h2>}
      <div className="form-section-content">
        {children}
      </div>
    </Card>
  )
}

export default FormSection
