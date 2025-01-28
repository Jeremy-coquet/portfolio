import { StyleType } from "@/types/styles";

export const styles : StyleType = {
	content: {
		display: 'flex',
		// backgroundColor: 'green', //to parse component
	},

	left: {
		display: 'flex',
		marginRight: '4rem',
		marginLeft: '10rem',
		marginTop: '6rem',
		width: '40%',
		justifyContent: 'center', // Centre l'image horizontalement
		alignItems: 'center', // Centre l'image verticalement
	},

	right: {
		backgroundColor: 'rgba(100, 100, 150, 0.1)',
		width: '50%',
		marginLeft: '6rem',
		marginRight: '6rem',
		marginTop: '6rem',
		padding: '1rem',
		textAlign: 'justify',
		borderRadius: '40px',
		boxShadow: '3px 3px 3px rgba(255, 255, 255, 0.1)',
	},

	href_cv: {
		display: 'block',
		backgroundColor: 'white',
		width: '200px',
		height: '35px',
		textAlign: 'center',
		paddingTop: '14px',
		borderRadius: '8px',
		margin: 'auto',
		textDecoration: 'none',
		opacity: '0.6',
		border: '1px solid white',
		fontSize: '18px',
	},

	languages: {
		display: "flex",
		justifyContent: 'space-around',
		marginTop: 50,
	},


	// sphereContainer: {
	// 	display: 'flex',       // Active le flexbox
	// 	justifyContent: 'center', // Centrer horizontalement
	// 	alignItems: 'center',  // Centrer verticalement
	// 	// gap: '5px',           // Ajouter un espacement entre les sphères
	// 	marginTop: '0px',     // Espacement au-dessus des sphères
	// },
}