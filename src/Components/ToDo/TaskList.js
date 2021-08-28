import React from 'react';
import { Grid,Typography, List } from '@material-ui/core';

// Componente
import { TaskItem } from './TaskItem'

const TaskList = (props) => {
    // console.log('TaskList PROPS', props);
    console.log('TaskList renderizado');
    const tasksList = [...props.tasksToRender];
    
    const setTaskDone = (indexToSetDone) => {
        console.log('Se llamo desde el elemento hijo a taskList para updatear este elemento', 
                    indexToSetDone);
        props.taskToSetDone(indexToSetDone);
    }
    
    
    
    
    return (
        <Grid item xs={12} md={8}>
            <Typography variant="h6">
                Lista de elementos a comprar
            </Typography>
            <div >
            <List>
                {
                    tasksList.map((task, index) => {
                        return (
                            <TaskItem 
                                key={index} 
                                taskToRender={task} 
                                deleteTask={() => props.taskToDelete(index)} 
                                setDone={() => setTaskDone(index)}
                            />
                        )
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