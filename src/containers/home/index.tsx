import Home from "../../components/home";
import { homeData } from "@/data/home";
import { useEffect, useState } from "react";
import { HomeType } from "@/types/home";

const HomeContainer = () => {

	const [data, setData] = useState<HomeType>();

	useEffect(() => {
		if (homeData)
				setData(homeData);
	}, [homeData])

	
	return <>
		{data && <Home data={ data } />}
	</>
};

export default HomeContainer;