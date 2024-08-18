import Hero from "../../components/hero/Hero";
import { Box, Container, Stack } from "@mui/material";
import Post from "../../components/post/Post";
import Rightbar from "../../components/rightbar/Rightbar";

const Main = () => {
    return (
        <>
            <Hero />
            <Container>
                <Stack direction={"row"} spacing={1} mt={3}>
                    <Box flex={3}>
                        <Post />
                    </Box>
                    <Box flex={1} display={{ xs: "none", md: "block" }}>
                        <Rightbar />
                    </Box>
                </Stack>
            </Container>
        </>
    );
};

export default Main;
