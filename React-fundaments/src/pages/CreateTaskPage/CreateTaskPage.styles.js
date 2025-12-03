export const container = {
    padding: { xs: '16px', sm: '24px' },
    maxWidth: '800px',
    margin: '0 auto',
};

export const header = {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    mb: 3,
};

export const headerIcon = {
    fontSize: '2.5rem',
    color: '#3b82f6',
};

export const pageTitle = {
    fontWeight: 700,
    color: '#1e40af',
};

export const formCard = {
    borderRadius: '16px',
    border: '1px solid #e2e8f0',
    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
    boxShadow: '0 4px 12px rgba(30, 64, 175, 0.08)',
};

export const cardContent = {
    padding: { xs: '24px', sm: '32px' },
};

export const textField = {
    mb: 3,
    
    '& .MuiOutlinedInput-root': {
        borderRadius: '12px',
        backgroundColor: '#ffffff',
        transition: 'all 0.3s ease',
        
        '&:hover': {
            backgroundColor: '#f8fafc',
        },
        
        '&.Mui-focused': {
            backgroundColor: '#ffffff',
            boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
        }
    },
    
    '& .MuiInputLabel-root': {
        color: '#64748b',
        fontWeight: 500,
        
        '&.Mui-focused': {
            color: '#3b82f6',
        }
    }
};

export const input = {
    fontSize: '1rem',
};

export const buttonContainer = {
    display: 'flex',
    gap: 2,
    justifyContent: 'flex-end',
    pt: 2,
    flexWrap: 'wrap',
};

export const submitButton = {
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    fontWeight: 600,
    padding: '10px 28px',
    borderRadius: '12px',
    textTransform: 'none',
    fontSize: '1rem',
    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
    transition: 'all 0.3s ease',
    
    '&:hover': {
        backgroundColor: '#2563eb',
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 16px rgba(59, 130, 246, 0.4)',
    }
};

export const cancelButton = {
    color: '#64748b',
    borderColor: '#cbd5e1',
    fontWeight: 600,
    padding: '10px 28px',
    borderRadius: '12px',
    textTransform: 'none',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    
    '&:hover': {
        borderColor: '#94a3b8',
        backgroundColor: '#f8fafc',
        transform: 'translateY(-2px)',
    }
};

export const helperBox = {
    mt: 3,
    padding: '16px',
    backgroundColor: '#eff6ff',
    borderRadius: '12px',
    border: '1px solid #dbeafe',
};

export const helperText = {
    color: '#1e40af',
    fontSize: '0.9rem',
    textAlign: 'center',
};