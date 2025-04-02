import { Box, Container, Stack, styled, Typography } from "@mui/material";

const Footer = () => {
    const MenuBox = styled(Box)({
        display: "flex",
        gap: 30,
        cursor: "pointer",
    });

    const MenuItems = [
        { Name: "Home", Link: "#" },
        { Name: "Recipes", Link: "#" },
        { Name: "About Us", Link: "#" },
        { Name: "Subscribe", Link: "#" },
    ];

    return (
        <Box sx={{ bgcolor: "tomato", height: "80px" }}>
            <Container>
                <Stack direction="row">
                    <MenuBox flex={4} sx={{ display: "flex" }} mt={3}>
                        {MenuItems.map((item) => {
                            return (
                                <Typography
                                    variant="body2"
                                    color="white"
                                    sx={{
                                        fontFamily: "Montserrat, sans-serif",
                                        fontSize: "20px",
                                        fontWeight: 500
                                    }}
                                >
                                    {item.Name}
                                </Typography>
                            );
                        })}
                    </MenuBox>
                    <Box
                        flex={1}
                        color={"white"}
                        mt={3}
                        sx={{
                            fontFamily: "Montserrat, sans-serif",
                            fontSize: "20px",
                            fontWeight: 500
                        }}
                    >
                        Made by Sara.
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
