import Link from "next/link";
import Tooltip from "./tooltip";
import styles from "../styles/nav.module.css"
import { getMenu } from "@/app/api/nav";

interface Menu {
  url: string
  title: string
  // detph: Number
  childMenu?: Menu[] 
}

export default async function MainMenu() {
  
  const MainMenu: Menu[] = await getMenu(); 

  return <nav className={styles.gnb}>
  <ul>
    {MainMenu.map((menu, index) => 
    <li key={index} onMouseOver={()=>setHoveredMenuItem(index)} onClick={()=>getMenu()}>
      <Link href={menu.url}>{menu.title}</Link>
      <div className={styles.tooltip}>
        <Tooltip url={menu.url} itemIdx={hoveredMenuIdx}/>
      </div>
    </li>)}
  </ul>
</nav>
}