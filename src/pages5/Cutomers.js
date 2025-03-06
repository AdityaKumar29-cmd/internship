import { Typography, Box, Card, CardMedia, CardContent } from "@mui/material";
import rome from "./Rome.png";
import romeena from "./Romeena.png"
import Khan from "./Khan.png";
import de from "./De.png";
import Silva from "./Silva.png";
import StarIcon from '@mui/icons-material/Star';

const Customer = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", p: 3 }}>
            <Box sx={{ width: 727, height: 377, gap: 3, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant="h4" >Why Customers Love</Typography>
                <Typography variant="h4" fontWeight="bold">Working with Us</Typography>
                <Typography sx={{ maxWidth: "600px", mt: 2, fontSize: "1rem", color: "gray" }}>
                    Without any doubt, I recommend Alcalie Solutions as one of the best web design
                    and digital marketing agencies. One of the best agencies I've come across so far.
                    Wouldn't hesitate to introduce their work to someone else.
                </Typography>
            </Box>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignContent={"center"} width={"80%"}>
                {/* 1st Card */}
                <Card sx={{ width: "160px", height: "180", gap: "10px" }}>
                    <CardMedia sx={{ marginLeft: "20px", marginTop: "20px" }}>
                        <img
                            style={{
                                border: "2px solid grey",
                                borderRadius: "50%",
                                height: "50px",
                                width: "50px",
                                padding: "10px",

                                // transform: activeSlide === 2 ? 'scale(1.2)' : 'scale(1)',
                                // transition: 'transform 0.3s ease',
                            }}
                            src={rome}

                        />
                    </CardMedia>
                    <Box>
                        <StarIcon sx={{color:"yellow"}}/>
                        <StarIcon sx={{color:"yellow"}}/>
                        <StarIcon sx={{color:"yellow"}}/>
                        <StarIcon sx={{color:"yellow"}}/>
                        <StarIcon sx={{color:"yellow"}}/>
                    </Box>
                    <CardContent>
                        <Typography sx={{ fontSize: "15px",color:" #A0AEC0"}}>Romeena De Silver</Typography>
                        <Typography variant="body2" sx={{ color: " #E2E8F0" }}>Janet Cosmetics</Typography>
                    </CardContent>

                </Card>
                {/* 2nd Card */}
                <Card sx={{ width: "160px", height: "180", gap: "10px" }}>
                    <CardMedia sx={{ marginLeft: "20px", marginTop: "20px" }}>
                        <img
                            style={{
                                border: "2px solid grey",
                                borderRadius: "50%",
                                height: "50px",
                                width: "50px",
                                padding: "10px",
                                // transform: activeSlide === 2 ? 'scale(1.2)' : 'scale(1)',
                                // transition: 'transform 0.3s ease',
                            }}
                            src={romeena}
                        />
                    </CardMedia>
                    <Box>
                        <StarIcon sx={{color:"yellow"}}/>
                        <StarIcon sx={{color:"yellow"}}/>
                        <StarIcon sx={{color:"yellow"}}/>
                        <StarIcon sx={{color:"yellow"}}/>
                        <StarIcon sx={{color:"yellow"}}/>
                    </Box>
                    <CardContent>
                        <Typography sx={{ fontSize: "15px",color:" #A0AEC0"}}>Romeena De Silver</Typography>
                        <Typography variant="body2" sx={{ color: " #CBD5E0" }}>Janet Cosmetics</Typography>
                    </CardContent>
                </Card>
                {/*3rd Card */}
                <Card sx={{ width: "170px", height: "215px", gap: "15px" }}>
                    <CardMedia sx={{ marginLeft: "20px", marginTop: "20px" }}>
                        <img
                            style={{
                                border: "2px solid grey",
                                borderRadius: "50%",
                                height: "50px",
                                width: "50px",
                                padding: "10px",
                                // transform: activeSlide === 2 ? 'scale(1.2)' : 'scale(1)',
                                // transition: 'transform 0.3s ease',
                            }}
                            src={Khan}
                        />
                    </CardMedia>
                    <Box>
                        <StarIcon sx={{color:"yellow"}} />
                        <StarIcon sx={{color:"yellow"}} />
                        <StarIcon sx={{color:"yellow"}} />
                        <StarIcon sx={{color:"yellow"}} />
                        <StarIcon sx={{color:"yellow"}} />
                    </Box>
                    <CardContent>
                        <Typography sx={{fontWeight:"800px",color:" #57007B"}}>Imran Khan</Typography>
                        <Typography variant="body2">Software Engineer</Typography>
                    </CardContent>
                </Card>
                {/* 4th Card */}
                <Card sx={{ width: "160px", height: "180", gap: "10px" }}>
                    <CardMedia sx={{ marginLeft: "20px", marginTop: "20px" }}>
                        <img
                            style={{
                                border: "2px solid grey",
                                borderRadius: "50%",
                                height: "50px",
                                width: "50px",
                                padding: "10px",
                                // transform: activeSlide === 2 ? 'scale(1.2)' : 'scale(1)',
                                // transition: 'transform 0.3s ease',
                            }}
                            src={de}
                        />
                    </CardMedia>
                    <Box>
                        <StarIcon sx={{ color: "yellow" }} />
                        <StarIcon sx={{ color: "yellow" }} />
                        <StarIcon sx={{ color: "yellow" }} />
                        <StarIcon sx={{ color: "yellow" }} />
                        <StarIcon sx={{ color: "yellow" }} />
                    </Box>
                    <CardContent>
                        <Typography sx={{ fontSize: "15px",color:" #A0AEC0" }}>Romeena De Silver</Typography>
                        <Typography variant="body2" sx={{ color: " #CBD5E0" }}> Janet Cosmetics</Typography>
                    </CardContent>

                </Card>
                {/* 5th Card */}
                <Card sx={{ width: "160px", height: "180", gap: "10px" }}>
                    <CardMedia sx={{ marginLeft: "20px", marginTop: "20px" }}>
                        <img
                            style={{
                                border: "2px solid grey",
                                borderRadius: "50%",
                                height: "50px",
                                width: "50px",
                                padding: "10px",
                                // transform: activeSlide === 2 ? 'scale(1.2)' : 'scale(1)',
                                // transition: 'transform 0.3s ease',
                            }}
                            src={Silva}
                        />
                    </CardMedia>
                    <bOX >
                        <StarIcon sx={{ color: "yellow" }} />
                        <StarIcon sx={{ color: "yellow" }} />
                        <StarIcon sx={{ color: "yellow" }} />
                        <StarIcon sx={{ color: "yellow" }} />
                        <StarIcon sx={{ color: "yellow" }} />
                    </bOX>
                    <CardContent>
                        <Typography sx={{ fontSize: "15px",color:" #A0AEC0" }}>Romeena De Silver</Typography>
                        <Typography variant="body2" sx={{ color: " #E2E8F0" }}>Janet Cosmetics</Typography>
                    </CardContent>
                </Card>
            </Box>



        </Box>
    );
};

export default Customer;