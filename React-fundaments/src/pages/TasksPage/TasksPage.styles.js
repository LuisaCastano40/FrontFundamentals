export const container = {
    padding: { xs: '16px', sm: '24px' },
};

export const header = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: 3,
    flexWrap: 'wrap',
    gap: 2,
};

export const headerContent = {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
};

export const headerIcon = {
    fontSize: '2.5rem',
    color: '#3b82f6',
};

export const pageTitle = {
    fontWeight: 700,
    color: '#1e40af',
};

export const countChip = {
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    fontWeight: 600,
    fontSize: '0.9rem',
};

// Empty State
export const emptyState = {
    textAlign: 'center',
    py: 8,
    px: 3,
};

export const emptyIcon = {
    fontSize: '5rem',
    color: '#cbd5e1',
    mb: 2,
};

export const emptyTitle = {
    color: '#64748b',
    mb: 1,
    fontWeight: 600,
};

export const emptyText = {
    color: '#94a3b8',
};

// Tasks List
export const tasksList = {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
};

export const taskCard = {
    borderRadius: '16px',
    border: '1px solid #e2e8f0',
    transition: 'all 0.3s ease',
    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
    
    '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 24px rgba(30, 64, 175, 0.12)',
        borderColor: '#3b82f6',
    }
};

export const cardContent = {
    padding: '20px !important',
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
};

export const taskHeader = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 2,
    flexWrap: 'wrap',
};

export const taskTitle = {
    fontWeight: 600,
    color: '#1e293b',
    flex: 1,
    wordBreak: 'break-word',
};

export const statusChip = {
    fontWeight: 600,
    fontSize: '0.75rem',
    height: '26px',
    borderRadius: '8px',
};

export const taskDescription = {
    color: '#64748b',
    lineHeight: 1.6,
    wordBreak: 'break-word',
};

export const actionButtons = {
    display: 'flex',
    gap: 1,
    justifyContent: 'flex-end',
    pt: 1,
    borderTop: '1px solid #f1f5f9',
};

export const editButton = {
    color: '#3b82f6',
    backgroundColor: '#eff6ff',
    transition: 'all 0.2s ease',
    
    '&:hover': {
        backgroundColor: '#dbeafe',
        transform: 'scale(1.1)',
    }
};

export const deleteButton = {
    color: '#ef4444',
    backgroundColor: '#fef2f2',
    transition: 'all 0.2s ease',
    
    '&:hover': {
        backgroundColor: '#fee2e2',
        transform: 'scale(1.1)',
    }
};