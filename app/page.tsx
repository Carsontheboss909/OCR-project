'use client';
import * as React from 'react';
import Canvas from './components/canvas';
import {Box, Paper, Typography, Button, Stack, useMediaQuery} from '@mui/material/';
import { blueGrey } from '@mui/material/colors';
import styles from './page.module.css';

export default function Home() {
    const isMobile = useMediaQuery('(max-width: 700px)');

    return (
        <Box sx={{width: '98%', height: '100%'}} margin={'1%'} justifyContent="center">
        <Stack spacing={3} sx={{height: '95%'}} padding={1} justifyContent="center">
            <Paper sx={{backgroundColor: blueGrey[300] }} elevation={10}>
                <Typography variant="h2" margin={2} className={styles.heading}>
                    ECS 170 Optical Character Recognition Demo
                </Typography>
            </Paper>
            <Stack direction={isMobile ? 'column' : 'row'} spacing={2} sx={{height: '100%'}} justifyContent="center">
                <Canvas />
                <Paper sx={{backgroundColor: blueGrey[300], height: '100%', padding: (isMobile ? 0 : 2), width: (isMobile ? '98%' : '50%')}} elevation={5}>
                <div style={isMobile ? { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' } : {}}>
                    <Button variant='contained' sx={{margin: '10px', backgroundColor: blueGrey[700], '&:hover': {backgroundColor: blueGrey[900]}}}>
                        Predict
                    </Button>
                    <Typography variant="h5" sx={{margin: '10px'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est debitis vel soluta minima aliquam architecto aliquid voluptatem esse quibusdam excepturi repellendus culpa accusantium officia, assumenda inventore eligendi laudantium adipisci dignissimos.
                    </Typography>
                </div>
                </Paper>
            </Stack>
        </Stack>
        </Box>
    );
}