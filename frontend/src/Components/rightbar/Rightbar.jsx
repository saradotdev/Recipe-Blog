import { Box, CardMedia, Typography } from "@mui/material";
import burger from "../../assets/burger1.jpg";

const Rightbar = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <Typography
                variant="h5"
                align="center"
                mt={5}
                sx={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 500,
                }}
            >
                This is me
            </Typography>
            <CardMedia
                component={"img"}
                height="300px"
                image={burger}
                alt="burger image"
                sx={{
                    width: "400px",
                    cursor: "pointer",
                    "&:hover": {
                        opacity: 0.8,
                        boxSizing: "border-box",
                        zIndex: 1,
                        transition: "all 0.5s ease",
                    },
                }}
            />
            <Typography
                align="left"
                variant="body1"
                sx={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 500,
                }}
            >
                I love to read.
            </Typography>
            <Typography
                align="left"
                variant="body1"
                sx={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 500,
                }}
            >
                Don't forget to subscribe!
                <br />
                <a href="google.com">Read More</a>
            </Typography>
        </Box>
    );
};

export default Rightbar;
