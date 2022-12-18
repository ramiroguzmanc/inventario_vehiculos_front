import { ModalConfirm } from '../components/ModalConfirm'
import { NavBar } from '../components/NavBar'

export const DashboardLayout = ({ children }) => {
  return (
    <div className='flex min-h-screen relative'>
      <NavBar />
      {children}
      <ModalConfirm />
      <span className='text-xs text-green absolute bottom-0 right-2'>Made with ❤️ by Ramiro Guzmán C.</span>
    </div>
  )
}
