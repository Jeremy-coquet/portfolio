import { styles } from "./styles";
import Section from "../section";
import { SpecialisationsProjectsType } from "@/types/specialisationsProjects";
import Image from "next/image";


interface SpecialisationsProjectsProps {
    datas: SpecialisationsProjectsType[];
}

const SpecialisationsProjects = ({ datas }: SpecialisationsProjectsProps) => {
    return <>
        <Section id="specialisationsProjects">
            <div style={styles.title}>

                <div style={styles.leftTitle}>
                    <h1>Projets de spécialiations</h1>
                </div>
            </div>


            {datas.map((data, index) => (
                <div style={styles.project} key={index}>
                    <div style={styles.imgSide}>
                        <Image src={data.image} alt={data.title} width={600} height={350} />
                    </div>

                    <div style={styles.textSide}>
                        <h3>{ data.title }</h3>
                        <p> { data.description }</p>
                        <ul>
                            {data.skills.map((skill, indexSkill) => (
                                <li key={indexSkill}>
                                    { skill }
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </Section>
    </>;
}

export default SpecialisationsProjects;