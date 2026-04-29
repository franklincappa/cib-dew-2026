import React from 'react'
import { useState } from 'react'

export const FormularioRegistro = () => {
    const [formData, setFormData] = useState({
        nombre:'',
        email:'',
        password:''
    })

    const handleSubmit= (e) => {
        e.preventDefault()
        console.log('Enviando datos del formulario:', formData)
        setFormData({ nombre:'', email:'', password:'' })
    }

    const handleNombreChange = (e) =>{
        setFormData({ ...formData, nombre: e.target.value})
    }

    const handlePasswordChange = (e) => {
        setFormData({ ...formData, password: e.target.value})
    }
    
    const limpiarRegistro = () => {
        setFormData({
            nombre:'',
            email:'',
            password:''
        })
    }

  return (
    <div>
        <h2>Formulario de Registro</h2>
        <form onSubmit={handleSubmit} >
            <div>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" onChange={handleNombreChange} value={formData.nombre} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" onChange = {(e) => setFormData({...formData, email: e.target.value})} value={formData.email} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={handlePasswordChange} value={formData.password} />
            </div>
            <button type="submit">Registrar</button>
        </form>
        <button onClick={limpiarRegistro}>Limpiar</button>
    </div>
  )
}
