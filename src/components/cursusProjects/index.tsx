import Section from "../section";
import { CursusProjectsType } from "@/types/cursusProjects";
import Image from "next/image";
import {
	StyledTitle,
	StyledLeftTitle,
	StyledProject,
	StyledImgSide,
	StyledTextSide
} from './styled';

interface CursusProjectsProps {
	datas: CursusProjectsType[];
}

const CursusProjects = ({ datas }: CursusProjectsProps) => {
	return (
		<Section id="cursusProjects">
			<StyledTitle>
				<StyledLeftTitle>
					<h1>Projet Cursus</h1>
				</StyledLeftTitle>
			</StyledTitle>
			
		{datas.map((data, index) => (
			<StyledProject key={index}>
				<StyledTextSide>
					<h3>{data.title}</h3>
					<p>{data.description}</p>
					<ul>
						{data.skills.map((skill, indexSkill) => (
							<li key={indexSkill}>
								{skill}
							</li>
						))} 
					</ul>
				</StyledTextSide>

				<StyledImgSide>
					<Image src={data.image} alt={data.title} width={350} height={250} />
				</StyledImgSide>
			</StyledProject>	
		))}
			
		</Section>
	);
}

export default CursusProjects;