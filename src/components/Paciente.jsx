
function Paciente({paciente, setPaciente, eliminarPaciente}) {
    const {nombre, propietario, fecha, email, sintomas, id} = paciente;

    const handleEliminar = () => {
        const respuesta = confirm(`Esta seguro que desea eliminar el paciente ${nombre}?`);
        if (respuesta) {
            eliminarPaciente(id);
        }
    }

  return (
    <div className="m-3 bg-white shadow-lg p-5 rounded-xl border">
            <h2 className="border-b font-bold text-2xl uppercase text-indigo-600 mb-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-600 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            {nombre}</h2>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:{''}
                <span className="font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email:{''}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta:{''}
                <span className="font-normal normal-case">{fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas:{''}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>
            <div className="flex justify-end mt-6">
                <button
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-lg mr-4"
                    type="button"
                    onClick={() => setPaciente(paciente)}
                >Editar</button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounded-lg"
                    onClick={handleEliminar}
                >Eliminar</button>
            </div>
        </div>
  )
}

export default Paciente;