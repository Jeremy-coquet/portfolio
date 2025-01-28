import SidebarLeft from "@/components/sidebarLeft";
import { sidebarLeftData } from "@/data/sidebarLeft";
import { SidebarLeftType } from "@/types/sidebarLeft";
import { useEffect, useState } from "react";

const SidebarLeftContainer = () => {
	const [data, setData] = useState<SidebarLeftType[]>([]);

	useEffect(() => {
		if(sidebarLeftData.length > 0)
			setData(sidebarLeftData);
	}, [sidebarLeftData])

	return <>
		<SidebarLeft datas={ data } />
	</>
};

export default SidebarLeftContainer;