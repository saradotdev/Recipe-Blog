import { Box, Stack, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Category = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_API_URL}/api/category/`,
                );
                setCategory(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

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
            {category.map((category) => (
                <CardBox>
                    <StyledCard
                        sx={{ backgroundImage: `url(${category.image})` }}
                    />
                    <StyledTypography>{category.name}</StyledTypography>
                </CardBox>
            ))}
        </Stack>
    );
};

export default Category;
