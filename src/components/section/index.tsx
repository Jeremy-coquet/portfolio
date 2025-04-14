import React from "react";
import { styles } from "./styles";

interface SectionProps {
	children: React.ReactNode;
	id: string;
}

const Section = ({ children, id }: SectionProps) => {
	return (
		<div id={id} style={styles.content}>
			{children}
		</div>
	);
}

export default Section; 