import { styles } from "./styles";
import Section from "../section";
import { CursusProjectsType } from "@/types/cursusProjects";
import Image from "next/image";

interface CursusProjectsProps{
	datas: CursusProjectsType[];
}

const CursusProjects = ({ datas }: CursusProjectsProps) => {

	return <>
		<Section id="cursusProjects">
			<div style={styles.title}>
				<div style={styles.leftTitle}>
					<h1>Projet Cursus</h1>
				</div>
			</div>
			
		<div>
			{datas.map((data, index) => (
				<div style={styles.project} key={index}>
					<div style={styles.textSide}>
						<h3>{ data.title }</h3>
						<p>{ data.description}</p>
						<ul>
							{data.skills.map((skill, indexSkill) => (
								<li key={indexSkill}>
									{skill}
								</li>
							))} 
						</ul>
					</div>
	
					<div style={styles.imgSide}>
						<Image src={ data.image } alt={ data.title } width={350} height={250} />
					</div>
				</div>	
			))}
		</div>
		</Section>
	</>;
}

export default CursusProjects;