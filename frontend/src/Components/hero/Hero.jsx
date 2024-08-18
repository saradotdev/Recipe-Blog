import { Container, Grid, Box, Typography, styled } from "@mui/material";
import burger from "../../assets/burger1.jpg";
import Category from "../../components/category/Category";

const Hero = () => {
    const StyledCard = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "10px",
        cursor: "pointer",
        [theme.breakpoints.up("md")]: {
            height: 400,
        },
        [theme.breakpoints.down("md")]: {
            height: 200,
        },
        "&:hover": {
            opacity: 0.8,
            boxSizing: "borderBox",
            zIndex: 1,
            transition: "all 0.45s ease",
        },
    }));

    const StyledTypography = styled(Typography)({
        textAlign: "center",
        color: "white",
        backgroundColor: "tomato",
        fontFamily: "Montserrat, sans-serif",
        fontSize: 20,
        fontWeight: 500,
    });

    const StyledWrapper = styled(Box)(({ theme }) => ({
        [theme.breakpoints.up("md")]: {
            paddingTop: "140%",
        },
        [theme.breakpoints.down("md")]: {
            paddingTop: "40%",
        },
        width: "80%",
    }));

    return (
        <Container sx={{ marginTop: 2 }}>
            {/* an mui grid container has 12 columns.
            for medium screens, we want 4 images in 1 row, so we give 12 / 4 = 3 columns to each image.
            for extra small screens, we want 2 images in 1 row, so we give 12 / 2 = 6 columns to each image. */}
            <Grid container direction={"row"} columnSpacing={2} rowSpacing={2}>
                <Grid item md={3} xs={6}>
                    <StyledCard sx={{ backgroundImage: `url(${burger})` }}>
                        <StyledWrapper>
                            <StyledTypography>Burger</StyledTypography>
                        </StyledWrapper>
                    </StyledCard>
                </Grid>
                <Grid item md={3} xs={6}>
                    <StyledCard sx={{ backgroundImage: `url(${burger})` }}>
                        <StyledWrapper>
                            <StyledTypography>Burger</StyledTypography>
                        </StyledWrapper>
                    </StyledCard>
                </Grid>
                <Grid item md={3} xs={6}>
                    <StyledCard sx={{ backgroundImage: `url(${burger})` }}>
                        <StyledWrapper>
                            <StyledTypography>Burger</StyledTypography>
                        </StyledWrapper>
                    </StyledCard>
                </Grid>
                <Grid item md={3} xs={6}>
                    <StyledCard sx={{ backgroundImage: `url(${burger})` }}>
                        <StyledWrapper>
                            <StyledTypography>Burger</StyledTypography>
                        </StyledWrapper>
                    </StyledCard>
                </Grid>
            </Grid>

            <Category />
        </Container>
    );
};

export default Hero;
