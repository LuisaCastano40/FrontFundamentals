import { styled, Box } from "@mui/material";

// Main container with gradient background
export const MainContainer = styled(Box)(({ theme }) => ({
    minHeight: "100vh",
    width: '100vw',
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    backgroundAttachment: "fixed",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(6),
    overflowX: 'hidden',
    position: 'relative',
    // Subtle pattern overlay
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)',
        pointerEvents: 'none'
    }
}));

// Enhanced title with gradient text
export const Title = styled("h1")(({ theme }) => ({
    fontSize: "2.8rem",
    fontWeight: 700,
    background: "linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textAlign: "center",
    marginBottom: theme.spacing(4),
    letterSpacing: "-0.5px",
    textShadow: "0 2px 10px rgba(0,0,0,0.1)",
    
    [theme.breakpoints.down('sm')]: {
        fontSize: "2rem",
    }
}));

// Enhanced menu button styles
export const MenuButton = {
    
    textTransform: "none",
    fontSize: "1rem",
    fontWeight: 500,
    padding: "10px 24px",
    borderRadius: "12px",
    transition: "all 0.3s ease",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    color: "#ffffff",
    backdropFilter: "blur(10px)",
    
    "&.MuiButton-contained": {
        background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
        border: "2px solid transparent",
        boxShadow: "0 4px 15px rgba(79, 70, 229, 0.4)",
        
        "&:hover": {
            background: "linear-gradient(135deg, #4338ca 0%, #6d28d9 100%)",
            transform: "translateY(-2px)",
            boxShadow: "0 6px 20px rgba(79, 70, 229, 0.5)",
        }
    },
    
    "&.MuiButton-outlined": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        
        "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            transform: "translateY(-2px)",
            boxShadow: "0 4px 15px rgba(255, 255, 255, 0.2)",
        }
    }
};

// Enhanced options container
export const OptionsContainer = {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(20px)",
    borderRadius: '24px',
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    padding: '32px 24px',
    marginBottom: '32px',
    transition: "all 0.3s ease",
    width:'100%',

    "&:hover": {
        boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
    }
};

// Content wrapper for pages
export const ContentWrapper = {
    background: "#ffffff",
    borderRadius: "20px",
    padding: "32px",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
    minHeight: "400px",
    display:'flex',
    justifyContent:'center',
    width:'100%',
    "@media (max-width: 600px)": {
        padding: "20px",
    }
};