import React from "react";
import { Box } from "@mui/material";
import Logo from "./Sampath.png";
import Logo2 from "./kuch bhi.png";
import Logo3 from "./Adc.png";
import Logo4 from "./PJC.png";
import Logo5 from "./Click.png";
import Logo6 from "./Tech.png";
import Logo7 from "./brock.png";
import Elli2 from './Ellipse 180.png';



const LogoBanner = () => {
  return (
    <Box>
         <Box  sx={{
          position: 'absolute',
          left: '56%',
          transform: 'translate(-30%, -100%)', 
          width: 100,
          height: 50,
          backgroundImage: `url(${Elli2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          overflow: 'hidden'
        }}>

    </Box>
      <Box sx={{ border: "1px solid #E7DAED" }}> </Box>
      <Box display="flex" flexDirection="row" justifyContent={'space-between'} alignContent={"center"}>
        <Box><img src={Logo}></img></Box>
        <Box><img src={Logo2}></img></Box>
        <Box><img src={Logo3}></img></Box>
        <Box><img src={Logo4}></img></Box>
        <Box><img src={Logo5}></img></Box>
        <Box><img src={Logo6}></img></Box>
        <Box><img src={Logo7}></img></Box>
      </Box>
 
    </Box>
  );
};

export default LogoBanner;