export const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '400px',
        marginLeft: '4rem',
		backgroundColor: 'rgba(100, 100, 150, 0.1)',
		padding: '2rem',
		borderRadius: '40px',
		boxShadow: '3px 3px 3px rgba(255, 255, 255, 0.1)',
    },

    div: {
        marginBottom: '1rem',
    },

    label: {
		display: 'block',
        marginBottom: '0.5rem',
        fontWeight: 'bold',
    },

    input: {
		width: '60%',
		position: 'relative',
		boxSizing: 'border-box',
        padding: '0.5rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
	

    button: {
        padding: '0.5rem',
		position: 'relative',
		width: '240px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    buttonHover: {
        backgroundColor: '#0056b3',
    },

    span: {
		padding: '1rem',
        color: 'red',
        fontSize: '0.875rem',
    },

	success: {
		color: '#2eed1e',
	},

	error: {
		color: 'red',
	},
};