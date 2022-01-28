import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MyAvatar from './Avatar';





export default function Home() {
    return (
        <Box minHeight={'100vh'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}
            sx={{
                background: 'linear-gradient(to left top, #522f86, #9360df)'
            }}
        >
            <Container maxWidth={'md'}>
                <Stack direction='row' spacing={2} alignItems={'center'} py={3}>
                    <Box bgcolor='#fff' borderRadius={50} width={16} height={16}></Box>
                    <Box bgcolor='#fff' borderRadius={50} width={16} height={16}></Box>
                    <Box bgcolor='#fff' borderRadius={50} width={16} height={16}></Box>
                </Stack>
                <Paper elevation={8} sx={{ p: 4, borderRadius: 4, height: 'fit-content', background: '#0a0a0c' }}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box position='relative' flexGrow={1} mt={4} mb={4}>
                                <MyAvatar
                                    src='/assets/avatar 1.jpg'
                                    alt={'avatar A'}
                                    sx={{
                                        // position: 'absolute',
                                        // top: 0,
                                        // left: 0,
                                        zIndex: 1
                                    }} />
                                <MyAvatar
                                    src='/assets/avatar 2.jpg'
                                    alt={'avatar b'}
                                    sx={{
                                        position: 'absolute',
                                        top: 72,
                                        left: 80,
                                        zIndex: 0
                                    }} />
                            </Box>

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box flexGrow={1}>
                                <Stack direction='row' spacing={2} alignItems={'center'} py={4}>
                                    <Box bgcolor='red' borderRadius={50} width={16} height={16}></Box>
                                    <Typography>Ao vivo</Typography>
                                </Stack>
                                <Typography variant='h2' fontWeight={'bold'} lineHeight={.7} >START 2022</Typography>
                                <Typography variant='h6' gutterBottom>É hora de mudar de fase</Typography>

                                <Box mt={2} borderRadius={2} bgcolor={'rgba(255, 255, 255, .1)'} px={2} py={1} width={'fit-content'}>
                                    <Typography variant='subtitle2'>Quarta-feira 13/01 | 15h</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <br />
                    <br />
                    <br />
                </Paper>
            </Container>

        </Box>

    );
}
