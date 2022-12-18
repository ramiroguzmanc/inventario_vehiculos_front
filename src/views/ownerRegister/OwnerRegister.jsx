import { DashboardLayout } from '../../layouts/DashboardLayout'
import { useOwnerRegister } from './useOwnerRegister'

export const OwnerRegister = () => {
  const { handleSubmit, onSubmit, register, error } = useOwnerRegister()

  return (
    <DashboardLayout>
      <section className='px-8 pt-8 w-full'>
        <header>
          <h1 className='text-5xl font-bold'>Registrar Propietario</h1>
        </header>
        <section className='mt-10'>
          <form onSubmit={handleSubmit(onSubmit)} className='max-w-md'>
            <div className='mb-2 flex justify-between items-center'>
              <label htmlFor='tipo_documento'>Tipo de documento:</label>
              <select name='tipo_documento' id='tipo_documento' {...register('tipo_documento')} className='ml-2 py-2 rounded-md'>
                <option value='CC'>CC - Cédula de ciudadanía</option>
                <option value='CE'>CE - Cédula de extranjería</option>
                <option value='NIT'>NIT - NIT</option>
              </select>
            </div>
            <div className='mb-2 flex justify-between items-center'>
              <label htmlFor='numero_documento'>Número de documento:</label>
              <input type='number' name='numero_documento' id='numero_documento' {...register('numero_documento')} placeholder='132456789' required className='ml-2 p-2 rounded-md' />
            </div>
            <div className='mb-2 flex justify-between items-center'>
              <label htmlFor='nombres_apellidos'>Nombres y apellidos:</label>
              <input type='text' name='nombres_apellidos' id='nombres_apellidos' {...register('nombres_apellidos')} placeholder='Nombres y apellidos' required className='ml-2 p-2 rounded-md' />
            </div>
            <div className='mb-2 flex justify-between items-center'>
              <label htmlFor='direccion'>Dirección:</label>
              <input type='text' name='direccion' id='direccion' {...register('direccion')} placeholder='Dirección' required className='ml-2 p-2 rounded-md' />
            </div>
            <div className='mb-2 flex justify-between items-center'>
              <label htmlFor='numero_telefono'>Número de teléfono:</label>
              <input type='number' name='numero_telefono' id='numero_telefono' {...register('numero_telefono')} placeholder='Número de teléfono' required className='ml-2 p-2 rounded-md' />
            </div>
            <div className='mb-2 flex justify-between items-center'>
              <label htmlFor='email'>Email:</label>
              <input type='email' name='email' id='email' {...register('email')} placeholder='johndoe@correo.com' required className='ml-2 p-2 rounded-md' />
            </div>
            <p className={`text-red ${!error && 'hidden'}`}>Ha ocurrido un error, por favor revise los campos e inténtelo nuevamente</p>
            <button className='p-2 mt-4 rounded-md bg-green text-white font-bold'>Registrar propietario</button>
          </form>
        </section>
      </section>
    </DashboardLayout>
  )
}
