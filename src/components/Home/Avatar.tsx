import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

export default function MyAvatar(props) {
    return (
        <Avatar {...props} sx={{border: '6px solid #fff', width: 128, height:128, ...props.sx}}/>
    )
}