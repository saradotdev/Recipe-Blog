import { useState } from "react";
import {
    AppBar,
    styled,
    Toolbar,
    Box,
    Typography,
    TextField,
    Drawer,
    List,
    ListItem,
    ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    });

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

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <AppBar color="default" position="sticky" elevation={0}>
            <StyledToolbar>
                <Box flex={{ xs: 25, md: 1 }}>
                    <Typography
                        variant="h4"
                        color={"tomato"}
                        sx={{ fontFamily: "Dancing Script, cursive" }}
                    >
                        Recipe Blog
                    </Typography>
                </Box>
                <MenuBox flex={1} sx={{ display: { xs: "none", md: "flex" } }}>
                    {MenuItems.map((item) => {
                        return (
                            <Typography
                                variant="body2"
                                sx={{ fontFamily: "Montserrat, sans-serif" }}
                            >
                                {item.Name}
                            </Typography>
                        );
                    })}
                </MenuBox>
                <Box flex={1}>
                    <TextField
                        sx={{
                            display: { xs: "none", md: "flex" },
                            fontFamily: "Montserrat, sans-serif",
                        }}
                        color="warning"
                        label="Search Here!"
                        variant="standard"
                    />
                    <MenuIcon
                        sx={{
                            display: { xs: "flex", md: "none" },
                            cursor: "pointer",
                        }}
                        onClick={() => setOpenMenu(!openMenu)}
                    />
                </Box>
            </StyledToolbar>
            <Drawer
                anchor={"top"}
                open={openMenu}
                onClose={() => setOpenMenu(!openMenu)}
            >
                <List>
                    <ListItem sx={{ fontFamily: "Montserrat, sans-serif" }}>
                        {MenuItems.map((item) => {
                            return <ListItemButton>{item.Name}</ListItemButton>;
                        })}
                    </ListItem>
                </List>
                <TextField
                    sx={{
                        display: { xs: "flex", md: "none" },
                        fontFamily: "Montserrat, sans-serif",
                    }}
                    color="warning"
                    label="Search Here!"
                    variant="outlined"
                />
            </Drawer>
        </AppBar>
    );
};

export default Navbar;
