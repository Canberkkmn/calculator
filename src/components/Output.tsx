import { useState } from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

export default function Output() {
    const [output, setOutput] = useState<number>(0);

    const handleOutput = (value: number) => {
        setOutput(value);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'end',
                width: '100%',
                backgroundColor: 'grey',
            }}
        >
            <Typography
                variant="h6"
                component="div"
                sx={{
                    padding: '10px',
                }}
            >
                {output}
            </Typography>
        </Box>
    );
}
