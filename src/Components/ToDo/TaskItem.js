import React from 'react';
import {ListItem, ListItemAvatar, 
    Avatar, ListItemText, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';

export function TaskItem(props) {
    console.log(props.taskToRender);
    return (
        <ListItem>
            <ListItemAvatar>
            <Avatar className="dgblue">
                <LoyaltyIcon />
            </Avatar>
            </ListItemAvatar>
                                   
            <ListItemText primary={props.taskToRender.description}
                          className={props.taskToRender.done ? "done" : ""}
            />
            <ListItemSecondaryAction>
            {
                props.taskToRender.done === true 
                ?   ''
                :   <IconButton edge="end" aria-label="delete">
                        <DoneIcon color="primary"/>
                    </IconButton>
            }
            <IconButton edge="end" aria-label="delete">
                <DeleteIcon color="secondary" onClick={props.deleteTask} />
            </IconButton>
            <IconButton edge="end" aria-label="delete">
                <EditIcon color="primary"/>
            </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}