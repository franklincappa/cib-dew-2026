import React from 'react'
import "./SeccionCursos.css";
import { CursosCard } from './CursosCard';

export const SeccionCursos = () => {
 
    const cursos = [
    {
      id: 1,
      titulo: "JavaScript desde cero",
      descripcion: "Aprende lógica, DOM y eventos.",
      imagen: "https://picsum.photos/id/180/300/200"
    },
    {
      id: 2,
      titulo: "React JS práctico",
      descripcion: "Construye interfaces modernas por componentes.",
      imagen: "https://picsum.photos/id/48/300/200"
    },
    {
      id: 3,
      titulo: "CSS moderno",
      descripcion: "Diseña webs atractivas y responsivas.",
      imagen: "https://picsum.photos/id/20/300/200"
    },
    {
      id: 4,
      titulo: "Python Data ",
      descripcion: "Implementas conexiones con diferetnes base de datos.",
      imagen: "https://picsum.photos/id/48/300/200"
    },
    {
      id: 1,
      titulo: "JavaScript desde cero",
      descripcion: "Aprende lógica, DOM y eventos.",
      imagen: "https://picsum.photos/id/180/300/200"
    },
    {
      id: 2,
      titulo: "React JS práctico",
      descripcion: "Construye interfaces modernas por componentes.",
      imagen: "https://picsum.photos/id/48/300/200"
    },
    {
      id: 3,
      titulo: "CSS moderno",
      descripcion: "Diseña webs atractivas y responsivas.",
      imagen: "https://picsum.photos/id/20/300/200"
    },
    {
      id: 4,
      titulo: "Python Data ",
      descripcion: "Implementas conexiones con diferetnes base de datos.",
      imagen: "https://picsum.photos/id/48/300/200"
    }
  ];

  return (
    <section className="seccion-cursos">
        <h3>Nuestros Cursos</h3>
        <div className='contenedor-cursos'>
            {
                cursos.map((curso) =>(
                    <CursosCard titulo={curso.titulo} descripcion={curso.descripcion} imagen={curso.imagen} />
                ))
            }
        </div>
    </section>
  )
}
