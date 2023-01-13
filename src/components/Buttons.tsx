import { Button, Grid, Paper, styled } from '@mui/material';
import { useEffect, useMemo } from 'react';
import buttonConfig from '../config/button';
import { NumberButtons } from '../types/types';

export default function Buttons() {
    const buttons = useMemo(() => {
        return (
            Object.keys(NumberButtons) as Array<keyof typeof NumberButtons>
        ).map((button) => {
            return (
                <Grid item xs={3} key={button}>
                    <Button
                        variant="contained"
                        sx={{
                            width: '100%',
                            height: '100%',
                            fontSize: '2rem',
                        }}
                    >
                        {NumberButtons[button]}
                    </Button>
                </Grid>
            );
        });
    }, []);

    return (
        <Grid container spacing={2}>
            {buttons}
        </Grid>
    );
}
