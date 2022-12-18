import { DashboardLayout } from '../../layouts/DashboardLayout'
import { useOwnerDetails } from './useOwnerDetails'

export const OwnerDetails = () => {
  const { isEditStateDisabled, toggleEdition, owner, onSubmitForm, showErrorMessage, handleInputChange } = useOwnerDetails()

  return (
    <DashboardLayout>
      <section className='px-8 mt-8 w-full'>
        <header className='flex justify-between'>
          <h1 className='text-5xl font-bold'>Propietario - Detalles </h1>
          <button onClick={toggleEdition} className={`p-2 rounded-md text-white font-bold ${isEditStateDisabled ? 'bg-blue' : 'bg-red'} mb-6`}>{isEditStateDisabled ? 'Habilitar edición' : 'Deshabilitar edición'}</button>
        </header>
        <section className='mt-2 max-w-md'>
          <form onSubmit={onSubmitForm}>
            <div className='mb-2 flex justify-between items-center'>
              <label htmlFor='tipo_documento'>Tipo de documento:</label>
              <select name='tipo_documento' id='tipo_documento' value={owner.tipo_documento} disabled className='ml-2 py-2 rounded-md'>
                <option value='CC'>CC - Cédula de ciudadanía</option>
                <option value='CE'>CE - Cédula de extranjería</option>
                <option value='NIT'>NIT - NIT</option>
              </select>
            </div>
            <div className='mb-2 flex justify-between items-center'>
              <label htmlFor='numero_documento'>Número de documento:</label>
              <input type='number' name='numero_documento' id='numero_documento' disabled required defaultValue={owner.numero_documento} onChange={(e) => handleInputChange(e)} className='ml-2 p-2 rounded-md' />
            </div>
            <div className='mb-2 flex justify-between items-center'>
              <label htmlFor='nombres_apellidos'>Nombres y apellidos:</label>
              <input type='text' name='nombres_apellidos' id='nombres_apellidos' disabled={isEditStateDisabled} required defaultValue={owner.nombres_apellidos} onChange={(e) => handleInputChange(e)} className='ml-2 p-2 rounded-md' />
            </div>
            <div className='mb-2 flex justify-between items-center'>
              <label htmlFor='direccion'>Dirección:</label>
              <input type='text' name='direccion' id='direccion' disabled={isEditStateDisabled} defaultValue={owner.direccion} onChange={(e) => handleInputChange(e)} className='ml-2 p-2 rounded-md' />
            </div>
            <div className='mb-2 flex justify-between items-center'>
              <label htmlFor='numero_telefono'>Número de teléfono:</label>
              <input type='number' name='numero_telefono' id='numero_telefono' disabled={isEditStateDisabled} defaultValue={owner.numero_telefono} onChange={(e) => handleInputChange(e)} className='ml-2 p-2 rounded-md' />
            </div>
            <div className='mb-2 flex justify-between items-center'>
              <label htmlFor='email'>Email:</label>
              <input type='email' name='email' id='email' disabled={isEditStateDisabled} defaultValue={owner.email} onChange={(e) => handleInputChange(e)} className='ml-2 p-2 rounded-md' />
            </div>
            <p className={`text-red ${!showErrorMessage && 'hidden'}`}>Ha ocurrido un error, por favor revisa los datos ingresado e inténtalo nuevamente</p>
            <button className={`p-2 rounded-md text-white font-bold bg-green ${isEditStateDisabled && 'hidden'}`}>Guardar cambios</button>
          </form>
        </section>
      </section>
    </DashboardLayout>
  )
}
