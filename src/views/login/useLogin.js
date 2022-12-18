import axios from 'axios'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
  const userInputRef = useRef()
  const passwordInputRef = useRef()
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Obtiene los valores de los input
    const user = userInputRef.current.value
    const pass = passwordInputRef.current.value

    // Envía la petición para obtener el token de usuario
    try {
      const { data } = await axios.post('http://127.0.0.1:8000/api_generate_token/', {
        username: user,
        password: pass
      })
      window.localStorage.setItem('userCredentials', JSON.stringify(data))
      userInputRef.current.value = ''
      passwordInputRef.current.value = ''
      setShowErrorMessage(false)
      navigate('/dashboard') // Manda al usuario al dashboard en caso de que el inicio de sesión se complete exitosamente
    } catch (error) {
      setShowErrorMessage(true)
    }
  }

  return ({
    handleSubmit,
    showErrorMessage,
    userInputRef,
    passwordInputRef
  })
}
