import {
    Box,
    CardMedia,
    Container,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import Category from "../../components/category/Category";
import burger from "../../assets/burger1.jpg";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const Details = () => {
    return (
        <Container>
            <Category />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CardMedia
                    sx={{ height: "500px", width: "500px" }}
                    component="img"
                    image={burger}
                    alt="burger"
                />
            </Box>
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <DoubleArrowIcon />
                    </ListItemIcon>
                    <ListItemText primary="Meat" />
                </ListItemButton>
            </List>
        </Container>
    );
};

export default Details;
