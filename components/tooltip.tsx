import Link from "next/link";

export default function Tooltip() {
  // 메뉴 관리 db로 처리하고 싶다
  return <ul className="flex">
    <li>
      <p className="font-semibold">입시전략</p>
    </li>
    <li>
      <p className="font-semibold">대입자료실</p>
      <ul className="flex-col">
        <li><Link href={'/'}>모집요강 자료실</Link></li>
        <li><Link href={'/'}>입시결과 자료실</Link></li>
        <li><Link href={'/'}>대학별고사 자료실</Link></li>
        <li><Link href={'/'}>모평/수능 기출문제</Link></li>
        <li><Link href={'/'}>교육기관/강의 자료실</Link></li>
      </ul>
    </li>
    <li>
      <p className="font-semibold">진학 메일링</p>
    </li>
  </ul>
}