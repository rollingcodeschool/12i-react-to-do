import { Fragment, useState, useEffect } from 'react';
import { List } from '@material-ui/core';
import { UserCard  } from './Components/Users/UserCard';
// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

//Components
import AddTask from "./Components/ToDo/AddTask"
import TaskList from './Components/ToDo/TaskList';

//Material UI Components
import { Grid, Button } from '@material-ui/core';

const baseUsers = [
  { 
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg"
  },
]


// const getSize = () => window.innerWidth;

function App() {
  // Busco si hay algun elemento listado en el localstorage o sino inicializo el array vacío
  const localTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  const [tasks, setTasks] = useState(localTasks);
  // const [msg, setMsg] = useState('Hola bienvenido');
  const [users, setUsers] = useState(baseUsers);
  const [getusers, setGetUser] = useState(false);
  // const [size, setSize] = useState(getSize());
  
  

  useEffect(() => {
    // const calculateSize = () => {
    //   setSize(getSize());
    // }
    const getUsers = () => {
      const URL = 'https://reqres.in/api/users?page=1';
      fetch(URL)
        .then(response => response.json())
        .then(data => {
          console.log('----------- DATA FROM FETCH', data);
          setUsers(data.data)
      })
      
    }
    // window.addEventListener('resize', calculateSize);
    // console.log('Lógica dentro de useEffect');
    
    getUsers();
    
    return () => 
      console.log('Saneamiento');

  }, [getusers]);

  const obtenerUsuarios = () => {
    setGetUser(users);
  }
  
  console.log('Después de useEffect');
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

  function handleSetDone(index) {
    console.log('Set done task desde APP JS',index);
    const updateTasks = 
        tasks.map((task, i) => {
          if(i === index) {
            task.done = !task.done;
          }

          return task;
        })
      setTasks(updateTasks)
  }

 
  return (

    <Fragment>
     
      
        <Grid container>
          <Grid item xs={12} lg={6}>
            <h1>Tareas</h1>
            <AddTask handleAddTaskParent={handleAddTask}></AddTask>
            <TaskList 
                tasksToRender={tasks} 
                taskToDelete={handleDelTask}
                taskToSetDone={handleSetDone}>
            </TaskList>
          </Grid>




          <Grid item xs={12} lg={6}>
          <Button variant="contained" color="primary" onClick={obtenerUsuarios}>Obtener Usuarios</Button>
            <h1>Lista de usuarios desde API</h1>
            {
               <List>
               {users.map((user, index) => {
                   return (
                    <UserCard userCard={user} key={user.id} />
                   )
                     
                 })
               }
         
               </List>

            }
          </Grid>
        </Grid>
        
      {/* </Container> */}
    </Fragment>
  );
}

export default App;
