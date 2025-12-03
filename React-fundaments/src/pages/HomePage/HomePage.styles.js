
export const headerSection = {
    textAlign: 'center',
    mb: 4,
};

export const mainTitle = {
    fontWeight: 700,
    color: '#1e40af',
    mb: 2,
    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
};

export const subtitle = {
    color: '#64748b',
    fontSize: { xs: '0.95rem', sm: '1.1rem' },
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: 1.6,
};

export const skillCard = {
    padding: '24px',
    borderRadius: '16px',
    height: '100%',
    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
    border: '1px solid #e2e8f0',
    transition: 'all 0.3s ease',
    
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 12px 24px rgba(30, 64, 175, 0.1)',
        borderColor: '#3b82f6',
    }
};

export const cardHeader = {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    mb: 3,
    pb: 2,
    borderBottom: '2px solid #e2e8f0',
};

export const categoryIcon = {
    fontSize: '2rem',
};

export const categoryTitle = {
    fontWeight: 600,
    color: '#1e40af',
};

export const skillsList = {
    display: 'flex',
    flexDirection: 'column',
    gap: 1.5,
};

export const skillItem = {
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
    padding: '8px 0',
};

export const checkIcon = {
    color: '#3b82f6',
    fontSize: '1.3rem',
};

export const footerInfo = {
    display: 'flex',
    justifyContent: 'center',
    mt: 6,
};

export const techChip = {
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    fontWeight: 500,
    padding: '20px 16px',
    fontSize: '0.9rem',
};