import React, {Fragment } from 'react';
import {ListItem, ListItemAvatar, 
    Avatar, ListItemText, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';

export function TaskItem(props) {
    // console.log("Propiedades que llegan al objeto hijo", props);
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
                ? 
                    <span onClick={props.setDone}>
                        <IconButton edge="end" aria-label="delete" >
                            <ClearIcon color="secondary"/>
                        </IconButton>
                    </span>
                    
                : 
                    <span  onClick={props.setDone}>
                        <IconButton edge="end" aria-label="delete">
                            <DoneIcon color="primary"/>
                        </IconButton>
                    </span>
            }
            <span onClick={props.deleteTask}>
                <IconButton edge="end" aria-label="delete">
                    <DeleteIcon color="secondary"  />
                </IconButton>
            </span>
            
            <IconButton edge="end" aria-label="edit" >
                <EditIcon color="primary"/>
            </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}