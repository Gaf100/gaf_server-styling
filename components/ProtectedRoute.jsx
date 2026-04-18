import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function ProtectedRoute({ children, requiredRoles = null }) {
  const { isAuthenticated, canAccess, loading, user } = useAuth()

  // Show loading while checking auth
  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        direction: 'rtl'
      }}>
        <div style={{ fontSize: '1.5rem' }}>טוען...</div>
      </div>
    )
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />
  }

  // Check role-based access
  if (requiredRoles && !canAccess(requiredRoles)) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '4rem 2rem',
        direction: 'rtl',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1>אין גישה</h1>
        <p>אין לך הרשאה לגשת לדף זה.</p>
        <p>אנא פנה למנהל המערכת לקבלת הרשאות.</p>
      </div>
    )
  }

  return children
}

export default ProtectedRoute
