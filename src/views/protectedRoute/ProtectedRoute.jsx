import { Navigate } from 'react-router-dom'
import { useUserSession } from '../../generalHooks/useUserSession'

// Obtiene el token en caso de existir y envía al usuario al login en caso de que no esté una sesión iniciada
export const ProtectedRoute = ({ children }) => {
  const { userToken } = useUserSession()
  if (!userToken) {
    return (
      <Navigate to='/' />
    )
  }
  return children
}
