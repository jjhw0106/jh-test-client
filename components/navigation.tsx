"use client"

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import styles from "../styles/nav.module.css"
import Tooltip, { TooltipItems } from "./tooltip";
import { useState } from "react";
import { API_URL } from "@/app/constants";
import { getMenu } from "@/app/api/nav";

interface Menu {
  url: string
  title: string
  // detph: Number
  childMenu?: Menu[] 
}

export default function Navigation() {
  const path = usePathname();
  /* db get */

  const [hoveredMenuIdx, setHoveredMenuItem] = useState<number>(0);

  const result = getMenu();
  console.log(result);
  // const menu2: Menu[] = [{
  //     url: '/',
  //     title: 'Jinhak'
  //   },{
  //     url: '/univ-info',
  //     title: '대입정보',
  //   },{ 
  //     url: '/student-management',
  //     title: '학생관리 프로그램'
  //   },{ 
  //     url: '/lecture',
  //     title: '진학입시강좌'
  //   },{ 
  //     url: '/jinhak-tv',
  //     title: '진학 TV'
  //   },{ 
  //     url: '/top-gangsa',
  //     title: '일타강사'
  //   },{ 
  //     url: '/blacklabel',
  //     title: '블랙라벨'
  //   },
  // ]
  
  return <nav className={styles.gnb}>
    <ul>
      {menu2.map((menu, index) => 
      <li key={index} onMouseOver={()=>setHoveredMenuItem(index)} onClick={()=>getMenu()}>
        <Link href={menu.url}>{menu.title}</Link>
        <div className={styles.tooltip}>
          <Tooltip url={menu.url} itemIdx={hoveredMenuIdx}/>
        </div>
      </li>)}
    </ul>
  </nav>
}