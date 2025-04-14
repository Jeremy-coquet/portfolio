import Section from "../section";
import { PersonalProjectsType } from "@/types/personalProjects";
import Image from "next/image";
import {
	StyledTitle,
	StyledLeftTitle,
	StyledProject,
	StyledRight,
	StyledLeft
} from './styled';

interface PersonalProjectsProps {
	datas: PersonalProjectsType[];
}

const PersonalProjects = ({ datas }: PersonalProjectsProps) => {
	return (
		<Section id="personalProjects">
			<StyledTitle>
				<StyledLeftTitle>
					<h1>Mes projets</h1>
				</StyledLeftTitle>
			</StyledTitle>

			{datas.map((data, index) => (
				<StyledProject key={index}>
					<StyledRight>
						<Image src={data.image} alt={data.title} width={600} height={350} />
					</StyledRight>
				
					<StyledLeft>
						<h3>{data.title}</h3>
						<p>{data.description}</p>
						<ul>
							{data.skills.map((skill, indexSkill) => (
								<li key={indexSkill}>
									{skill}
								</li>
							))}
						</ul>
					</StyledLeft>
				</StyledProject>
			))}
		</Section>
	);
}

export default PersonalProjects;