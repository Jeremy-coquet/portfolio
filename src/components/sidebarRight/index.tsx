import { styles } from "./styles";
import { Icon } from 'react-icons-kit';
import { SidebarRightType } from "@/types/sidebarRight";
import Image from "next/image";

interface SidebarRightProps {
  datas: SidebarRightType[];
}

const SidebarRight = ({ datas }: SidebarRightProps) => {
  return <>
    <div style={styles.sidebar as any}>
      <nav style={styles.nav as any}>
          <ul style={styles.ul}>
           {datas.map((data, index) => (
              <li style={styles.li} key={index}>
                {data.icone ? (
                  <a href={ data.href } target={data.target} rel={ data.rel }>
                    <Icon icon={data.icone} style={styles.icons} size={32}/>
                  </a>
                  ) : (
                    data?.image && <Image src={data.image} alt= "42" width={32} height={32} />
                  )}
              </li>
              ))}
          </ul>
      </nav>
    </div>
  	</>;
};

export default SidebarRight;
