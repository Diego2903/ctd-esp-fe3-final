import { useState } from "react"
import { MensajeExito } from "./MensajeExito"


export const Form = () => {

    const [form, setForm] = useState({
        nombreCompleto: "",
        email: ""
    })

    const { nombreCompleto, email } = form

    const [show, setShow] = useState(false);
    const [err, setErr] = useState(false);

    const onChangeInput = ({ target }) => {
        const { name, value } = target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (nombreCompleto.trim().length >= 3 && email.trim().includes("@")) {
            setShow(true)
            setErr(false)
            event.target.reset()
        } else {
            setShow(false)
            setErr(true)
        }
    }

    return (
        <div className="w-75">
            <form onSubmit={handleSubmit} className="mt-3">
                <div className="m-3">
                    <label className="form-label">Nombre Completo</label>
                    <input type="text" className="form-control" placeholder="Julanito Perez" onChange={onChangeInput} name="nombreCompleto" autoComplete="off"/>
                </div>
                <div className="m-3">
                    <label className="form-label">Escribe tu correo electronico</label>
                    <input type="email" className="form-control" placeholder="example@gmail.com" onChange={onChangeInput} name="email" autoComplete="off"/>
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary m-3">Enviar</button>
                </div>
            </form>

            {err ? <p>Los datos estan incompletos, por favor rellenar todo el formulario.</p> : null}
            {show && <MensajeExito nombreCompleto={nombreCompleto} />}
        </div>
    )
}
