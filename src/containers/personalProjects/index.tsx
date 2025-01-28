import PersonalProjects from "../../components/personalProjects";
import { personalProjectsData } from "@/data/personalProjects";
import { useEffect, useState } from "react";
import { PersonalProjectsType } from "@/types/personalProjects";

const PersonalProjectsContainer = () => {
	const [data, setData] = useState<PersonalProjectsType[]>([]);

	useEffect(() => {
		if(personalProjectsData.length > 0)
			setData(personalProjectsData);
	}, [personalProjectsData])

	return <>
		<PersonalProjects datas={ data }/>
	</>
};

export default PersonalProjectsContainer;