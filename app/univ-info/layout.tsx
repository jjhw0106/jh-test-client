"use client"

import SectionHeader from "@/components/section-header"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const title="입시결과 자료실";
  const detail="대학별 입시결과 발표 자료가 한 곳에 다 모였다"
  return (
    <div>
      <SectionHeader title={title} detail={detail}/>
      {children}
    </div>
  )
}