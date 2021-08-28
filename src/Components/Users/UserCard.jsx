import React from 'react';
import { ListItem, 
         Divider, 
         ListItemText, 
         ListItemAvatar, 
         Avatar, 
         Typography } from '@material-ui/core'

export function UserCard({ userCard }) {
    console.log(userCard);
    return (
        <ListItem userCard>
            <ListItemAvatar>
                <Avatar alt={userCard.first_name} src={userCard.avatar} />
            </ListItemAvatar>
            <ListItemText
                primary={`${userCard.first_name} ${userCard.last_name}`}
                secondary={
                    <>
                        <Typography
                            component="span"
                            variant="body2"
                            
                            color="textPrimary"
                        >
                            {userCard.email}
                        </Typography>
                        {`ID: ${userCard.id}`}
                    </>
                }
        />
        </ListItem>
         
    )
}