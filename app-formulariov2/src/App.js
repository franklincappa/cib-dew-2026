import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import { Formulario } from './components/Formulario';
import { FormularioRegistro } from './components/FormularioRegistro';
import { FormularioEmpleado } from './components/FormularioEmpleado';
import { Navbar } from './components/Navbar';

function App() {

  const [vista, setVista] = useState('inicio');

  return (
    <div className="App">
      <Navbar linkActivo={vista} onSeleccionar={setVista} />
      {vista === 'inicio' && <h1>Bienvenido al sistema de RRHH</h1>}
      {vista === 'empleados' && <FormularioEmpleado />}
      {vista === 'contacto' && <FormularioRegistro />}
    </div>
  );
}

export default App;
