import { StyledContent, StyledLeft, StyledRight, StyledCvLink } from "./styled";
import Section from "../section";
import { AboutType } from "@/types/about";
import Image from "next/image";
import Carousel from "../carousel";

interface AboutProps {
	data: AboutType;
}

const About = ( { data }: AboutProps) => {

	return (
		<Section id="about">
			<StyledContent>
				<StyledLeft>
					<Image src={ data.about.image } alt="profil" width={350} height={350} style={{ borderRadius: '180px' }} />
				</StyledLeft>
					
				<StyledRight>
					<p>{ data.about.description }</p>
					<StyledCvLink href="/cv.pdf" download>Telecharge mon CV
					</StyledCvLink>
				</StyledRight>
			</StyledContent>
			
			<Carousel items={data.skills}/>
		</ Section>
	);
}

export default About;