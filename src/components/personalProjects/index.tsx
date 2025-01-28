import { styles } from "./styles";
import Section from "../section";
import { PersonalProjectsType } from "@/types/personalProjects";
import Image from "next/image";


interface PersonalProjectsProps {
	datas: PersonalProjectsType[];
}

const PersonalProjects = ({ datas }: PersonalProjectsProps) => {
	return <>
		<Section id="personalProjects">
			<div style={styles.title}>

				<div style={styles.leftTitle}>
					<h1>Mes projets</h1>
				</div>
			</div>


		{datas.map((data, index) => (
			<div style={styles.projet} key={index}>
				<div style={styles.right}>
					<Image src={data.image} alt={data.title} width={600} height={350} />
				</div>
			
				<div style={styles.left}>
					<h3>{ data.title }</h3>
					<p> { data.description }</p>
					<ul>
						{data.skills.map((skill, indexSkill) => (
						<li key={indexSkill}>
							{ skill }
						</li>
						))}
					</ul>
				</div>
			</div>
		))}
		</Section>
	</>;
}

export default PersonalProjects;