
import { Form } from '../Components/Form'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {


  return (
    <div className='contact d-flex flex-column justify-content-center align-items-center mt-3'>
      <div className='w-50 mw-50 d-flex flex-column align-items-center justify-content-center flex-wrap '>
        <h2>¿Quieres saber más?</h2>
        <p>Envíanos tus consultas y nos pondremos en contacto contigo</p>
        <Form />
      </div>
    </div>
  )
}

export default Contact