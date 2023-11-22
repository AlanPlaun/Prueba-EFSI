import React, { useState, useEffect } from 'react';

const Tarea = () => {
  const [tarea, setTarea] = useState('');
  const [tareasList, setTareasList] = useState(() => {
    // Recuperar tareas almacenadas en localStorage al iniciar
    const storedTareas = localStorage.getItem('tareasList');
    return storedTareas ? JSON.parse(storedTareas) : [];
  });
  const [contadorTareas, setContadorTareas] = useState(0);

  useEffect(() => {
    // Guardar tareasList en localStorage cuando cambie
    localStorage.setItem('tareasList', JSON.stringify(tareasList));
  }, [tareasList]);

  useEffect(() => {
    document.title = `Tareas (${contadorTareas})`;
  }, [contadorTareas]);

  const handleInputChange = (e) => {
    setTarea(e.target.value);
  };

  const agregarTarea = () => {
    if (tarea.trim() !== '') {
      setTareasList([...tareasList, { texto: tarea, hecha: false }]);
      setTarea('');
      setContadorTareas(contadorTareas + 1);
    }
  };

  const marcarComoHecha = (index) => {
    const nuevasTareasList = [...tareasList];
    nuevasTareasList[index].hecha = !nuevasTareasList[index].hecha;
    setTareasList(nuevasTareasList);
  };

  return (
    <div>
      <input type="text" value={tarea} onChange={handleInputChange} />
      <button onClick={agregarTarea}>Agregar</button>

      <ul>
        {tareasList.map((tarea, index) => (
          <li key={index} style={{ textDecoration: tarea.hecha ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={tarea.hecha}
              onChange={() => marcarComoHecha(index)}
            />
            {tarea.texto}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tarea;
