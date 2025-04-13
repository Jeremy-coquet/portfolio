import styled from 'styled-components';

export const StyledTitle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 3rem;
`;

export const StyledLeftTitle = styled.div`
	h1 {
		color: #fff;
		font-size: 2.5rem;
		margin: 0;
	}
`;

export const StyledProject = styled.div`
	display: flex;
	gap: 2rem;
	margin-bottom: 3rem;
	background: rgba(255, 255, 255, 0.1);
	border-radius: 10px;
	padding: 2rem;
	backdrop-filter: blur(10px);

	@media (max-width: 768px) {
		flex-direction: column-reverse;
	}
`;

export const StyledRight = styled.div`
	flex: 1;
	img {
		width: 100%;
		height: auto;
		border-radius: 8px;
	}
`;

export const StyledLeft = styled.div`
	flex: 1;
	color: #fff;

	h3 {
		font-size: 1.5rem;
		margin: 0 0 1rem 0;
	}

	p {
		color: #ccc;
		line-height: 1.5;
		margin-bottom: 1.5rem;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	li {
		background: rgba(0, 255, 0, 0.2);
		color: #00ff00;
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		font-size: 0.875rem;
	}
`; 