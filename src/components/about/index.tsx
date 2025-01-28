import { styles } from "./styles";
import Section from "../section";
import { AboutType } from "@/types/about";
import Image from "next/image";

interface AboutProps {
	data: AboutType;
}

const About = ( { data }: AboutProps) => {

	return <>
		<Section id="about">
			<div style={styles.content}>
				<div style={styles.left}>
					<Image src={ data.about.image } alt="profil" width={350} height={350} style={{ borderRadius: '180px' }} />
				</div>
					
				<div style={styles.right as any}>
					<p>{ data.about.description }</p>
					<a href="/cv.pdf" download style={styles.href_cv as any}>Telecharge mon CV
					</a>
				</div>
			</div>
			<div style={styles.languages}>
				{data.skills.map((skill, indexSkill) => (
					<Image src={skill.logo} alt={skill.title} width={60} height={60} key={indexSkill} />
				))}
			</div>
		</ Section>
	</>;
}

export default About;

