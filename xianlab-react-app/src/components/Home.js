import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Button} from '@mui/material';
import Stack from "@mui/material/Stack";

function Home() {
    const navigate = useNavigate();

    return (<div className="home-page">
            <h1>多功能工具集</h1>
            <Stack direction="column" spacing={2}>
                <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    onClick={() => navigate('/StringConverter')}
                    className="tool-button"
                >
                    字符串转换工具
                </Button>

                {/* 可以添加更多工具按钮 */}
                <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    className="tool-button"
                >
                    其他工具1 (待实现)
                </Button>

                <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    className="tool-button"
                >
                    其他工具2 (待实现)
                </Button>

            </Stack>
        </div>);
}

export default Home;