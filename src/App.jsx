import { Navigate, Route, Routes } from 'react-router-dom'
// Vistas
import { Login } from './views/login/Login'
import { Dashboard } from './views/dashboard/Dashboard'
import { OwnerList } from './views/ownerList/OwnerList'
import { VehicleList } from './views/vehicleList/VehicleList'
import { OwnerRegister } from './views/ownerRegister/OwnerRegister'
import { VehicleRegister } from './views/vehicleRegister/VehicleRegister'
import { VehicleDetails } from './views/vehicleDetails/VehicleDetails'
import { OwnerDetails } from './views/ownerDetails/OwnerDetails'
import { ProtectedRoute } from './views/protectedRoute/ProtectedRoute'

function App () {
  return (
    <div className='bg-gray'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path='/propietarios' element={<ProtectedRoute><OwnerList /></ProtectedRoute>} />
        <Route path='/propietarios/registrar' element={<ProtectedRoute><OwnerRegister /></ProtectedRoute>} />
        <Route path='/propietarios/:id' element={<ProtectedRoute><OwnerDetails /></ProtectedRoute>} />
        <Route path='/vehiculos' element={<ProtectedRoute><VehicleList /></ProtectedRoute>} />
        <Route path='/vehiculos/registrar' element={<ProtectedRoute><VehicleRegister /></ProtectedRoute>} />
        <Route path='/vehiculos/:id' element={<ProtectedRoute><VehicleDetails /></ProtectedRoute>} />
        <Route path='*' element={<Navigate to='/dashboard' />} />
      </Routes>
    </div>
  )
}

export default App
