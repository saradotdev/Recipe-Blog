import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Link,
    Typography,
} from "@mui/material";
import burger from "../../assets/burger1.jpg";

const PostCard = () => {
    return (
        <Box mt={3}>
            <Link href="/details" sx={{ textDecoration: "none" }}>
                <Card sx={{ borderRadius: "10px", margin: "20px" }}>
                    <Box
                        sx={{
                            display: { xs: "block", sm: "flex", md: "flex" },
                            flexDirection: "row",
                        }}
                    >
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
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h4"
                                align="center"
                                sx={{
                                    fontFamily: "Montserrat, sans-serif",
                                    fontWeight: 500,
                                }}
                            >
                                Yummy Burger
                            </Typography>
                            <Typography
                                variant="h5"
                                color="text.secondary"
                                sx={{
                                    fontFamily: "Montserrat, sans-serif",
                                    fontWeight: 500,
                                }}
                            >
                                This is a burger
                            </Typography>
                            <CardActions>
                                <Button
                                    sx={{
                                        color: "tomato",
                                        fontFamily: "Montserrat, sans-serif",
                                        fontWeight: 700,
                                    }}
                                    size="large"
                                >
                                    Share
                                </Button>
                                <Button
                                    sx={{
                                        color: "tomato",
                                        fontFamily: "Montserrat, sans-serif",
                                        fontWeight: 700,
                                    }}
                                    size="large"
                                >
                                    Learn More
                                </Button>
                            </CardActions>
                        </CardContent>
                    </Box>
                </Card>
            </Link>
        </Box>
    );
};

export default PostCard;
