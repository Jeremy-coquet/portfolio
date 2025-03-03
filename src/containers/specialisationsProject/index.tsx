import { useEffect, useState } from "react";
import { SpecialisationsProjectsType } from "@/types/specialisationsProjects";
import SpecialisationsProjects from "@/components/specialisationsProjects";
import { specialisationsProjectsData } from "@/data/specialisationsProjects";

const SpecialisationsProjectsContainer = () => {
    const [data, setData] = useState<SpecialisationsProjectsType[]>([]);

    useEffect(() => {
        if(specialisationsProjectsData.length > 0)
            setData(specialisationsProjectsData);
    }, [specialisationsProjectsData])

    return <>
        <SpecialisationsProjects datas={ data }/>
        </>
}

export default SpecialisationsProjectsContainer;