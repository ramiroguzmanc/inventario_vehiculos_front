import { axiosInstance } from '../../api/axiosInstance'
import { useEffect, useState, useRef } from 'react'

export const useOwnerList = () => {
  const [ownersList, setOwnersList] = useState([])
  const [modalIsBeingShown, setModalIsBeingShown] = useState(false)
  const [selectedOwner, setSelectedOwner] = useState({})
  const [showError, setError] = useState(false)

  const matriculaInputRef = useRef()

  // Obtiene la lista de propietarios desde el endpoint
  const getOwnerList = async () => {
    const { data } = await axiosInstance.get('/api/propietarios/')
    setOwnersList(data)
  }

  // Eliminar propietario
  const handleDeleteOwner = async () => {
    try {
      await axiosInstance.delete(`/api/propietarios/${selectedOwner.id}/`)
      await getOwnerList()
      setModalIsBeingShown(false)
    } catch (error) {
      console.error(error)
      setModalIsBeingShown(false)
    }
  }
  // Manejador del modal de confirmación
  const toggleModal = (owner) => {
    setModalIsBeingShown(!modalIsBeingShown)
    setSelectedOwner(owner)
  }

  const handleVehicleOwnerForm = async (e) => {
    e.preventDefault()
    const matricula = matriculaInputRef.current.value
    try {
      const { data } = await axiosInstance.get(`/api/vehiculos/${matricula}/propietario`)
      setOwnersList(data.propietarios)
      setError(false)
    } catch (error) {
      console.error(error)
      setError(true)
    }
  }

  const handleClearButton = () => {
    getOwnerList()
    matriculaInputRef.current.value = ''
  }

  // Ejecuta la función de búsqueda de propietarios al cargar la vista
  useEffect(() => {
    getOwnerList()
  }, [])

  return ({
    ownersList,
    modalIsBeingShown,
    handleDeleteOwner,
    toggleModal,
    matriculaInputRef,
    handleVehicleOwnerForm,
    showError,
    handleClearButton
  })
}
