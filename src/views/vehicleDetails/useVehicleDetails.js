import { useNavigate, useParams } from 'react-router-dom'
import { axiosInstance } from '../../api/axiosInstance'
import { useState, useEffect } from 'react'

export const useVehicleDetails = () => {
  const [vehicle, setVehicle] = useState({
    año: '',
    color: '',
    fecha_registro: '',
    marca: '',
    modelo: '',
    observaciones: '',
    placa: '',
    propietario: ''
  })
  const [ownersList, setOwnersList] = useState([])
  const [isEditStateDisabled, setEditStateDisabled] = useState(true)
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()

  const fetchOwners = async () => {
    try {
      const { data } = await axiosInstance.get('api/propietarios/')
      setOwnersList(data)
      fetchVehicle()
    } catch (error) {
      console.error(error)
    }
  }

  const fetchVehicle = async () => {
    try {
      const { data } = await axiosInstance.get(`api/vehiculos/${id}/`)
      setVehicle(data)
    } catch (error) {
      console.error(error)
    }
  }

  const toggleEdition = () => {
    setEditStateDisabled(!isEditStateDisabled)
  }

  const handleInputChange = (e) => {
    setVehicle({
      ...vehicle,
      [e.target.name]: e.target.value
    })
  }

  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
      await axiosInstance.put(`/api/vehiculos/${id}/`, vehicle)
      setShowErrorMessage(false)
      navigate('/vehiculos')
    } catch (error) {
      setShowErrorMessage(true)
    }
  }

  useEffect(() => {
    fetchOwners()
  }, [])

  return ({ vehicle, ownersList, isEditStateDisabled, toggleEdition, handleInputChange, onSubmitForm, showErrorMessage })
}
