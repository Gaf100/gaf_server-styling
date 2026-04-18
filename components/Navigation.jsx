import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { getCategoriesForNav, getRoutesByCategory, canAccessRoute, canAccessCategory } from '../config/routes'
import './Navigation.css'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  
  // Get auth context with proper error handling
  const auth = useAuth()
  const isAuthenticated = auth?.isAuthenticated || (() => false)
  const user = auth?.user || null
  const logout = auth?.logout || (() => {})
  const hasAnyRole = auth?.hasAnyRole || (() => false)

  // Helper function to check if user can access a route
  const canAccessRoute = (route) => {
    // No role restrictions - accessible to all authenticated users
    if (!route.allowedRoles) return true
    // User must have at least one of the required roles
    return hasAnyRole(route.allowedRoles)
  }

  // Get categories and filter based on user role
  const allCategories = getCategoriesForNav()
  const accessibleCategories = allCategories.filter(cat => {
    // Check if user can access at least one route in category
    const categoryRoutes = cat.routes
    return categoryRoutes.some(route => canAccessRoute(route))
  })

  const isActive = (path) => location.pathname === path

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleLogout = () => {
    logout()
    navigate('/')
    setShowUserMenu(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          גף מא"ה
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation menu */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {/* Dynamic hierarchical categories */}
          {accessibleCategories.map((category) => {
            // Get routes in this category that user can access
            const accessibleRoutes = getRoutesByCategory(category.name).filter(
              route => canAccessRoute(route)
            )
            
            if (accessibleRoutes.length === 0) return null

            // Single route in category - show as direct link
            if (accessibleRoutes.length === 1) {
              const route = accessibleRoutes[0]
              return (
                <li key={category.pathSegment}>
                  <Link 
                    to={route.path}
                    className={isActive(route.path) ? 'active' : ''}
                    onClick={closeMenu}
                  >
                    {route.icon} {route.label}
                  </Link>
                </li>
              )
            }

            // Multiple routes - create dropdown
            return (
              <li key={category.pathSegment} className="nav-item-dropdown">
                <span className="nav-link-dropdown">
                  {category.icon} {category.name}
                </span>
                <ul className="dropdown-menu">
                  {accessibleRoutes.map(route => (
                    <li key={route.path}>
                      <Link 
                        to={route.path}
                        className={isActive(route.path) ? 'active' : ''}
                        onClick={closeMenu}
                      >
                        {route.icon} {route.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}

          {/* User Menu */}
          {isAuthenticated() ? (
            <li>
                <a href="#" onClick={(e) => { e.preventDefault(); handleLogout(); }}>
                    התנתק
                </a>
            </li>
          ) : (
            <>
              <li>
                <Link 
                  to="/public/login" 
                  className={isActive('/public/login') ? 'active' : ''}
                  onClick={closeMenu}
                >
                  התחברות
                </Link>
              </li>
              <li>
                <Link 
                  to="/public/register" 
                  className={isActive('/public/register') ? 'active' : ''}
                  onClick={closeMenu}
                >
                  הרשמה
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}


export default Navigation
