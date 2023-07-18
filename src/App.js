import React from 'react';
import './App.css';
import Testimonio from './components/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>

        <Testimonio
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='Shawn1'
          cargo='Ingeniero de Software'
          empresa='Amazon'
      testimonio={React.createElement('span', { dangerouslySetInnerHTML: { __html:'Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. <strong>freeCodeCamp cambió mi vida.</strong>' } })}
      nomAlt='Shawn Wang' />

        <Testimonio
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='Sarah2'
          cargo='Ingeniera de Software'
          empresa='ChatDesk'
          testimonio={React.createElement('span', { dangerouslySetInnerHTML: { __html:'<strong>freeCodeCamp fue la puerta de entrada a mi carrera</strong> como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.' } })}
          nomAlt='Sarah Chima' />
        <Testimonio
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='Emma3'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio={React.createElement('span', { dangerouslySetInnerHTML: { __html:'Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en <strong>freeCodeCamp me dio las habilidades</strong> y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.' } })}
          nomAlt='Emma Bostian' />

      </div>
    </div>
  );
}

export default App;
