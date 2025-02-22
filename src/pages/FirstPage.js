import React from "react"
import { Box, Typography, Button, Toolbar, AppBar, ListItem } from "@mui/material"
const FirstPage = () => {
    return (
        <Box sx={{ height: 'auto', display: 'flex', flexDirection: 'column', zIndex: 3 }}>
            {/* Header */}
            <AppBar>
                <Toolbar sx={{ height: '80px', backgroundColor: 'rgba(42, 41, 39, 1)' }}>
                    <img src="./Images/Vector.png" alt="Description" />


                    <Typography
                        ml={2}
                        sx={{
                            fontSize: '20px',
                            fontWeight: '400'
                        }}
                        variant="h6"
                        component="div"
                    >
                        Ik developers
                    </Typography>

                    {/* list in header */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '50%', ml: 'auto', fontSize: '14.5px' }}>
                        <ListItem sx={{ cursor: 'pointer', transition: ' 0.3s', "&:hover": { color: 'lightpink' } }}>About Us</ListItem>
                        <ListItem sx={{ cursor: 'pointer', transition: ' 0.3s', "&:hover": { color: 'lightblue' } }}>Service</ListItem>
                        <ListItem sx={{ cursor: 'pointer', transition: ' 0.3s', "&:hover": { color: 'lightgreen' } }}>Case Studies</ListItem>
                        <ListItem sx={{ cursor: 'pointer', transition: ' 0.3s', "&:hover": { color: 'lightgreen' } }}>Blog</ListItem>
                        <ListItem sx={{ cursor: 'pointer', transition: ' 0.3s', "&:hover": { color: 'lightgreen' } }}>How it Works</ListItem>
                        <ListItem sx={{ cursor: 'pointer', transition: ' 0.3s', "&:hover": { color: 'lightgreen' } }}>Hire</ListItem>
                    </Box>

                    {/* header Button */}
                    <Button
                        variant='contained'
                        sx={{
                            marginLeft: 'auto',
                            background: 'linear-gradient(225deg, #6675F7 0%, #57007B 100%)',
                            color: 'white' // Ensure text is visible on the gradient background
                        }}
                    >
                        Contact Us
                    </Button>

                </Toolbar>
            </AppBar>

            {/* Desk contents */}
            <Box sx={{ height: '74vh', backgroundColor: 'whitesmoke', color: 'black', padding: '20px' }}>
                <Typography sx={{ width: '30%', marginTop: '6%', marginLeft: '5%', textAlign: 'left' }}>

                    <Typography display={"flex"}>
                        <Typography variant="h3">Product </Typography><Typography variant="h3">Great
                        </Typography></Typography>
                    <Typography variant="h3">  is built by great teams</Typography>


                    <Typography variant='subtitle1' textAlign={'left'} sx={{ marginTop: '20px' }}>
                        We help build and manage a team of world-class developers to bring your vision to life
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Button
                            variant='contained'
                            sx={{
                                backgroundColor: 'orange',
                                position: 'relative',
                                top: '30px',
                                borderRadius: '10px',
                                marginRight: '10px',
                                cursor: 'pointer'
                            }}
                        >
                            Let's get started
                        </Button>

                    </Box>
                </Typography>
                <Box display={'flex'} flexDirection={'row'}>
                    {/* left image */}

                </Box>
            </Box>
        </Box>
    )
}

export default FirstPage