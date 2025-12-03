import { Outlet, Link, useLocation } from "react-router-dom";
import { Container, Stack, Button, Toolbar, Box } from "@mui/material";
import { MainContainer, Title, MenuButton, OptionsContainer, ContentWrapper } from "./MainLayout.styles";
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const MainLayout = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <MainContainer>
            {/* Hero Section */}
            <Container sx={OptionsContainer}>
                <Title>Task Management</Title>
                
                {/* Navigation Menu */}
                <Stack 
                    spacing={2} 
                    direction="row" 
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: 2
                    }}
                >
                    <Button
                        component={Link}
                        to='/'
                        startIcon={<HomeIcon />}
                        variant={isActive('/') ? "contained" : "outlined"}
                        sx={MenuButton}
                    >
                        Home
                    </Button>
                    <Button
                        component={Link}
                        to='/tasks'
                        startIcon={<FormatListBulletedIcon />}
                        variant={isActive('/tasks') ? "contained" : "outlined"}
                        sx={MenuButton}
                    >
                        Tasks
                    </Button>
                    <Button
                        component={Link}
                        to='/create'
                        startIcon={<AddCircleOutlineIcon />}
                        variant={isActive('/create') ? "contained" : "outlined"}
                        sx={MenuButton}
                    >
                        New Task
                    </Button>
                </Stack>
            </Container>

            {/* Content Area */}
            <Container sx={OptionsContainer}>
                <Box sx={ContentWrapper}>
                    <Outlet />
                </Box>
            </Container>
        </MainContainer>
    )
}