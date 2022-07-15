
function Formulario() {
  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">
            Seguimiento Pacientes
        </h2>
        <p className="text-lg mt-2 text-center mb-8">
            Añade Pacientes y {''}
            <span className="text-indigo-600 font-bold">Administralos</span>
        </p>
        <form className="bg-indigo-100 shadow-2xl rounded-lg py-10 px-5 mb-10">
            <div className="mb-4">
                <label htmlFor="nombre" className="block text-indigo-600 uppercase font-bold">
                    Nombre Mascota
                </label>
                <input 
                    id="nombre"
                    type="text"
                    placeholder="Nombre de la mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md border-indigo-600"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="propietario" className="block text-indigo-600 uppercase font-bold">
                    Propietario Mascota
                </label>
                <input 
                    id="propietario"
                    type="text"
                    placeholder="Nombre del propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md border-indigo-600"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-indigo-600 uppercase font-bold">
                    Email
                </label>
                <input 
                    id="email"
                    type="email"
                    placeholder="Email del propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md border-indigo-600"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="fecha" className="block text-indigo-600 uppercase font-bold">
                    Fecha de alta
                </label>
                <input 
                    id="fecha"
                    type="date"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md border-indigo-600"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="sintomas" className="block text-indigo-600 uppercase font-bold">
                    Sintomas
                </label>
                <textarea 
                    id="sintomas"
                    type="text"
                    placeholder="Describe los sintomas"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md border-indigo-600"
                />
            </div>

            <input 
                type="submit" 
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer rounded-md transition-colors"
                value="Agregar Paciente"
            />
        </form>
    </div>
  )
}

export default Formulario