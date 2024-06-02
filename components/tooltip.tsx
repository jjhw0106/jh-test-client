import Link from "next/link";

interface TooltipProps {
  url: string
  itemIdx: number
  // items: TooltipItems[]
}

// title: 입시전략, 대입자료실, 진학메일링
// content: 모집요강자료실, 입시결과 자료실...
export interface TooltipItems {
  url: string
  title?: string
  content?: string[]
}

const tooltips: TooltipItems[][] = 
[
  [
    {url:`/univ-info/recruit-docs`, title:'모집요강 자료실'},
    {url:`/`, title:'입시결과 자료실'},
    {url:`/`, title:'대학별고사 자료실'},
    {url:`/`, title:'모평/수능 기출문제'},
    {url:`/`, title:'교육기관/강의 자료실'}
  ],
  [
    {url:`/univ-info/mock-scores`, title:'모평/수능 기출문제'},
    {url:`/univ-info/strategy`, title:'입시전략'},
    {url:`/univ-info/compare-students`, title:'학생부 비교과'},
    {url:`/univ-info/education-materials`, title:'교육기관/강의 자료실'},
    {url:`/univ-info/recommend-univ`, title:'추천대학'}
  ],
  [
    {url:`/univ-info/recruit-docs`, title:'모집요강 자료실'},
    {url:`/univ-info/admission-results`, title:'입시결과 자료실'},
    {url:`/univ-info/suitability`, title:'수시/정시적합성'},
    {url:`/univ-info/real-acceptance`, title:'실제합격사례'},
    {url:`/univ-info/cut-off-lines`, title:'대학별 커트라인'}
  ],
  [],
  [],
  [
    {url:`/univ-info/recruit-docs`, title:'모집요강 자료실'},
    {url:`/univ-info/admission-results`, title:'입시결과 자료실'},
    {url:`/univ-info/suitability`, title:'수시/정시적합성'},
  ],
  [
    {url:`/univ-info/recruit-docs`, title:'모집요강 자료실'},
    {url:`/univ-info/admission-results`, title:'입시결과 자료실'},
    {url:`/univ-info/suitability`, title:'수시/정시적합성'},
  ],
];

export default function Tooltip(props: TooltipProps) {
  // 메뉴 관리 db로 처리하고 싶다
  return <ul className="w-screen h-32 bg-green-700 m-0 p-0 items-center flex-col">
    {tooltips[props.itemIdx].map((tooltip, index)=><li key={index}><Link href={tooltip.url}>{tooltip.title}</Link></li>)}
  </ul>
  
  
}