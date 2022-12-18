import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { DashboardLayout } from '../../layouts/DashboardLayout'
import { Link } from 'react-router-dom'
import { useVehicleList } from './useVehicleList'
import { ModalConfirm } from '../../components/ModalConfirm'

export const VehicleList = () => {
  const vehicleTableHeaders = ['Placa', 'Marca', 'Modelo', 'Acciones']
  const { vehicles, toggleModalShow, isBeingShow, handleVehicleDelete, cedulaInputRef, handleSearchByDocumentNumber, showErrorMessage, handleClearButton } = useVehicleList()

  return (
    <DashboardLayout>
      <ModalConfirm isBeingShown={isBeingShow} handleCancelButton={toggleModalShow} handleDeleteButton={handleVehicleDelete} />
      <section className='px-8 pt-8  w-full'>
        <header>
          <h1 className='text-5xl font-bold'>Lista de vehículos</h1>
        </header>
        <section className='mt-10'>
          <div className='mb-10 flex items-center'>
            <form onSubmit={handleSearchByDocumentNumber}>
              <label>Buscar vehículo por número de documento de propietario:
                <input type='number' placeholder='Escriba una placa' ref={cedulaInputRef} required className='border border-graydark rounded-lg mx-4 p-2' />
              </label>
              <button className='bg-green px-6 py-2 rounded-lg text-white font-bold'>Buscar</button>
            </form>
            <button onClick={handleClearButton} className='bg-red ml-3 px-3 py-2 rounded-lg text-white font-bold'>Limpiar</button>
          </div>
          {showErrorMessage && <p className='text-red'>Ha ocurrido un error, por favor inténtalo nuevamente</p>}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  {vehicleTableHeaders.map(header => (
                    <TableCell align='center' key={header}>
                      <span className='font-bold'>
                        {header}
                      </span>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {vehicles?.map((vehicle) => (
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    key={vehicle.id}
                  >
                    <TableCell align='center'>{vehicle.placa}</TableCell>
                    <TableCell align='center'>{vehicle.marca}</TableCell>
                    <TableCell align='center'>{vehicle.modelo}</TableCell>
                    <TableCell align='center'>
                      <Link to={`/vehiculos/${vehicle.id}`} className='mx-2'>Ver</Link>
                      <span onClick={() => toggleModalShow(vehicle)} className='mx-2 text-red cursor-pointer'>Eliminar</span>
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
