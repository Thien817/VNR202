import { ReactNode } from 'react'

interface SectionProps {
  title: string
  children: ReactNode
  borderColor?: string
}

export default function Section({ title, children, borderColor = 'blue' }: SectionProps) {
  const borderColors: Record<string, string> = {
    blue: 'border-blue-600',
    green: 'border-green-600',
    purple: 'border-purple-600',
    red: 'border-red-600',
    yellow: 'border-yellow-600',
  }

  return (
    <section className="mb-8">
      <h2 className={`text-2xl font-bold text-gray-900 mb-4 border-b-2 ${borderColors[borderColor]} pb-2`}>
        {title}
      </h2>
      {children}
    </section>
  )
}
