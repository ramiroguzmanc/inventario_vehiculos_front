import { useEffect, useState, useRef } from 'react'
import { axiosInstance } from '../../api/axiosInstance'

export const useVehicleList = () => {
  const [vehicles, setVehicles] = useState([])
  const [isBeingShow, setIsBeingShow] = useState(false)
  const [selectedVehicle, setSelectedVehicle] = useState({})
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  const cedulaInputRef = useRef()

  const getVehiclesList = async () => {
    try {
      const { data } = await axiosInstance.get('/api/vehiculos/')
      setVehicles(data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleVehicleDelete = async () => {
    try {
      await axiosInstance.delete(`api/vehiculos/${selectedVehicle.id}`)
      setIsBeingShow(false)
      getVehiclesList()
    } catch (error) {
      console.error(error)
    }
  }

  const toggleModalShow = (vehicle) => {
    setSelectedVehicle(vehicle)
    setIsBeingShow(!isBeingShow)
  }

  const handleSearchByDocumentNumber = async (e) => {
    e.preventDefault()
    const cedula = cedulaInputRef.current.value
    try {
      const { data } = await axiosInstance.get(`api/propietarios/${cedula}/vehiculos`)
      setVehicles(data.vehiculos)
      setShowErrorMessage(false)
    } catch (error) {
      setShowErrorMessage(true)
      console.error(error)
    }
  }

  const handleClearButton = () => {
    getVehiclesList()
    cedulaInputRef.current.value = ''
  }

  useEffect(() => {
    getVehiclesList()
  }, [])

  return ({ vehicles, toggleModalShow, isBeingShow, handleVehicleDelete, cedulaInputRef, handleSearchByDocumentNumber, showErrorMessage, handleClearButton })
}
