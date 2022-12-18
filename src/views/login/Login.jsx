import { Link } from 'react-router-dom'
// Hooks
import { useLogin } from './useLogin'

export const Login = () => {
  const { handleSubmit, showErrorMessage, passwordInputRef, userInputRef } = useLogin()

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center bg-white border border-gray rounded-lg shadow-md p-4'>
        <h1 className='text-3xl font-bold mb-4 text-blue'>Inventario vehículos</h1>
        <h2 className='text-2xl font-semibold mb-4'>Bienvenido</h2>
        <div className='text-center'>
          <form onSubmit={handleSubmit}>
            <input type='text' required ref={userInputRef} placeholder='Nombre de usuario' className='border-gray border-2 block rounded-md p-2 my-2 w-full ' />
            <input type='password' required ref={passwordInputRef} placeholder='Contraseña' className='border-gray border-2 block rounded-md p-2 my-2 w-full' />
            <p className={`text-red ${!showErrorMessage && 'hidden'}`}>El usuario o la contraseña ingresada no son válidos</p>
            <button className='bg-blue w-full py-2 rounded-lg text-white font-bold text-xl mt-5 mb-2'>Iniciar sesión</button>
          </form>
          <hr className='my-4 border-gray' />
          <div className='px-10 py-2'>
            <Link className='bg-green px-10 py-2 rounded-lg text-white font-bold text-xl'>Crear cuenta nueva</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
