import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Grid, TextField } from "@mui/material";
import axios from "axios";
import PostCard from "../post/PostCard";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: 600,
    overflow: "auto",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function SearchPost() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [postSearch, setPostSearch] = useState([]);
    const [lookup, setLookup] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_API_URL}/api/blogs/`,
                );
                setPostSearch(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <TextField
                sx={{
                    display: { xs: "none", md: "flex" },
                }}
                onClick={handleOpen}
                color="warning"
                label="Search Here!"
                variant="standard"
                InputLabelProps={{
                    sx: {
                        fontWeight: "bold",
                        fontFamily: "Montserrat, sans-serif",
                    },
                }}
            />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TextField
                        sx={{
                            display: { xs: "none", md: "flex" },
                        }}
                        color="warning"
                        label="Search Here!"
                        variant="standard"
                        InputLabelProps={{
                            sx: {
                                fontWeight: "bold",
                                fontFamily: "Montserrat, sans-serif",
                            },
                        }}
                        onChange={(event) => setLookup(event.target.value)}
                    />
                    {postSearch
                        .filter((search) =>
                            search.title.toLowerCase().includes(lookup),
                        )
                        .map((search) =>
                            lookup.length > 0 ? (
                                <Grid item xs>
                                    <PostCard
                                        title={search.title}
                                        excerpt={search.excerpt}
                                        image={search.image}
                                        blogHref={`/details/${search.slug}`}
                                    />
                                </Grid>
                            ) : null,
                        )}
                </Box>
            </Modal>
        </div>
    );
}
