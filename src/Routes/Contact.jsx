
import { Form } from '../Components/Form'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {


  return (
    <div className='d-flex flex-column justify-content-center align-items-center  mt-5'>
      <div className='w-50 mw-50 d-flex flex-column align-items-center justify-content-center flex-wrap '>
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
        <Form />
      </div>
    </div>
  )
}

export default Contact