import Hero from "../../components/hero/Hero";
import { Box, Container, Stack } from "@mui/material";
import Post from "../../components/post/Post";

const Main = () => {
    return (
        <>
            <Hero />
            <Container>
                <Stack direction={"row"} spacing={1} mt={3}>
                    <Box flex={3}>
                        <Post />
                    </Box>
                </Stack>
            </Container>
        </>
    );
};

export default Main;
