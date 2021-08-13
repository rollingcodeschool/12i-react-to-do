import React, { Fragment, useState } from "react";

const Tareas = () => {
  // nombre del state, nombre de la funcion
  const [listaTareas, setListaTareas] = useState([]);
  const [tarea, setTarea] = useState("");
  // const capturarTarea = (e) =>{
  //     console.log(e.target.value);
  //     setTarea(e.target.value);
  // }
  const handleSubmit = (e) => {
    // prevenir que por defecto recargue para no perder info
    e.preventDefault();
    console.log("en el evento submit");
    let arreglo = listaTareas;
    arreglo.push(tarea);
    setListaTareas(arreglo);
    setTarea("");
  };

  return (
    <Fragment>
      <h1 className="my-5 text-center">Lista tareas React</h1>
      <div className="my-5 container d-flex justify-content-center">
        <form className="w-75" onSubmit={handleSubmit}>
          <div className="d-flex form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Tarea 1"
              onChange={(e) => setTarea(e.target.value)}
              value={tarea}
            ></input>
            <button className="btn btn-outline-dark" type="submit">
              Agregar
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Tareas;
