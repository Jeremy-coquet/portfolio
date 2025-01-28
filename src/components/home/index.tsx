import { styles } from "./styles";
import Section from "../section";
import { HomeType } from "@/types/home";
import Image from "next/image";

interface HomeProps {
	data: HomeType;
}
const Home = ({ data }: HomeProps) => {
	return <>
		<Section id="home">
			<div style={styles.content}>
				<div style={styles.left}>
						<h1>{ data.title }</h1>
						<h1>{ data.name }</h1>
						<h2> { data.profession }</h2>
				</div>

				<div style={styles.right}>
					<Image src={data.image} alt="homeImg" width={800} height={460} />
				</div>
			</div>
		</Section>
	</>;
}

export default Home;