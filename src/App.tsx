import { Paper } from '@mui/material';
import Bar from './components/Bar';
import Buttons from './components/Buttons';
import Output from './components/Output';

function App() {
    return (
        <Paper
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Bar />
            <Output />
            <Buttons />
        </Paper>
    );
}

export default App;
