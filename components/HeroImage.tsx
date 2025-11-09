'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function HeroImage() {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="mb-12 rounded-lg overflow-hidden shadow-2xl">
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900">
        {!imageError && (
          <Image
            src="/images/dai-hoi-vi.jpg"
            alt="Đại hội VI (1986) - Bước ngoặt lịch sử của công cuộc đổi mới"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            onError={() => setImageError(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-1 bg-yellow-400"></div>
            <span className="text-sm font-semibold uppercase tracking-wider">Lịch Sử</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Đại hội VI (1986)</h2>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl">
            Bước ngoặt lịch sử khởi xướng công cuộc đổi mới toàn diện
          </p>
          {imageError && (
            <p className="text-sm mt-4 text-yellow-300 opacity-80">
              💡 Vui lòng đặt ảnh Đại hội VI vào thư mục public/images/dai-hoi-vi.jpg
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
