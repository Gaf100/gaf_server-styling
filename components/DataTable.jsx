import { Card } from '@gaf/ui'
import './DataTable.css'

/**
 * Generic DataTable component - reusable for any data grid
 * @param {Array} data - Array of data items to display
 * @param {Array} columns - Array of column definitions: [{ key: 'email', label: 'אימייל', width: '30%' }, ...]
 * @param {Function} renderRow - Function to render each row: (item, index) => JSX
 * @param {string} emptyMessage - Message to show when data is empty
 * @param {string} className - Optional CSS class
 */
function DataTable({ data, columns, renderRow, emptyMessage = 'אין נתונים', className = '' }) {
  if (!data || data.length === 0) {
    return <p className={`data-table-empty ${className}`}>{emptyMessage}</p>
  }

  return (
    <Card className={`data-table-wrapper ${className}`}>
      <div className="data-table-container">
        <table className="data-table">
          <thead>
            <tr>
              {columns.map(col => (
                <th key={col.key} style={{ width: col.width }}>
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => renderRow(item, index))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default DataTable
