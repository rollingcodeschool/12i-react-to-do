import React, { Fragment, useState } from "react";
import Button from '@material-ui/core/Button';

const AddTask = (props) => {
  // nombre del state, nombre de la funcion
  const [tarea, setTarea] = useState("");
  const handleSubmit = (e) => {
    // prevenir que por defecto recargue para no perder info
    e.preventDefault();
    // Llamo a la propiedad compartida con mi componente padre que es una funcióna través de props
    props.handleAddTaskParent(tarea);
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

export default AddTask;
