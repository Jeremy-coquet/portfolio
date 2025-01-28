import { styles } from "./styles";
import Section from "../../section";
import Forms from "../forms";
import AnimThreeJs from "../animThreeJs";

const Contact = () => {
	return <>
		<Section id="contact">
			<div style={styles.content}>
				<div style={styles.left}>
					<Forms />
				</div>
					
				<div style={styles.right}>
					<AnimThreeJs />
				</div>
			</div>
		</Section>	
	</>;
}

export default Contact;

