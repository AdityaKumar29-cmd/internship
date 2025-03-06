import React from "react";
import { Box, Grid, Typography, Button, Card, CardMedia, IconButton } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Elli from './Ellipse 180.png';
import Video from './Video.png';


const Trust = () => {
  return (
    <Box>
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          top: '100%',
          transform: 'translate(-50%, -50%)', // Centers both horizontally & vertically
          width: 100,
          height: 100,
          backgroundImage: `url(${Elli})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          overflow: 'hidden' // Ensures no overflow beyond the semicircle
        }}
      >
      </Box>

      <Box sx={{ maxWidth: "1400px", mx: "auto", p: 4, }}>
        {/* First Row: Text & Image */}
        <Grid container spacing={3} alignItems="center" mt={3}>
          {/* Left Side - Text Content */}
          <Grid item xs={10} md={6}>
            <Box sx={{ border: "2px solidrgb(248, 250, 252)", p: 3, borderRadius: "8px" }}>
              <Typography variant="h5" fontWeight="bold">
                Leading companies trust us to <span style={{ fontWeight: "900" }}>develop software</span>
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                We <span style={{ backgroundImage: 'linear-gradient(225deg, #F76680 0%,rgb(92, 3, 130) 100%', color: 'transparent', backgroundClip: 'text' }}>add development capacity</span> to tech teams. Our value isn’t limited to building teams but is equally distributed across the project lifecycle.
                We are a custom software development company that guarantees the successful delivery of your project.
              </Typography>
              <Button sx={{ mt: 4, textTransform: "none" }} endIcon={<PlayCircleIcon />}>
                See more Information
              </Button>
            </Box>
          </Grid>

          {/* Right Side - Image with Play Button */}
          <Grid item xs={12} md={6}>
            <Card sx={{ position: "relative", border: "2px solidrgb(237, 240, 243)" }}>
              <CardMedia
                component="img"
                height="250"
                image={Video}
                alt="Team working"
              />
              <IconButton
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#fff",
                  background: "rgba(0,0,0,0.5)",
                  "&:hover": { background: "rgba(0,0,0,0.7)" },
                }}
              >
                <PlayCircleIcon sx={{ fontSize: 50 }} />
              </IconButton>
            </Card>
          </Grid>
        </Grid>

        {/* Second Section: Meet the People */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h6" color="text.secondary">
            Meet the People
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            We are Working With
          </Typography>
        </Box>


        
      </Box>
    </Box>
  );
};

export default Trust;