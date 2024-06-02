"use client";

import Link from "next/link";
import Submenu from "./submenu";
import styles from "../styles/nav.module.css"
import { getMenu } from "@/app/api/nav";
import { useEffect, useState } from "react";

interface Menu {
  url: string
  title: string
  depth: Number // detph로 오타 났었는데 에러를 못잡아줬었다. => 방법 없을까?
  childMenu?: Menu[] 
}

export default function MainMenu() {
  /* db get */
  const [hoveredMenuIdx, setHoveredMenuItem] = useState<number>(0);
  const [mainMenu, setMainMenu] = useState<Menu[]>([]);
  
  // useEffect 내부에서 비동기 사용을 위해서는 useEffect 내부에서 함수를 정의해야 한다.
  useEffect(() => {
    async function fetchData() {
      const result = await getMenu();
      setMainMenu(result);
    }
    fetchData();
  }, []);

  return (
    <nav className={styles.gnb}>
      <ul>
        {/* todo: filter빼고 depth 1만 가져오는 getMenuByDepth 만들어서 쓸 것 */}
        {mainMenu.filter((value)=>value.depth===1).map((menu, index) => 
        <li key={index} onMouseOver={()=>setHoveredMenuItem(index)} onClick={()=>getMenu()}>
          <Link href={menu.url}>{menu.title}</Link>
          <div className={styles.tooltip}>
            {/* todo: Mainmenu와 분리해서 Navigation에서 조립할 수 있도록 변경해보자 */}
            <Submenu url={menu.url} itemIdx={hoveredMenuIdx}/>
          </div>
        </li>)}
      </ul>
    </nav>
  )
}