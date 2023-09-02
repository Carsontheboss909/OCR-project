'use client';
import * as React from 'react';
import Canvas from './components/canvas';
import { Box, Paper, Typography, Button, Stack, useMediaQuery, createTheme, ThemeProvider } from '@mui/material/';
import { blueGrey } from '@mui/material/colors';
import styles from './page.module.css';

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 700,
            md: 960,
            lg: 1280,
            xl: 1920,
        }
    },
    palette: {
        primary: {
            main: blueGrey[700],
            light: blueGrey[300],
            dark: blueGrey[900],
        },
    },
});

export default function Home() {
    const isMobile = useMediaQuery('(max-width: 700px)');
    const primary_color = theme.palette.primary;
    return (
        <ThemeProvider theme={theme}>
        {/* TODO: maybe refactor stylings to css module */}
        <Box sx={{width: '98%', height: '100%'}} margin={'1%'} justifyContent="center">
        <Stack spacing={3} sx={{height: '95%'}} padding={1} justifyContent="center">
            <Paper sx={{backgroundColor: primary_color.light }} elevation={10}>
                <Typography variant="h2" margin={2} className={styles.heading}>
                    ECS 170 Optical Character Recognition Demo
                </Typography>
            </Paper>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{height: '100%'}} justifyContent="center">
                <Canvas xs={320} sm={400} />
                <Paper sx={{backgroundColor: primary_color.light, height: '100%', padding:{ xs: 0, sm: 2 }, width: {xs: '98%', sm: '50%'}}} elevation={5}>
                <div style={isMobile ? { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' } : {}}>
                    {/* TODO: implement predict button and text */}
                    <Button variant='contained' sx={{margin: '10px', backgroundColor: theme.palette.primary.main, '&:hover': {backgroundColor: blueGrey[900]}}}>
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
        </ThemeProvider>
    );
}