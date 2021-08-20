import React from 'react';
import { Grid,Typography, List } from '@material-ui/core';

// Componente
import { TaskItem } from './TaskItem'



const TaskList = (props) => {
    console.log('TaskList', props);
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
                        return <TaskItem taskToRender={task} 
                                         key={index} 
                                         deleteTask={() => props.taskToDelete(index)} />
                    })
                }
                
            </List>
            </div>
        </Grid>
    );
};

export default TaskList;
// task = "Hacer algo"
// task = {
//     description: "Hacer algo",
//     status: "Done"
// }