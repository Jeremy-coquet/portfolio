import styled from 'styled-components';
// import { StyleType } from "@/types/styles";

export const StyledContent = styled.div`
	display: flex;
`;

export const StyledLeft = styled.div`
	display: flex;
	margin-right: 4rem;
	margin-left: 10rem;
	margin-top: 6rem;
	width: 40%;
	justify-content: center;
	align-items: center;
`;

export const StyledRight = styled.div`
	background-color: rgba(100, 100, 150, 0.1);
	width: 50%;
	margin-left: 6rem;
	margin-right: 6rem;
	margin-top: 6rem;
	padding: 2.5rem;
	text-align: justify;
	border-radius: 40px;
	box-shadow: 3px 3px 3px rgba(255, 255, 255, 0.1);
`;

export const StyledCvLink = styled.a`
	display: block;
	background-color: white;
	width: 200px;
	height: 35px;
	text-align: center;
	padding-top: 14px;
	border-radius: 8px;
	margin: auto;
	text-decoration: none;
	opacity: 0.6;
	border: 1px solid white;
	font-size: 18px;
`;

// export const StyledLanguages = styled.div`
// 	display: flex;
// 	justify-content: space-around;
// 	margin-top: 50px;
// 	margin-left: 100px;
// 	margin-right: 100px;
// `; 