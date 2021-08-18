import React from 'react';
import { Grid,Typography, List } from '@material-ui/core';
// import FolderIcon from '@material-ui/icons/Folder';


// Componente
import { TaskItem } from './TaskItem'



const TaskList = (props) => {

    // const handleDeleteTask = (index) => {
    //     props.taskToDelete(index);
    // }
    // console.log(props.tasksToRender);
    const tasksList = [...props.tasksToRender];
    return (
        <Grid item xs={12} md={8}>
            <Typography variant="h6">
                Lista de elementos a comprar
            </Typography>
            <div >
            <List>
                {
                    tasksList.map((task, index) => {
                        return <TaskItem taskToRender={task} key={index} deleteTask={() => props.taskToDelete(index)} />
                    })
                }
                
            </List>
            </div>
        </Grid>
    );
};

export default TaskList;