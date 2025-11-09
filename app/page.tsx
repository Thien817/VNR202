import Link from 'next/link'
import HeroImage from '@/components/HeroImage'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-yellow-100 border-l-4 border-yellow-500 px-4 py-2 mb-6 rounded">
              <p className="text-yellow-800 font-semibold text-sm uppercase tracking-wide">
                Câu hỏi nghiên cứu
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Bình Minh Của Thời Kì Đổi Mới
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 font-semibold">
              Giai đoạn 1986 - 1996
            </p>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 md:p-8 max-w-4xl mx-auto mt-6">
              <p className="text-lg md:text-xl text-gray-800 font-medium leading-relaxed">
                <span className="text-blue-700 font-bold">CQ:</span> Tại sao gọi giai đoạn 1986 - 1996 là bình minh của thời kỳ đổi mới?
              </p>
            </div>
          </div>

          {/* Hero Image - Đại hội VI */}
          <HeroImage />
          
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12 text-left">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Sau năm 1975, đất nước thống nhất nhưng phải đối mặt với muôn vàn khó khăn của thời kỳ bao cấp.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Đại hội VI (1986) đã mở ra một bước ngoặt lịch sử, khởi xướng công cuộc đổi mới toàn diện – từ kinh tế, chính trị đến đối ngoại.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Giai đoạn 1986 – 1996 là <strong className="text-blue-700">"bình minh"</strong> – ánh sáng đầu tiên xua tan đêm tối khủng hoảng, đặt nền móng cho thời kỳ công nghiệp hóa, hiện đại hóa sau này.
              </p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            <Link
              href="/boi-canh"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border-l-4 border-blue-600"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Bối cảnh ra đời</h3>
              <p className="text-gray-600 text-sm">Tìm hiểu bối cảnh lịch sử trước đổi mới</p>
            </Link>

            <Link
              href="/doi-moi-toan-dien"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border-l-4 border-green-600"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Đổi mới toàn diện</h3>
              <p className="text-gray-600 text-sm">Các chính sách đổi mới kinh tế và xã hội</p>
            </Link>

            <Link
              href="/linh-vuc-khac"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border-l-4 border-purple-600"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lĩnh vực khác</h3>
              <p className="text-gray-600 text-sm">Công nghiệp, đối ngoại, văn hóa - xã hội</p>
            </Link>

            <Link
              href="/ket-qua-y-nghia"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border-l-4 border-red-600"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Kết quả và ý nghĩa</h3>
              <p className="text-gray-600 text-sm">Thành tựu và ý nghĩa lịch sử</p>
            </Link>

            <Link
              href="/tai-lieu-tham-khao"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border-l-4 border-yellow-600"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tài liệu tham khảo</h3>
              <p className="text-gray-600 text-sm">Nguồn tài liệu và tham khảo</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
