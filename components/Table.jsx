/**
 * Table component — renders data with columns.
 * 
 * @param {Array} data - Array of row objects
 * @param {Array} columns - Array of { key, label, render?, className? }
 * @param {string} className - Additional CSS classes
 */
export function Table({ data, columns, className = '', rowKey = null }) {
  if (!data || data.length === 0) {
    return (
      <div className="table-container">
        <table className={`table ${className}`}>
          <thead>
            <tr>
              {columns.map(col => (
                <th key={col.key}>{col.label}</th>
              ))}
            </tr>
          </thead>
        </table>
        <p style={{ padding: '2rem', textAlign: 'center', color: '#999' }}>
          No data available
        </p>
      </div>
    )
  }

  return (
    <div className="table-container">
      <table className={`table ${className}`}>
        <thead>
          <tr>
            {columns.map(col => (
              <th key={col.key}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={rowKey ? row[rowKey] : idx}>
              {columns.map(col => (
                <td
                  key={col.key}
                  className={col.className ? col.className(row[col.key]) : ''}
                >
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
