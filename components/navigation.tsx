"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/nav.module.css"
import Tooltip from "./tooltip";

export default function Navigation() {
  const path = usePathname();

  return <nav className={styles.gnb}>
    <ul>
      <li><Link href='/'>Jinhak</Link></li>
      <li>
        <Link href='/univ-info'>
          대입정보
        </Link>
        <div className={styles.tooltip}><Tooltip/></div>
      </li>
      <li><Link href='/student-management'>학생관리 프로그램</Link></li>
      <li><Link href='/lecture'>진학입시강좌</Link></li>
      <li><Link href='/jinhak-tv'>진학 TV</Link></li>
      <li><Link href='/top-gangsa'>일타강사</Link></li>
      <li><Link href='/blacklabel'>블랙라벨</Link></li>
    </ul>
  </nav>
}