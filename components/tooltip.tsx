import Link from "next/link";

interface TooltipProps {
  url: string
  items: TooltipItems[]
}

// title: 입시전략, 대입자료실, 진학메일링
// content: 모집요강자료실, 입시결과 자료실...
export interface TooltipItems {
  url: string
  title?: string
  content?: string[]
}

export default function Tooltip(props: TooltipProps) {
  // 메뉴 관리 db로 처리하고 싶다
  return <div></div>
  
  
  // <ul className="flex">
  //   <li>
  //     <p className="font-semibold">입시전략</p>
  //   </li>
  //   <li>
  //     <p className="font-semibold">대입자료실</p>
  //     <ul className="flex-col">
  //       {props.items.map(item=><li><Link href={item.url}>{item.title}</Link></li>)}
  //     </ul>
  //   </li>
  //   <li>
  //     <p className="font-semibold">진학 메일링</p>
  //   </li>
  // </ul>
}