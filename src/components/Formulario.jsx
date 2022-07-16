import { useState, useEffect } from "react"
import Error from "./Error";


function Formulario({pacientes, setPacientes}) {

    const[nombre, setNombre] = useState('');
    const[propietario, setPropieario] = useState('');
    const[email, setEmail] = useState('');
    const[fecha, setFecha] = useState('');
    const[sintomas, setSintomas] = useState('');
    const[error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        //Validar formulario
        if ([nombre, propietario, email, fecha, sintomas].includes('')){
            setError(true);
            return;
        } 
        setError(false);

        //Objeto Paciente
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        }

        setPacientes([...pacientes, objetoPaciente]);
        
        //Reiniciar formulario
        setNombre('');
        setPropieario('');
        setEmail('');
        setFecha('');
        setSintomas('');

    }
    
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">
            Seguimiento Pacientes
        </h2>
        <p className="text-lg mt-2 text-center mb-8">
            Añade Pacientes y {''}
            <span className="text-indigo-600 font-bold">Administralos</span>
        </p>
        <form 
        onSubmit={handleSubmit}
        className="bg-indigo-100 shadow-2xl rounded-lg py-10 px-5 mb-10"
        >
            {error && 
                <Error 
                    mensaje="Todos los campos son obligatorios"
                />
            }
            <div className="mb-4">
                <label htmlFor="nombre" className="block text-indigo-600 uppercase font-bold">
                    Nombre Mascota
                </label>
                <input 
                    id="nombre"
                    type="text"
                    placeholder="Nombre de la mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md border-indigo-600"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
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
                    value={propietario}
                    onChange={(e) => setPropieario(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}

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
                    value={sintomas}
                    onChange={(e) => setSintomas(e.target.value)}
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