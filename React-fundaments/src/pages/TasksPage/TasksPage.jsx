import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteTask } from '../../features/tasks/tasksSlice';
import {
    Typography,
    Box,
    Card,
    CardContent,
    IconButton,
    Chip,
    Divider,
    Fade
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import * as styles from './TasksPage.styles';

/**
 * TASKS PAGE
 
  Displays all tasks with edit/delete functionality.
  Features smooth animations and color-coded status chips.
 */

const TasksPage = () => {
    const tasks = useSelector(state => state.tasks.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Delete task handler
    const handleDelete = (id) => {
        dispatch(deleteTask(id));
    };

    // Navigate to edit page
    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    };

    // Status configuration with colors and labels
    const statusConfig = {
        'Pendiente': { color: 'warning', bgColor: '#fef3c7', textColor: '#92400e' },
        'En Progreso': { color: 'info', bgColor: '#dbeafe', textColor: '#1e40af' },
        'Completada': { color: 'success', bgColor: '#d1fae5', textColor: '#065f46' }
    };

    return (
        <Box sx={styles.container}>
            {/* Page Header */}
            <Box sx={styles.header}>
                <Box sx={styles.headerContent}>
                    <AssignmentIcon sx={styles.headerIcon} />
                    <Typography variant="h4" sx={styles.pageTitle}>
                        My Tasks
                    </Typography>
                </Box>
                <Chip 
                    label={`${tasks.length} ${tasks.length === 1 ? 'Task' : 'Tasks'}`}
                    sx={styles.countChip}
                />
            </Box>

            <Divider sx={{ mb: 3 }} />

            {/* Empty State */}
            {tasks.length === 0 ? (
                <Box sx={styles.emptyState}>
                    <AssignmentIcon sx={styles.emptyIcon} />
                    <Typography variant="h6" sx={styles.emptyTitle}>
                        No tasks yet
                    </Typography>
                    <Typography variant="body2" sx={styles.emptyText}>
                        Create your first task to get started!
                    </Typography>
                </Box>
            ) : (
                // Tasks List
                <Box sx={styles.tasksList}>
                    {tasks.map((task, index) => (
                        <Fade in={true} timeout={300 + index * 100} key={task.id}>
                            <Card sx={styles.taskCard}>
                                <CardContent sx={styles.cardContent}>
                                    {/* Task Header */}
                                    <Box sx={styles.taskHeader}>
                                        <Typography variant="h6" sx={styles.taskTitle}>
                                            {task.title}
                                        </Typography>
                                        <Chip
                                            label={task.status}
                                            size="small"
                                            sx={{
                                                ...styles.statusChip,
                                                backgroundColor: statusConfig[task.status]?.bgColor,
                                                color: statusConfig[task.status]?.textColor,
                                            }}
                                        />
                                    </Box>

                                    {/* Task Description */}
                                    {task.description && (
                                        <Typography 
                                            variant="body2" 
                                            sx={styles.taskDescription}
                                        >
                                            {task.description}
                                        </Typography>
                                    )}

                                    {/* Action Buttons */}
                                    <Box sx={styles.actionButtons}>
                                        <IconButton
                                            onClick={() => handleEdit(task.id)}
                                            sx={styles.editButton}
                                            size="small"
                                        >
                                            <Edit fontSize="small" />
                                        </IconButton>

                                        <IconButton
                                            onClick={() => handleDelete(task.id)}
                                            sx={styles.deleteButton}
                                            size="small"
                                        >
                                            <Delete fontSize="small" />
                                        </IconButton>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Fade>
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default TasksPage;