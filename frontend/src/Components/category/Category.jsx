import { Box, Stack, styled, Typography } from "@mui/material";
import burger from "../../assets/burger1.jpg";

const Category = () => {
    const StyledCard = styled(Box)({
        display: "flex",
        justifyContent: "center",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "100%",
        cursor: "pointer",
        overflow: "hidden",
        width: "100px",
        height: 100,
        "&:hover": {
            opacity: 0.8,
            boxSizing: "borderBox",
            zIndex: 1,
            transition: "all 0.45s ease",
        },
    });

    const StyledTypography = styled(Typography)({
        textAlign: "center",
        color: "black",
        fontFamily: "Montserrat, sans-serif",
        fontSize: 20,
        fontWeight: 500,
    });

    const CardBox = styled(Box)({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    });

    return (
        <Stack
            Container
            direction={"row"}
            margin={4}
            spacing={4}
            sx={{ overflow: "auto", justifyContent: { md: "center" } }}
        >
            <CardBox>
                <StyledCard sx={{ backgroundImage: `url(${burger})` }} />
                <StyledTypography>Burger</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard sx={{ backgroundImage: `url(${burger})` }} />
                <StyledTypography>Burger</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard sx={{ backgroundImage: `url(${burger})` }} />
                <StyledTypography>Burger</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard sx={{ backgroundImage: `url(${burger})` }} />
                <StyledTypography>Burger</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard sx={{ backgroundImage: `url(${burger})` }} />
                <StyledTypography>Burger</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard sx={{ backgroundImage: `url(${burger})` }} />
                <StyledTypography>Burger</StyledTypography>
            </CardBox>
        </Stack>
    );
};

export default Category;
