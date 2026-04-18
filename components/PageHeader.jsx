import './PageHeader.css'

/**
 * Generic PageHeader component - consistent page headers
 * @param {string} title - Page title
 * @param {string} subtitle - Page subtitle
 * @param {string} className - Optional CSS class
 */
function PageHeader({ title, subtitle, className = '' }) {
  return (
    <section className={`page-header ${className}`}>
      <h1 className="page-header-title">{title}</h1>
      {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
    </section>
  )
}

export default PageHeader
