import SidebarRight from "@/components/sidebarRight";
import { sidebarRightData } from "@/data/sidebarRight";
import { useEffect, useState } from "react";
import { SidebarRightType } from "@/types/sidebarRight";

const SidebarRightContainer= () => {
	const [data, setData] = useState<SidebarRightType[]>([]);

	useEffect(() => {
		if(sidebarRightData.length > 0)
			setData(sidebarRightData);
	}, [sidebarRightData])

	return <>
		<SidebarRight datas={ data } />
	</>
};

export default SidebarRightContainer;