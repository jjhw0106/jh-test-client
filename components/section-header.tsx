interface SectionHeaderProps {
  title: string
  detail: string
}
export default function SectionHeader({title, detail}: SectionHeaderProps) {
  return (
    <div className="bg-gray-500 w-full h-52 flex flex-col items-center justify-center">
      <span className="text-2xl">{title}</span>
      <span>{detail}</span>
    </div>
  )
}