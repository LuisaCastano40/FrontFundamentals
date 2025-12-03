import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTask } from '../../features/tasks/tasksSlice';
import {
    Typography,
    Box,
    Card,
    CardContent,
    TextField,
    Button,
    Divider
} from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import * as styles from './CreateTaskPage.styles';

/**
 * CREATE TASK PAGE
 * 
 * Form to create new tasks with title and description.
 * Includes validation and smooth user experience.
 */

const CreateTaskPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Form state
    const [formData, setFormData] = useState({
        title: '',
        description: ''
    });

    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.title.trim()) {
            newErrors.title = 'Title is required';
        } else if (formData.title.trim().length < 3) {
            newErrors.title = 'Title must be at least 3 characters';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Submit form
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            dispatch(addTask({
                title: formData.title.trim(),
                description: formData.description.trim()
            }));
            navigate('/tasks');
        }
    };

    return (
        <Box sx={styles.container}>
            {/* Page Header */}
            <Box sx={styles.header}>
                <AddTaskIcon sx={styles.headerIcon} />
                <Typography variant="h4" sx={styles.pageTitle}>
                    Create New Task
                </Typography>
            </Box>

            <Divider sx={{ mb: 4 }} />

            {/* Form Card */}
            <Card sx={styles.formCard}>
                <CardContent sx={styles.cardContent}>
                    <form onSubmit={handleSubmit}>
                        {/* Title Field */}
                        <TextField
                            fullWidth
                            label="Task Title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            error={!!errors.title}
                            helperText={errors.title}
                            placeholder="e.g., Complete project documentation"
                            sx={styles.textField}
                            InputProps={{
                                sx: styles.input
                            }}
                        />

                        {/* Description Field */}
                        <TextField
                            fullWidth
                            label="Description (Optional)"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            multiline
                            rows={4}
                            placeholder="Add more details about this task..."
                            sx={styles.textField}
                            InputProps={{
                                sx: styles.input
                            }}
                        />

                        {/* Action Buttons */}
                        <Box sx={styles.buttonContainer}>
                            <Button
                                type="submit"
                                variant="contained"
                                startIcon={<SaveIcon />}
                                sx={styles.submitButton}
                            >
                                Create Task
                            </Button>

                            <Button
                                variant="outlined"
                                startIcon={<CancelIcon />}
                                onClick={() => navigate('/tasks')}
                                sx={styles.cancelButton}
                            >
                                Cancel
                            </Button>
                        </Box>
                    </form>
                </CardContent>
            </Card>

            {/* Helper Text */}
            <Box sx={styles.helperBox}>
                <Typography variant="body2" sx={styles.helperText}>
                    Tip: Use descriptive titles to easily identify your tasks later
                </Typography>
            </Box>
        </Box>
    );
};

export default CreateTaskPage;