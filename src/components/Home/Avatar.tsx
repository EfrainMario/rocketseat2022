import React from 'react';
import Box from '@mui/material/Box';
import Avatar, {AvatarProps} from '@mui/material/Avatar';
import { SxProps } from '@mui/material';

export default function MyAvatar(props:AvatarProps) {
    return (
        <Avatar {...props} sx={{border: '6px solid #fff', width: 128, height:128, ...props.sx}}/>
    )
}