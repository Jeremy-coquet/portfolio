export interface StyleType {
	content: {
		display?: string;
	},

	left: {
		display?: string;
		marginRight?: string;
		marginLeft?: string;
		marginTop?: string;
		width?: string;
		justifyContent?: string;
		alignItems?: string;
	},

	right: {
		backgroundColor?: string;
		width?: string;
		marginLeft?: string;
		marginRight?: string;
		marginTop?: string;
		padding?: string;
		textAlign?: string;
		borderRadius?: string;
		boxShadow?: string;
	},

	href_cv: {
		display?: string;
		color?: string;
		height?: string;
		backgroundColor?: string;
		borderRadius?: string;
		width?: string;
		cursor?: string;
		margin?: string;
		fontSize?: string;
		textAlign?: string;
		paddingTop?: string;
		textDecoration?: string;
		opacity?: string;
		border?: string;
	}

	languages: {
		display?: string;
		justifyContent?: string;
		marginTop: number;
	}
}