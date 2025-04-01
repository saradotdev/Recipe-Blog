import {
    Box,
    CardMedia,
    Container,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Details = () => {
    const [blogDetails, setBlogDetails] = useState([]);
    const [steps, setSteps] = useState("");

    let { slug } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_API_URL}/api/blogs/${slug}`,
                );
                setBlogDetails(response.data);
                setSteps(response.data.content);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <Container>
            <Typography
                variant="h4"
                align="center"
                mt={3}
                sx={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                }}
            >
                {blogDetails.title}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CardMedia
                    sx={{ height: "500px", width: "500px" }}
                    component="img"
                    image={blogDetails.image}
                    alt={blogDetails.title}
                />
            </Box>
            <List>
                {steps.split(".").map((step) => (
                    <ListItemButton>
                        <ListItemIcon>
                            <DoubleArrowIcon />
                        </ListItemIcon>
                        <ListItemText primary={step} />
                    </ListItemButton>
                ))}
            </List>
        </Container>
    );
};

export default Details;
