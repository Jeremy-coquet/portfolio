import React from "react";
import { styles } from "./styles";

interface SectionProps{
	children: React.ReactNode;
	id: string;
} 
const Section = ({ children, id }: SectionProps) => {
	return <>
		<div style={styles.content} id={id}>
			{ children }
		</div>
	</>;
}

export default Section; 