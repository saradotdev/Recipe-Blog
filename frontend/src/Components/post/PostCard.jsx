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

const PostCard = ({ title, excerpt, image, blogHref }) => {
    return (
        <Box mt={3}>
            <Link href={blogHref} sx={{ textDecoration: "none" }}>
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
                            image={image}
                            alt={title}
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
                        <CardContent sx={{ width: "100%" }}>
                            <Typography
                                gutterBottom
                                variant="h4"
                                align="center"
                                sx={{
                                    fontFamily: "Montserrat, sans-serif",
                                    fontWeight: 500,
                                }}
                            >
                                {title}
                            </Typography>
                            <Typography
                                variant="h5"
                                color="text.secondary"
                                sx={{
                                    fontFamily: "Montserrat, sans-serif",
                                    fontWeight: 500,
                                    textAlign: "center",
                                }}
                            >
                                {excerpt}
                            </Typography>
                            <CardActions
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                    width: "100%",
                                }}
                            >
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
