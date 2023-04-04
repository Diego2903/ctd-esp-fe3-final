import { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {


  const { medicos } = useContext(ContextGlobal)

  return (
    <main className='mt-3'>

      <h1>Home</h1>
      <div className='card-grid mt-3'>
        {/* Aqui deberias renderizar las cards */}
        {
          medicos.map(medico => (
            <Card key={medico.id} name={medico.name} username={medico.username} id={medico.id} />
          ))
        }
      </div>
    </main>
  )
}

export default Home