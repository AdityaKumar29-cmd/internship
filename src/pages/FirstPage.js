import React from "react"
import { Box, Typography, Button, Toolbar, AppBar, ListItem } from "@mui/material"
import deskwall from '../Images/topwallpaper.png';
import logo from '../Images/Vector.png';
import Eclipse from './Ellipse 180.png'
import ServiceSlide from "../pages2/Servicesoffer";
import Trust from "../pages3/Trust";
import LogoBanner from "../pages4/Logo";
import Customer from "../pages5/Cutomers";
import CaseStudy from "../pages6/CaseStudies";
import GreatSoftware from "../pages7/GreatSoftware";

const FirstPage = () => {
    return (
        <Box sx={{ height: 'auto', display: 'flex', flexDirection: 'column', zIndex: 3,margin:'0px' }}>
            {/* Header */}
            <AppBar>
                <Toolbar sx={{ height: '80px', backgroundColor: 'rgba(42, 41, 39, 1)' }}>
                    <img src={logo} alt="Description" />


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
            <Box sx={{ height: '74vh', backgroundColor: 'whitesmoke', color: 'black', padding: '20px', display: "flex", flexDirection: 'row', justifyContent: 'space-between' ,marginTop:"80px",zIndex:'2'}}>
                <Box>

                    <Typography sx={{  textAlign: 'left',flexDirection:'row',display:'flex', marginTop: '30px' }}>

                        <Typography >
                            <Typography variant="h3">Great Product is </Typography>
                            <Typography variant="h3"></Typography>
                            <Typography variant="h3">built by great teams</Typography>
                        <Typography variant='subtitle1' textAlign={'left'} sx={{ marginTop: '50px' }}>
                            We help build and manage a team of world-class developers to bring your vision to life
                        </Typography>
                            </Typography>

                    </Typography>
                       
                            <Button
                        variant='contained'
                        sx={{
                            backgroundColor: '#3D63EA',
                            position: 'relative',
                            top: '30px',
                            borderRadius: '2px',
                            marginRight: '10px',
                            cursor: 'pointer'
                        }}
                    >
                        Let's get started
                    </Button>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                   
                </Box>
                <img src={deskwall} alt="Description" />

            </Box>
                <Box display={'flex'} flexDirection={'row'} sx={{position:'relative',bottom:'40px',marginLeft:'50%'  }}>
                    {/* left image */}
                    <img style={{zIndex:'3',height:'100px',width:'100px'}} src={Eclipse}  alt="Description" />
               
                </Box>
                    <Box zIndex={4} sx={{margin:'none',position:'relative',bottom:'100px'}}>
                        <ServiceSlide/>
                        <Trust/>
                        <LogoBanner/>
                        <Customer/>
                        <CaseStudy/>
                        <GreatSoftware/>
                    </Box>

        </Box>
    )
}

export default FirstPage