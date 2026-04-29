import React from 'react'
import { useState } from 'react'
import './Formulario.css'

export const Formulario = () => {

    const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const domainRegex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+\/?$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "El nombre es obligatorio";
    }

    if (!form.email.trim()) {
      newErrors.email = "El correo es obligatorio";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Correo inválido";
    }

    if (form.website && !domainRegex.test(form.website)) {
      newErrors.website = "Dominio inválido";
    }

    if (!form.message.trim()) {
      newErrors.message = "El mensaje es obligatorio";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    console.log("Formulario enviado:", form);

    alert("Mensaje enviado correctamente");

    setForm({
      name: "",
      email: "",
      website: "",
      message: "",
    });

    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div>
        <label>Nombre</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Tu nombre"
        />
        {errors.name && <span>{errors.name}</span>}
      </div>

      <div>
        <label>Correo</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="correo@dominio.com"
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      <div>
        <label>Sitio web</label>
        <input
          type="text"
          name="website"
          value={form.website}
          onChange={handleChange}
          placeholder="www.franklincappa.com"
        />
        {errors.website && <span>{errors.website}</span>}
      </div>

      <div>
        <label>Mensaje</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Escribe tu mensaje"
        />
        {errors.message && <span>{errors.message}</span>}
      </div>

      <button type="submit">Enviar</button>
    </form>

  )
}
