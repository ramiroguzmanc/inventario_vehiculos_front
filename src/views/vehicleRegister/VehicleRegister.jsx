import { DashboardLayout } from '../../layouts/DashboardLayout'
import { useVehicleRegister } from './useVehicleRegister'

export const VehicleRegister = () => {
  const { handleSubmit, register, onSubmit, owners, showErrorMessage } = useVehicleRegister()

  return (
    <DashboardLayout>
      <section className='px-8 pt-8 w-full'>
        <header>
          <h1 className='text-5xl font-bold'>Registrar vehículo</h1>
        </header>
        <section className='mt-10'>
          <form onSubmit={handleSubmit(onSubmit)} className='max-w-md'>
            <div className='mb-2 flex justify-between items-center'>
              <label htmlFor='placa'>Placa:</label>
              <input type='text' name='placa' id='placa' placeholder='XXX000' {...register('placa')} required className='p-2 rounded-md' />
            </div>
            <div className='mb-2 flex justify-between items-center'>
              <label htmlFor='marca'>Marca:</label>
              <input type='text' name='marca' id='marca' placeholder='Toyota, Hyundai, etc...' {...register('marca')} required className='p-2 rounded-md' />
            </div>
            <div className='mb-2 flex justify-between items-center'>
              <label htmlFor='modelo'>Modelo:</label>
              <input type='text' name='modelo' id='modelo' placeholder='Prado, Atos, etc...' {...register('modelo')} required className='p-2 rounded-md' />
            </div>
            <div className='mb-2 flex justify-between items-center'>
              <label htmlFor='año'>Año:</label>
              <input type='number' name='año' id='año' placeholder='2020, 2021, etc...' {...register('año')} required className='p-2 rounded-md' />
            </div>
            <div className='mb-2 flex justify-between items-center'>
              <label htmlFor='color'>Color:</label>
              <input type='text' name='color' id='color' placeholder='Azul, Negro, Rojo, etc...' {...register('color')} required className='p-2 rounded-md' />
            </div>
            <div className='mb-2 flex justify-between items-center'>
              <label htmlFor='propietario'>Propietario:</label>
              <select name='propietario' id='propietario' {...register('propietario')} className='ml-2 py-2 rounded-md w-48' required>
                <option value=''>Seleccione</option>
                {owners.map(owner => (
                  <option key={owner.id} value={owner.id}>{owner.nombres_apellidos}</option>

                ))}
              </select>
            </div>
            <div className='mb-2'>
              <label htmlFor='observaciones'>Observaciones:</label>
              <textarea type='text' name='observaciones' id='observaciones' placeholder='Excelente estado...' {...register('observaciones')} required className='block p-2 my-4 w-full h-34 rounded-md' />
            </div>
            {showErrorMessage && <p className='text-red'>Ha ocurrido un error, inténtalo nuevamente</p>}
            <button className='p-2 mt-4 rounded-md bg-green text-white font-bold'>Registrar vehículo</button>
          </form>
        </section>
      </section>
    </DashboardLayout>
  )
}
