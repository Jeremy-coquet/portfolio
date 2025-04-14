import styled from 'styled-components';

export const StyledTitle = styled.div`
	display: flex;
`;

export const StyledLeftTitle = styled.div`
	width: 40%;
	margin-right: 0rem;
	margin-left: 8rem;

	h1 {
		color: white;
		font-size: 2.5rem;
	}
`;

export const StyledRightTitle = styled.div`
	width: 50%;
`;

export const StyledProject = styled.div`
	display: flex;
	margin: 2rem 0;
`;

export const StyledRight = styled.div`
	width: 50%;
	margin-left: 8rem;
`;

export const StyledLeft = styled.div`
	background-color: rgba(100, 100, 150, 0.1);
	width: 45%;
	margin-left: 2rem;
	margin-right: 6rem;
	padding: 3rem;
	border-radius: 40px;
	box-shadow: 3px 3px 3px rgba(255, 255, 255, 0.1);

	h3 {
		color: white;
		font-size: 1.8rem;
		margin-bottom: 1rem;
	}

	p {
		color: white;
		margin-bottom: 1rem;
		line-height: 1.5;
	}

	ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}

	li {
		color: white;
		margin-bottom: 0.5rem;
	}
`; 