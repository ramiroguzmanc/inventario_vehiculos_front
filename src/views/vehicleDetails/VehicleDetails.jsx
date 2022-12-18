import { DashboardLayout } from '../../layouts/DashboardLayout'
import { useVehicleDetails } from './useVehicleDetails'

export const VehicleDetails = () => {
  const { vehicle, ownersList, toggleEdition, isEditStateDisabled, handleInputChange, onSubmitForm, showErrorMessage } = useVehicleDetails()

  return (
    <DashboardLayout>
      <section className='px-8 mt-8 w-full'>
        <header className='flex justify-between'>
          <h1 className='text-5xl font-bold'>Vehículo - Detalles </h1>
          <button onClick={toggleEdition} className={`p-2 rounded-md text-white font-bold ${isEditStateDisabled ? 'bg-blue' : 'bg-red'} mb-6`}>{isEditStateDisabled ? 'Habilitar edición' : 'Deshabilitar edición'}</button>
        </header>
        <section className='mt-2 max-w-md'>
          <form onSubmit={onSubmitForm}>
            <div className='mb-2 flex justify-between items-center'>
              <label htmlFor='placa'>Placa:</label>
              <input type='text' name='placa' id='placa' onChange={(e) => handleInputChange(e)} defaultValue={vehicle.placa} disabled={isEditStateDisabled} required className='p-2 rounded-md' />
            </div>
            <div className='mb-2 flex justify-between items-center'>
              <label htmlFor='marca'>Marca:</label>
              <input type='text' name='marca' id='marca' onChange={(e) => handleInputChange(e)} defaultValue={vehicle.marca} disabled={isEditStateDisabled} required className='p-2 rounded-md' />
            </div>
            <div className='mb-2 flex justify-between items-center'>
              <label htmlFor='modelo'>Modelo:</label>
              <input type='text' name='modelo' id='modelo' onChange={(e) => handleInputChange(e)} defaultValue={vehicle.modelo} disabled={isEditStateDisabled} required className='p-2 rounded-md' />
            </div>
            <div className='mb-2 flex justify-between items-center'>
              <label htmlFor='año'>Año:</label>
              <input type='number' name='año' id='año' onChange={(e) => handleInputChange(e)} defaultValue={vehicle.año} disabled={isEditStateDisabled} className='p-2 rounded-md' />
            </div>
            <div className='mb-2 flex justify-between items-center'>
              <label htmlFor='color'>Color:</label>
              <input type='text' name='color' id='color' onChange={(e) => handleInputChange(e)} defaultValue={vehicle.color} disabled={isEditStateDisabled} className='p-2 rounded-md' />
            </div>
            <div className='mb-2 flex justify-between items-center'>
              <label htmlFor='propietario'>Propietario:</label>
              <select name='propietario' id='propietario' onChange={(e) => handleInputChange(e)} disabled={isEditStateDisabled} className='ml-2 py-2 rounded-md w-48' required>
                <option value=''>Seleccione</option>
                {ownersList.map(owner => (
                  <option key={owner.id} selected={owner.id === vehicle.propietario} value={owner.id}>{owner.nombres_apellidos}</option>
                ))}
              </select>
            </div>
            <div className='mb-2'>
              <label htmlFor='observaciones'>Observaciones:</label>
              <textarea type='text' name='observaciones' id='observaciones' onChange={(e) => handleInputChange(e)} defaultValue={vehicle.observaciones} disabled={isEditStateDisabled} className='block p-2 my-4 w-full h-30 rounded-md' />
            </div>
            <p className='mb-4'>Fecha registro: {vehicle.fecha_registro}</p>
            {showErrorMessage && <p className='text-red'>Ha ocurrido un error, por favor revisa los campos e inténtalo nuevamente</p>}
            {!isEditStateDisabled && <button className='p-2 rounded-md text-white font-bold bg-green'>Guardar cambios</button>}
          </form>
        </section>
      </section>
    </DashboardLayout>
  )
}
