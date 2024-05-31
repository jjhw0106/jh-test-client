"use client"

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import styles from "../styles/nav.module.css"
import Tooltip, { TooltipItems } from "./tooltip";
import { useState } from "react";

interface Menu {
  url: string
  title: string
  childMenu?: Menu[] 
}
export default function Navigation() {
  const path = usePathname();
  /* db get */
  const menu2: Menu[] = [{ 
      url: '/',
      title: 'Jinhak'
    },{
      url: '/univ-info',
      title: '대입정보',
    },{ 
      url: '/student-management',
      title: '학생관리 프로그램'
    },{ 
      url: '/lecture',
      title: '진학입시강좌'
    },{ 
      url: '/jinhak-tv',
      title: '진학 TV'
    },{ 
      url: '/top-gangsa',
      title: '일타강사'
    },{ 
      url: '/blacklabel',
      title: '블랙라벨'
    },
  ]
  const tooltip: TooltipItems[] = [
    {url:`/univ-info/recruit-docs`, title:'모집요강 자료실'},
    {url:`/`, title:'입시결과 자료실'},
    {url:`/`, title:'대학별고사 자료실'},
    {url:`/`, title:'모평/수능 기출문제'},
    {url:`/`, title:'교육기관/강의 자료실'}
  ];
  // setTooltipMenu(tooltip)
  

  return <nav className={styles.gnb}>
    <ul>
      {menu2.map(menu=><li>
        <Link href={menu.url}>{menu.title}</Link>
        <div className={styles.submenu}>
          <Tooltip url={menu.url} items={tooltip}/>
        </div>
      </li>)}
    </ul>
  </nav>
}