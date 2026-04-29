import React from 'react'
import { useState } from 'react'
import './FormularioEmpleado.css'

//Catálogos (backend por API REST)
const DEPARTAMENTOS = ["Sistemas", "Recursos Humanos", "Finanzas", "Ventas", "Operaciones"];
const CARGOS = ["Desarrollador", "Analista", "Líder Técnico", "Gerente", "Asistente"];
const HABILIDADES_DISPONIBLES = ["Java", "C# .NET", "Angular", "React", "SQL Server", "MongoDB", "Oracle"];

const empleadoInicial = {
  // Datos personales
  nombres: "",
  apellidos: "",
  dni: "",
  fechaNacimiento: "",
  genero: "",
  // Contacto
  email: "",
  telefono: "",
  direccion: "",
  // Datos laborales
  cargo: "",
  departamento: "",
  salario: "",
  fechaIngreso: "",
  modalidad: "presencial",
  habilidades: [],
  comentarios: "",
  disponible: true,
};

export const FormularioEmpleado = () => {

    const [empleado, setEmpleado] = useState(empleadoInicial);
  const [empleados, setEmpleados] = useState([]);
  const [errores, setErrores] = useState({});
  const [editandoId, setEditandoId] = useState(null);

// Manejador genérico
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEmpleado((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Manejador especial para checkboxes múltiples (habilidades)
  const handleHabilidadChange = (habilidad) => {
    setEmpleado((prev) => {
      const yaSeleccionada = prev.habilidades.includes(habilidad);
      return {
        ...prev,
        habilidades: yaSeleccionada
          ? prev.habilidades.filter((h) => h !== habilidad)
          : [...prev.habilidades, habilidad],
      };
    });
  };

  
  // Validación
  const validar = () => {
    const errs = {};

    if (empleado.nombres.trim().length < 2) errs.nombres = "Nombres requerido.";
    if (empleado.apellidos.trim().length < 2) errs.apellidos = "Apellidos requerido.";

    if (!/^\d{8}$/.test(empleado.dni)) {
      errs.dni = "El DNI debe tener exactamente 8 dígitos.";
    }

    if (!empleado.fechaNacimiento) {
      errs.fechaNacimiento = "Selecciona una fecha.";
    } else {
      const edad = calcularEdad(empleado.fechaNacimiento);
      if (edad < 18) errs.fechaNacimiento = "El empleado debe ser mayor de edad.";
      if (edad > 80) errs.fechaNacimiento = "Fecha de nacimiento poco realista.";
    }

    if (!empleado.genero) errs.genero = "Selecciona un género.";

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(empleado.email)) errs.email = "Correo inválido.";

    if (!/^\d{7,12}$/.test(empleado.telefono)) {
      errs.telefono = "Teléfono inválido (7 a 12 dígitos).";
    }

    if (empleado.direccion.trim().length < 5) {
      errs.direccion = "Dirección demasiado corta.";
    }

    if (!empleado.cargo) errs.cargo = "Selecciona un cargo.";
    if (!empleado.departamento) errs.departamento = "Selecciona un departamento.";

    const salarioNum = Number(empleado.salario);
    if (!empleado.salario || isNaN(salarioNum) || salarioNum < 1000) {
      errs.salario = "El salario debe ser un número mayor o igual a 1000.";
    }

    if (!empleado.fechaIngreso) errs.fechaIngreso = "Selecciona la fecha de ingreso.";

    if (empleado.habilidades.length === 0) {
      errs.habilidades = "Selecciona al menos una habilidad.";
    }

    // DNI duplicado (solo si NO estamos editando ese mismo)
    const dniDuplicado = empleados.some(
      (e) => e.dni === empleado.dni && e.id !== editandoId
    );
    if (dniDuplicado) errs.dni = "Ya existe un empleado con ese DNI.";

    return errs;
  };

  const calcularEdad = (fecha) => {
    const hoy = new Date();
    const nacimiento = new Date(fecha);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const m = hoy.getMonth() - nacimiento.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) edad--;
    return edad;
  };


  // Submit (crea o actualiza según editandoId)
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validar();
    setErrores(errs);

    if (Object.keys(errs).length > 0) return;

    if (editandoId) {
      // Actualizar
      setEmpleados((prev) =>
        prev.map((emp) =>
          emp.id === editandoId
            ? { ...empleado, id: editandoId, salario: Number(empleado.salario) }
            : emp
        )
      );
    } else {
      // Crear
      const nuevo = {
        ...empleado,
        id: Date.now(),
        salario: Number(empleado.salario),
      };
      setEmpleados((prev) => [...prev, nuevo]);
    }

    // Reset
    setEmpleado(empleadoInicial);
    setEditandoId(null);
    setErrores({});
  };

    const editarEmpleado = (id) => {
    const emp = empleados.find((e) => e.id === id);
    if (!emp) return;
    setEmpleado({ ...emp, salario: String(emp.salario) });
    setEditandoId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const eliminarEmpleado = (id) => {
    setEmpleados((prev) => prev.filter((e) => e.id !== id));
    if (editandoId === id) {
      setEmpleado(empleadoInicial);
      setEditandoId(null);
    }
  };

  const cancelarEdicion = () => {
    setEmpleado(empleadoInicial);
    setEditandoId(null);
    setErrores({});
  };

  return (
    <section className="card">
      <h2>{editandoId ? "Editar empleado" : "Registro de Empleados"}</h2>

      <form onSubmit={handleSubmit} noValidate>
        {/* Sección 1: Datos personales */}
        <fieldset>
          <legend>Datos personales</legend>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nombres">Nombres *</label>
              <input
                id="nombres"
                type="text"
                name="nombres"
                value={empleado.nombres}
                onChange={handleChange}
                required
              />
              {errores.nombres && <span className="error">{errores.nombres}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="apellidos">Apellidos *</label>
              <input
                id="apellidos"
                type="text"
                name="apellidos"
                value={empleado.apellidos}
                onChange={handleChange}
                required
              />
              {errores.apellidos && <span className="error">{errores.apellidos}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="dni">DNI *</label>
              <input
                id="dni"
                type="text"
                name="dni"
                value={empleado.dni}
                onChange={handleChange}
                required
                pattern="\d{8}"
                maxLength={8}
              />
              {errores.dni && <span className="error">{errores.dni}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="fechaNacimiento">Fecha de nacimiento *</label>
              <input
                id="fechaNacimiento"
                type="date"
                name="fechaNacimiento"
                value={empleado.fechaNacimiento}
                onChange={handleChange}
                required
              />
              {errores.fechaNacimiento && (
                <span className="error">{errores.fechaNacimiento}</span>
              )}
            </div>
          </div>

          <div className="form-group">
            <label>Género *</label>
            <div className="radio-group">
              {["Masculino", "Femenino", "Otro"].map((g) => (
                <label key={g}>
                  <input
                    type="radio"
                    name="genero"
                    value={g}
                    checked={empleado.genero === g}
                    onChange={handleChange}
                  />
                  {g}
                </label>
              ))}
            </div>
            {errores.genero && <span className="error">{errores.genero}</span>}
          </div>
        </fieldset>

        {/* Sección 2: Contacto */}
        <fieldset>
          <legend>Información de contacto</legend>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Correo electrónico *</label>
              <input
                id="email"
                type="email"
                name="email"
                value={empleado.email}
                onChange={handleChange}
                required
              />
              {errores.email && <span className="error">{errores.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="telefono">Teléfono *</label>
              <input
                id="telefono"
                type="tel"
                name="telefono"
                value={empleado.telefono}
                onChange={handleChange}
                required
                pattern="\d{7,12}"
              />
              {errores.telefono && <span className="error">{errores.telefono}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="direccion">Dirección *</label>
            <input
              id="direccion"
              type="text"
              name="direccion"
              value={empleado.direccion}
              onChange={handleChange}
              required
              minLength={5}
            />
            {errores.direccion && <span className="error">{errores.direccion}</span>}
          </div>
        </fieldset>

        {/* Sección 3: Datos laborales */}
        <fieldset>
          <legend>Datos laborales</legend>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="cargo">Cargo *</label>
              <select
                id="cargo"
                name="cargo"
                value={empleado.cargo}
                onChange={handleChange}
                required
              >
                <option value="">-- Seleccione --</option>
                {CARGOS.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              {errores.cargo && <span className="error">{errores.cargo}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="departamento">Departamento *</label>
              <select
                id="departamento"
                name="departamento"
                value={empleado.departamento}
                onChange={handleChange}
                required
              >
                <option value="">-- Seleccione --</option>
                {DEPARTAMENTOS.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
              {errores.departamento && (
                <span className="error">{errores.departamento}</span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="salario">Salario (S/.) *</label>
              <input
                id="salario"
                type="number"
                name="salario"
                value={empleado.salario}
                onChange={handleChange}
                required
                min={1000}
                step="50"
              />
              {errores.salario && <span className="error">{errores.salario}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="fechaIngreso">Fecha de ingreso *</label>
              <input
                id="fechaIngreso"
                type="date"
                name="fechaIngreso"
                value={empleado.fechaIngreso}
                onChange={handleChange}
                required
              />
              {errores.fechaIngreso && (
                <span className="error">{errores.fechaIngreso}</span>
              )}
            </div>
          </div>

          <div className="form-group">
            <label>Modalidad *</label>
            <div className="radio-group">
              {["presencial", "remoto", "hibrido"].map((m) => (
                <label key={m}>
                  <input
                    type="radio"
                    name="modalidad"
                    value={m}
                    checked={empleado.modalidad === m}
                    onChange={handleChange}
                  />
                  {m.charAt(0).toUpperCase() + m.slice(1)}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Habilidades * (selecciona al menos una)</label>
            <div className="checkbox-grid">
              {HABILIDADES_DISPONIBLES.map((h) => (
                <label key={h} className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={empleado.habilidades.includes(h)}
                    onChange={() => handleHabilidadChange(h)}
                  />
                  {h}
                </label>
              ))}
            </div>
            {errores.habilidades && (
              <span className="error">{errores.habilidades}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="comentarios">Comentarios adicionales</label>
            <textarea
              id="comentarios"
              name="comentarios"
              rows={3}
              value={empleado.comentarios}
              onChange={handleChange}
              maxLength={300}
            />
            <small>{empleado.comentarios.length}/300 caracteres</small>
          </div>

          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                name="disponible"
                checked={empleado.disponible}
                onChange={handleChange}
              />
              Disponible para nuevos proyectos
            </label>
          </div>
        </fieldset>

        <div className="botones">
          <button type="submit" className="btn-primary">
            {editandoId ? "Actualizar empleado" : "Registrar empleado"}
          </button>
          {editandoId && (
            <button type="button" className="btn-secondary" onClick={cancelarEdicion}>
              Cancelar
            </button>
          )}
        </div>
      </form>

      {/* Lista de empleados */}
      <h3>Empleados registrados ({empleados.length})</h3>

      {empleados.length === 0 ? (
        <p className="vacio">No hay empleados registrados aún.</p>
      ) : (
        <div className="lista-empleados">
          {empleados.map((emp) => (
            <article key={emp.id} className="empleado-card">
              <header>
                <h4>{emp.nombres} {emp.apellidos}</h4>
                <span className={emp.disponible ? "estado-ok" : "estado-no"}>
                  {emp.disponible ? "Disponible" : "No disponible"}
                </span>
              </header>
              <p><strong>DNI:</strong> {emp.dni}</p>
              <p><strong>Cargo:</strong> {emp.cargo} — {emp.departamento}</p>
              <p><strong>Email:</strong> {emp.email} | <strong>Tel:</strong> {emp.telefono}</p>
              <p><strong>Salario:</strong> S/. {emp.salario.toLocaleString()}</p>
              <p><strong>Modalidad:</strong> {emp.modalidad}</p>
              <p><strong>Habilidades:</strong> {emp.habilidades.join(", ")}</p>
              {emp.comentarios && <p><em>{emp.comentarios}</em></p>}

              <div className="botones">
                <button className="btn-secondary" onClick={() => editarEmpleado(emp.id)}>
                  Editar
                </button>
                <button className="btn-danger" onClick={() => eliminarEmpleado(emp.id)}>
                  Eliminar
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
