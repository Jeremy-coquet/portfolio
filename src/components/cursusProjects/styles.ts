export const styles = {
	title: {
		display: 'flex',
		// backgroundColor: 'green', //to parse component
	},

	leftTitle: {
		width: '40%',
		marginRight: '0rem',
		marginLeft: '8rem',
	},

	rightTitle: {
		width: '50%',
	},

	project: {
		display: 'flex',
		marginLeft: '4.5rem',
		marginRight: '4.5rem',
		// backgroundColor: 'red',
		padding: '1.5rem',
	},

	imgSide: {
		display: 'flex',
		width: '50%',
        justifyContent: 'center', // Centre l'image horizontalement
        alignItems: 'center', // Centre l'image verticalement
        height: '100%', // Assure que le conteneur prend toute la hauteur disponible
	},

	textSide: {
		backgroundColor: 'rgba(100, 100, 150, 0.1)',
		width: '50%',
		marginLeft: '2rem',
		marginRight: '2rem',
		padding: '1rem',
		borderRadius: '40px',
		boxShadow: '3px 3px 3px rgba(255, 255, 255, 0.1)',
	},
}