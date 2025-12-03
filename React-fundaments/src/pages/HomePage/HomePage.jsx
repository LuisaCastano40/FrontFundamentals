import { SKILL_CATEGORIES } from '../../constants/categories';
import {
    Typography,
    Box,
    Paper,
    Grid,
    Chip
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import * as styles from './HomePage.styles';

/**
 * HOME PAGE

  Welcome page displaying project skills and technologies.
  Features a modern card-based layout with skill categories.
 */

const HomePage = () => {

    return (
        <Box>
            {/* Header Section */}
            <Box sx={styles.headerSection}>
                <Typography variant="h3" sx={styles.mainTitle}>
                    Welcome to Task Manager
                </Typography>
                <Typography variant="body1" sx={styles.subtitle}>
                    A modern React application showcasing best practices in frontend development
                </Typography>
            </Box>

            {/* Skills Grid */}
            <Grid container spacing={2} sx={{ mt: 2 }}>
                {SKILL_CATEGORIES.map((category, index) => (
                    <Grid item key={index} >
                        <Paper sx={styles.skillCard}>
                            <Box sx={styles.cardHeader}>
                                <Typography variant="h6" sx={styles.categoryTitle}>
                                    {category.title}
                                </Typography>
                            </Box>

                            <Box sx={styles.skillsList}>
                                {category.skills.map((skill, idx) => (
                                    <Box key={idx} sx={styles.skillItem}>
                                        <CheckCircleOutlineIcon 
                                            sx={styles.checkIcon} 
                                        />
                                        <Typography variant="body2">
                                            {skill}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            {/* Footer Info */}
            <Box sx={styles.footerInfo}>
                <Chip 
                    label="Built with React + Redux + Material UI" 
                    sx={styles.techChip}
                />
            </Box>
        </Box>
    );
};

export default HomePage;