import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import PostCard from "./PostCard";

const Post = () => {
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
                <Grid item xs>
                    <PostCard />
                </Grid>
                <Grid item xs>
                    <PostCard />
                </Grid>
                <Grid item xs>
                    <PostCard />
                </Grid>
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
