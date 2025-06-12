import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import {ThemeProvider, createTheme} from '@mui/material/styles';
import {CssBaseline} from '@mui/material';

// import StrFormat from "./components/StringConverter";
import StringConverter from "./components/StringConverter"
import Home from "./components/Home";


// 创建自定义主题
const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundImage: '../public/back.jpg)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                    minHeight: '100vh',
                },
            },
        },
    }, palette: {
        primary: {
            main: '#1976d2', // 修改主色调
        },
    },
});

function App() {
    return (<ThemeProvider theme={theme}>
            <CssBaseline/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/StringConverter" element={<StringConverter/>}/>
            </Routes>
        </ThemeProvider>);
}

export default App;
