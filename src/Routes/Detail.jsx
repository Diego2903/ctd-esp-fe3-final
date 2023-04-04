
import { useContext } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const { id } = useParams()
  const navigate = useNavigate()
  const { medicos } = useContext(ContextGlobal)

  const getMedicoById = () => {
    return medicos.find(medico => medico.id === parseInt(id))
  }

  const medicoId = getMedicoById()

  if (!medicoId) {
    return <Navigate to="/home" />
  }

  const salirDeNavegacion = () => {
    navigate(-1)
  }

  return (
    <div className='details d-flex flex-column justify-content-center align-items-center mt-3 mb-3'>
      <div className='w-50 mw-50 d-flex flex-column align-items-center justify-content-center flex-wrap'>

        <h1>Detalle Dentista</h1>
        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        <table className="table m-3">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Email</th>
              <th scope="col">Telefono</th>
              <th scope="col">WebSite</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{medicoId.name}</td>
              <td>{medicoId.email}</td>
              <td>{medicoId.phone}</td>
              <td>{medicoId.website}</td>
            </tr>
          </tbody>
        </table>
        <button className='btn btn-danger' onClick={salirDeNavegacion}>Regresar</button>
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      </div>
    </div>
  )
}

export default Detail