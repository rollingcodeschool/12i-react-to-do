import { Fragment, useState } from 'react';
import { Container } from '@material-ui/core';

// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

//Components
import AddTask from "./Components/ToDo/AddTask"
import TaskList from './Components/ToDo/TaskList';



function App() {
  // Busco si hay algun elemento listado en el localstorage o sino inicializo el array vacío
  const localTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  const [tasks, setTasks] = useState(localTasks);

  const handleAddTask = (addTask) => {
    console.log(addTask);

    const newTasks = [...tasks];
    newTasks.push({description: addTask, done: false});

    localStorage.setItem('tasks', JSON.stringify(newTasks));
    setTasks(newTasks);
  }

  const handleDelTask = (delTask) => {
    console.log('Llamada al elemento padre', delTask);
    //Forma 1
    const updTask = tasks.filter((el, index) => index !== delTask);
    //Forma 2
    const forEachTask = [];
    tasks.forEach((el, index) => {
      console.log(el, index);
      if(index !== delTask) {
        forEachTask.push(el);
      }
    });


    setTasks(forEachTask);
    localStorage.setItem('tasks', JSON.stringify(forEachTask));

    console.log('updateTask', updTask);
    console.log('forEachTask', forEachTask);
  }
 
  return (
    <Fragment>
      <h1>Tareas</h1>
      <Container maxWidth="md">
        <AddTask handleAddTaskParent={handleAddTask}></AddTask>
        <TaskList tasksToRender={tasks} taskToDelete={handleDelTask}></TaskList>
      </Container>
    </Fragment>
  );
}

export default App;
