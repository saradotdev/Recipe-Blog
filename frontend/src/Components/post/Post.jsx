import { useEffect, useState } from "react";
import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import PostCard from "./PostCard";
import axios from "axios";

const Post = () => {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_API_URL}/api/blogs/`,
                );
                setBlog(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <Box>
            <Typography
                variant="h4"
                align="center"
                sx={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                }}
            >
                Latest Recipes
            </Typography>
            <Grid
                container
                columnSpacing={{ xs: 0, sm: 1, md: 1 }}
                direction={"column"}
            >
                {blog.map((post) => (
                    <Grid item xs>
                        <PostCard
                            title={post.title}
                            excerpt={post.excerpt}
                            image={post.image}
                            blogHref={`/details/${post.slug}`}
                        />
                    </Grid>
                ))}
            </Grid>
            <Stack
                spacing={2}
                mt={4}
                mb={4}
                justifyContent="center"
                alignItems="center"
            >
                <Pagination count={10} color={"warning"}></Pagination>
            </Stack>
        </Box>
    );
};

export default Post;
