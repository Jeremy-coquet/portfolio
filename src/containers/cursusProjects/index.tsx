import CursusProjects from "../../components/cursusProjects";
import { cursusProjetsData } from "@/data/cursusProjets";
import { useEffect, useState } from "react";
import { CursusProjectsType } from "@/types/cursusProjects";




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