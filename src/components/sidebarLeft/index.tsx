import { styles } from "./styles";
import { SidebarLeftType } from "@/types/sidebarLeft";

interface SidebarLeftProps {
	datas: SidebarLeftType[];
}

const SidebarLeft = ({ datas }: SidebarLeftProps) => {
	return <>
		<div style={styles.sidebar as any}>
			<nav style={styles.nav as any}>
				{datas.map((data, index) => (
					<a href={ data.href } key={index} style={styles.navLink}>{ data.description }</a>
				))}
			</nav>
		</div>
	</>
}

export default SidebarLeft;
