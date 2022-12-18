import { useForm } from 'react-hook-form'
import { axiosInstance } from '../../api/axiosInstance'
import { useState } from 'react'

export const useOwnerRegister = () => {
  const { register, handleSubmit, reset } = useForm()
  const [error, setError] = useState(false)

  const onSubmit = async (data) => {
    try {
      await axiosInstance.post('/api/propietarios/', data)
      setError(false)
      reset()
    } catch {
      setError(true)
    }
  }

  return ({
    handleSubmit,
    onSubmit,
    register,
    error
  })
}
