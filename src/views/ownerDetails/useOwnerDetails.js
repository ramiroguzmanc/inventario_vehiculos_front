import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { axiosInstance } from '../../api/axiosInstance'

export const useOwnerDetails = () => {
  const { id } = useParams()
  const [isEditStateDisabled, setEditStateDisabled] = useState(true)
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const [owner, setOwner] = useState({
    direccion: '',
    email: '',
    nombres_apellidos: '',
    numero_documento: '',
    numero_telefono: '',
    tipo_documento: ''
  })

  const navigate = useNavigate()

  // Cambia el estado entre habilitar o inhabilitar edición
  const toggleEdition = () => {
    setEditStateDisabled(!isEditStateDisabled)
  }

  // Trae la información del propietario seleccionado
  const fetchOwner = async () => {
    try {
      const { data } = await axiosInstance.get(`api/propietarios/${id}/`)
      setOwner(data)
    } catch (error) {
      console.error(error)
    }
  }

  // Conecta con el EP correspondiente para actualizar el propietario con la nueva data
  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
      await axiosInstance.put(`/api/propietarios/${id}/`, owner)
      setShowErrorMessage(false)
      navigate('/propietarios')
    } catch (error) {
      setShowErrorMessage(true)
    }
  }

  const handleInputChange = (e) => {
    setOwner({
      ...owner,
      [e.target.name]: e.target.value
    })
  }

  // Ejecuta la función que busca la información del propietario al cargar la página
  useEffect(() => {
    fetchOwner()
  }, [])

  return ({
    isEditStateDisabled,
    toggleEdition,
    owner,
    onSubmitForm,
    showErrorMessage,
    handleInputChange
  })
}
