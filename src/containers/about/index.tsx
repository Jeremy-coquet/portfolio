import About from "../../components/about";
import { aboutData } from "@/data/about";
import { useEffect, useState } from "react";
import { AboutType } from "@/types/about";

const AboutContainer = () => {

	const [data, setData] = useState<AboutType>();

	useEffect(() => {
		if(aboutData)
			setData(aboutData);
	}, [aboutData])

	return <>
		{data ? <About data={ data }/> : null}
	</>
};

export default AboutContainer;