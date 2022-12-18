import { Link, useNavigate } from 'react-router-dom'
// Assets
import logoutImage from '../assets/logout.svg'
import carImage from '../assets/car.svg'
import userImage from '../assets/user.svg'

export const NavBar = () => {
  // Cierra la sesión del usuario al hacer click sobre "Cerrar Sesión en el navbar"
  const navigate = useNavigate()
  const handleLogOut = () => {
    window.localStorage.clear()
    navigate('/')
  }

  return (
    <nav className='bg-white px-4 relative min-w-fit'>
      <div className='my-8'>
        <Link to='/dashboard'>
          <h1 className='text-3xl text-center text-blue font-bold'>Inventario vehículos</h1>
        </Link>
      </div>
      <div>
        <ul>
          <div className='flex items-center mb-1'>
            <img src={userImage} alt='imagen usuario' />
            <li className='font-bold text-xl ml-2'>Propietarios</li>
          </div>
          <hr className='mb-4' />
          <ul>
            <li><Link to='/propietarios'>Listar propietarios</Link></li>
            <li><Link to='/propietarios/registrar'>Registrar propietario</Link></li>
          </ul>
          <div className='mt-4 mb-1 flex items-center'>
            <img src={carImage} alt='car image' />
            <li className='font-bold text-xl ml-2'>Vehículos</li>
          </div>
          <hr className='mb-4' />
          <ul>
            <li><Link to='/vehiculos'>Listar vehículos</Link></li>
            <li><Link to='/vehiculos/registrar'> Registrar vehículo</Link></li>
          </ul>
        </ul>
      </div>
      <div className='absolute bottom-4 flex items-center hover:cursor-pointer' onClick={handleLogOut}>
        <img src={logoutImage} alt='logout' />
        <span className='text-xl font-bold text-red ml-2'> Cerrar sesión</span>
      </div>
    </nav>
  )
}
