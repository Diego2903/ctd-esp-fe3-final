import { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {


  const { medicos } = useContext(ContextGlobal)

  return (
    <main className="" >

      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {
          medicos.map(medico => (
            <Card name={medico.name} username={medico.username} id={medico.id} key={medico.id} />
          ))
        }
      </div>
    </main>
  )
}

export default Home