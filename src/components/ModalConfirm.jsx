export const ModalConfirm = ({ isBeingShown, handleDeleteButton, handleCancelButton }) => {
  return (
    <div className={`${!isBeingShown && 'hidden'} bg-graydark bg-opacity-80 absolute w-screen h-screen grid place-content-center`}>
      <div className='bg-white p-10 py-6 rounded-lg'>
        <h1 className='text-xl font-bold my-4'>¿Está seguro que desea eliminar el registro?</h1>
        <p>Esta acción no se podrá revertir.</p>
        <div className='flex justify-between mt-8'>
          <button onClick={handleDeleteButton} className='p-2 bg-red rounded-lg font-bold text-white'>Eliminar</button>
          <button onClick={handleCancelButton} className='p-2 bg-blue rounded-lg font-bold text-white'>Cancelar</button>
        </div>
      </div>
    </div>
  )
}
