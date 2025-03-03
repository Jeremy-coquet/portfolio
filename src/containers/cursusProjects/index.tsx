import { cursusProjetsData } from "@/data/cursusProjets";
import { CursusProjectsType } from "@/types/cursusProjects";
import CursusProjects from "../../components/cursusProjects";
import { useEffect, useState } from "react";


const ProjectCursusContainer = () => {
	const [data, setData] = useState<CursusProjectsType[]>([]);

	useEffect(() => {
		if(cursusProjetsData.length > 0)
			setData(cursusProjetsData);
	}, [cursusProjetsData])

	return <>
		<CursusProjects datas={ data } />
	</>
};

export default ProjectCursusContainer;