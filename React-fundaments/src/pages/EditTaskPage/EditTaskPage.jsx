import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateTask } from '../../features/tasks/tasksSlice';
import {
    Typography,
    Box,
    Card,
    CardContent,
    TextField,
    Button,
    Divider,
    MenuItem
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import * as styles from './EditTaskPage.styles';

/**
 * EDIT TASK PAGE
 
    Allows editing existing tasks with pre-filled form data.
    Includes status selection and form validation.
 */

const EditTaskPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Find task in Redux store
    const task = useSelector(state =>
        state.tasks.items.find(t => t.id === parseInt(id))
    );

    // Form state
    const [formData, setFormData] = useState({
        title: task?.title || '',
        description: task?.description || '',
        status: task?.status || 'Pendiente'
    });

    const [errors, setErrors] = useState({});

    // Status options with icons
    const statusOptions = [
        { value: 'Pendiente', label: 'Pendiente' },
        { value: 'En Progreso', label: 'En Progreso' },
        { value: 'Completada', label: 'Completada' }
    ];

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
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
            dispatch(updateTask({
                id: parseInt(id),
                title: formData.title.trim(),
                description: formData.description.trim(),
                status: formData.status
            }));
            navigate('/tasks');
        }
    };

    // Task not found
    if (!task) {
        return (
            <Box sx={styles.container}>
                <Box sx={styles.errorContainer}>
                    <Typography variant="h4" sx={styles.errorTitle}>
                        Task Not Found
                    </Typography>
                    <Typography variant="body1" sx={styles.errorText}>
                        The task you're looking for doesn't exist or has been deleted.
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() => navigate('/tasks')}
                        sx={styles.backButton}
                    >
                        Back to Tasks
                    </Button>
                </Box>
            </Box>
        );
    }

    return (
        <Box sx={styles.container}>
            {/* Page Header */}
            <Box sx={styles.header}>
                <EditIcon sx={styles.headerIcon} />
                <Typography variant="h4" sx={styles.pageTitle}>
                    Edit Task
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
                            sx={styles.textField}
                           
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
                            sx={styles.textField}
                        />

                        {/* Status Field */}
                        <TextField
                            fullWidth
                            select
                            label="Status"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            sx={styles.textField}
                        >
                            {statusOptions.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                        {/* Action Buttons */}
                        <Box sx={styles.buttonContainer}>
                            <Button
                                type="submit"
                                variant="contained"
                                startIcon={<SaveIcon />}
                                sx={styles.submitButton}
                            >
                                Save Changes
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
        </Box>
    );
};

export default EditTaskPage;