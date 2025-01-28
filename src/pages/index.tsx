import Layout from "../layouts";

import AboutContainer from "../containers/about";
import CursusProjectsContainer from "../containers/cursusProjects";
import PersonalProjectsContainer from "../containers/personalProjects";
// import Contact from "../components/contact/contact";
import HomeContainer from "../containers/home";

const Home = () => {
	return <>
	<div style={{ position: 'relative', overflow: 'hidden' }}>
	<Layout>
		<HomeContainer />
		<AboutContainer />
		<PersonalProjectsContainer />
		<CursusProjectsContainer />
		{/*<Contact />*/}
	</Layout>
	</div>
	</>
};

export default Home;
