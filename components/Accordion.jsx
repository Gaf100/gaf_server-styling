import { useState } from 'react'
import './Accordion.css'

/**
 * Accordion item component
 */
function AccordionItem({ id, title, children, isOpen, onToggle }) {
  return (
    <div className={`accordion-item ${isOpen ? 'accordion-item-open' : ''}`}>
      <button
        className="accordion-header"
        onClick={() => onToggle(id)}
      >
        <span className="accordion-title">{title}</span>
        <span className="accordion-icon">▼</span>
      </button>
      {isOpen && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </div>
  )
}

/**
 * Accordion component - collapsible sections
 * @param {Array} items - Array of { id, title, content } objects
 * @param {boolean} allowMultiple - Allow multiple items open at once
 */
function Accordion({ items = [], allowMultiple = false }) {
  const [openItems, setOpenItems] = useState([])

  const handleToggle = (id) => {
    if (allowMultiple) {
      setOpenItems(prev =>
        prev.includes(id)
          ? prev.filter(item => item !== id)
          : [...prev, id]
      )
    } else {
      setOpenItems(prev => (prev.includes(id) ? [] : [id]))
    }
  }

  return (
    <div className="accordion">
      {items.map(item => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          isOpen={openItems.includes(item.id)}
          onToggle={handleToggle}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  )
}

export default Accordion
