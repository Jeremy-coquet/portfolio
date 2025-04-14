import Section from "../section";
import { HomeType } from "@/types/home";
import Image from "next/image";
import {
	StyledContent,
	StyledLeft,
	StyledRight
} from './styled';

interface HomeProps {
	data: HomeType;
}

const Home = ({ data }: HomeProps) => {
	return (
		<Section id="home">
			<StyledContent>
				<StyledLeft>
					<h1>{data.title}</h1>
					<h1>{data.name}</h1>
					<h2>{data.profession}</h2>
				</StyledLeft>

				<StyledRight>
					<Image src={data.image} alt="homeImg" width={800} height={460} />
				</StyledRight>
			</StyledContent>
		</Section>
	);
}

export default Home;