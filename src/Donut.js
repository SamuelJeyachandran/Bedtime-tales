import { Box } from '@mui/material';
import React from 'react'

const Donut = () => {
    return (
        <Box sx={{my:3}}>
            <a href="https://www.buymeacoffee.com/samueljey" target="_blank">
                <img
                    src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Donut"
                    style={{height: '45px'}} />
            </a>
        </Box>
    )
}
export default Donut;