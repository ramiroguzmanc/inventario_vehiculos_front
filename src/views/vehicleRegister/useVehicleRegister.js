import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { axiosInstance } from '../../api/axiosInstance'

export const useVehicleRegister = () => {
  const { register, handleSubmit, reset } = useForm()
  const [owners, setOwners] = useState([])
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  const fetchOwners = async () => {
    try {
      const { data } = await axiosInstance('api/propietarios/')
      setOwners(data)
    } catch (error) {
      console.error(error)
    }
  }

  const onSubmit = async (formData) => {
    try {
      await axiosInstance.post('api/vehiculos/', formData)
      setShowErrorMessage(false)
      reset()
    } catch (error) {
      setShowErrorMessage(true)
    }
  }

  useEffect(() => {
    fetchOwners()
  }, [])

  return ({
    register,
    handleSubmit,
    onSubmit,
    owners,
    showErrorMessage
  })
}
