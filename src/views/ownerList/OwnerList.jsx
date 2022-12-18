import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { DashboardLayout } from '../../layouts/DashboardLayout'
import { Link } from 'react-router-dom'
import { ModalConfirm } from '../../components/ModalConfirm'
// Hooks
import { useOwnerList } from './useOwnerList'

export const OwnerList = () => {
  const { ownersList, modalIsBeingShown, toggleModal, handleDeleteOwner, matriculaInputRef, handleVehicleOwnerForm, showError, handleClearButton } = useOwnerList()

  return (
    <DashboardLayout>
      <ModalConfirm isBeingShown={modalIsBeingShown} handleCancelButton={toggleModal} handleDeleteButton={handleDeleteOwner} />
      <section className='px-8 pt-8  w-full'>
        <header>
          <h1 className='text-5xl font-bold'>Lista de propietarios</h1>
        </header>
        <section className='mt-10'>
          <div className='mb-10 flex items-center'>
            <form onSubmit={handleVehicleOwnerForm}>
              <label>Buscar propietario por placa de vehículo:
                <input type='text' placeholder='Escriba una placa' ref={matriculaInputRef} required className='border border-graydark rounded-lg mx-4 p-2' />
              </label>
              <button className='bg-green px-6 py-2 rounded-lg text-white font-bold'>Buscar</button>
            </form>
            <button onClick={handleClearButton} className='bg-red px-6 py-2 rounded-lg text-white font-bold ml-4'>Limpiar</button>
          </div>
          {showError && <p className='text-red'>No se han encontrado resultados, ten en cuenta las mayúsculas e inténtalo nuevamente</p>}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell align='center'>
                    <span className='font-bold'>
                      Tipo Documento
                    </span>
                  </TableCell>
                  <TableCell align='center'>
                    <span className='font-bold'>
                      Número Documento
                    </span>
                  </TableCell>
                  <TableCell align='center'>
                    <span className='font-bold'>
                      Nombres y Apellidos
                    </span>
                  </TableCell>
                  <TableCell align='center'>
                    <span className='font-bold'>
                      Acciones
                    </span>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ownersList?.map((owner) => (
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    key={owner.id}
                  >
                    <TableCell align='center'>{owner.tipo_documento}</TableCell>
                    <TableCell align='center'>{owner.numero_documento}</TableCell>
                    <TableCell align='center'>{owner.nombres_apellidos}</TableCell>
                    <TableCell align='center'>
                      <Link to={`/propietarios/${owner.id}`} className='mx-2'>Ver</Link>
                      <span onClick={() => toggleModal(owner)} className='mx-2 text-red cursor-pointer'>Eliminar</span>
                    </TableCell>
                  </TableRow>

                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </section>
      </section>
    </DashboardLayout>
  )
}
