'use client'

import { useState, ReactNode } from 'react'

interface Tab {
  id: string
  label: string
  content: ReactNode
}

interface TabControllerProps {
  tabs: Tab[]
  defaultTab?: string
  borderColor?: string
}

export default function TabController({ tabs, defaultTab, borderColor = 'blue' }: TabControllerProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

  const borderColors: Record<string, { border: string; bg: string; text: string }> = {
    blue: {
      border: 'border-blue-600',
      bg: 'bg-blue-50',
      text: 'text-blue-700',
    },
    green: {
      border: 'border-green-600',
      bg: 'bg-green-50',
      text: 'text-green-700',
    },
    purple: {
      border: 'border-purple-600',
      bg: 'bg-purple-50',
      text: 'text-purple-700',
    },
    red: {
      border: 'border-red-600',
      bg: 'bg-red-50',
      text: 'text-red-700',
    },
    yellow: {
      border: 'border-yellow-600',
      bg: 'bg-yellow-50',
      text: 'text-yellow-700',
    },
  }

  const colors = borderColors[borderColor] || borderColors.blue
  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-2 mb-6 border-b-2 border-gray-200 pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 md:px-6 md:py-3 rounded-t-lg font-semibold transition-all duration-300 relative ${
              activeTab === tab.id
                ? `${colors.bg} ${colors.border} border-t-2 border-l-2 border-r-2 ${colors.text} shadow-md transform translate-y-[-2px]`
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-[-2px] left-0 right-0 h-0.5 bg-white"></span>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8 min-h-[400px] animate-fadeIn">
        {activeTabContent}
      </div>
    </div>
  )
}

