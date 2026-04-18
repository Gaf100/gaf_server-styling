import { useState } from 'react'
import './Tabs.css'

/**
 * Tabs component
 * @param {Array} tabs - Array of tab objects: { id, label, content }
 * @param {string} defaultTab - Default active tab id
 */
function Tabs({ tabs = [], defaultTab = '' }) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

  const activeTabData = tabs.find(tab => tab.id === activeTab)

  return (
    <div className="tabs">
      <div className="tabs-header">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tabs-button ${activeTab === tab.id ? 'tabs-button-active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
        <div className="tabs-indicator" />
      </div>
      <div className="tabs-content">
        {activeTabData && activeTabData.content}
      </div>
    </div>
  )
}

export default Tabs
