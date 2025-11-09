import Link from 'next/link'
import TabController from '@/components/TabController'

export default function BoiCanh() {
  const tabs = [
    {
      id: '1',
      label: '1. Tình hình đất nước',
      content: (
        <div className="space-y-6">
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
            <p className="text-gray-800 leading-relaxed">
              Sau khi thống nhất năm 1975, Việt Nam vừa giành được hòa bình nhưng phải đối mặt với hậu quả nặng nề của chiến tranh kéo dài hơn 30 năm.
            </p>
            <p className="text-gray-800 leading-relaxed mt-2">
              Cơ sở hạ tầng bị tàn phá, sản xuất đình trệ, kinh tế phụ thuộc vào viện trợ nước ngoài.
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <p className="text-gray-800 leading-relaxed">
              <strong>Mô hình kế hoạch hóa tập trung quan liêu bao cấp</strong> được duy trì suốt những năm 1976 – 1985: Nhà nước nắm quyền phân phối từ vật tư, lương thực đến giá cả.
            </p>
            <p className="text-gray-800 leading-relaxed mt-2">
              Người dân sống dựa vào tem phiếu, hàng hóa khan hiếm, nền kinh tế thiếu năng động, hiệu quả sản xuất thấp.
            </p>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
            <p className="text-gray-800 leading-relaxed">
              <strong>Đời sống nhân dân vô cùng khó khăn:</strong> lạm phát năm 1986 lên tới <strong className="text-red-600">700%</strong>, thu nhập bình quân đầu người chỉ khoảng <strong>100 USD/năm</strong>, hàng triệu người thất nghiệp hoặc thiếu việc làm.
            </p>
            <p className="text-gray-800 leading-relaxed mt-2">
              Tình trạng khủng hoảng kinh tế – xã hội kéo dài, lòng tin của nhân dân bị ảnh hưởng nghiêm trọng.
            </p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
            <p className="text-gray-800 leading-relaxed">
              <strong>Áp lực từ bên ngoài:</strong> Sau chiến tranh, một số thế lực thù địch lợi dụng vấn đề Campuchia và vấn đề nhân quyền, tiến hành bao vây, cấm vận, cô lập Việt Nam về kinh tế, ngoại giao.
            </p>
            <p className="text-gray-800 leading-relaxed mt-2">
              Họ tuyên truyền xuyên tạc, bôi nhọ chế độ xã hội chủ nghĩa, kích động chia rẽ nội bộ, nhằm làm suy yếu niềm tin của nhân dân vào Đảng và Nhà nước.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: '2',
      label: '2. Bối cảnh quốc tế',
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-gray-800 leading-relaxed">
              Lúc này, <strong>Liên Xô và các nước XHCN Đông Âu</strong> – chỗ dựa chính của Việt Nam – bắt đầu khủng hoảng. Mô hình tập trung quan liêu bao cấp bộc lộ rõ hạn chế.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <p className="text-gray-800 leading-relaxed">
              Trong khi đó, <strong>các nước Đông Á</strong> như Hàn Quốc, Singapore, Thái Lan, Malaysia… lại cất cánh mạnh mẽ nhờ cải cách, mở cửa, phát triển kinh tế thị trường định hướng nhà nước.
            </p>
          </div>

          <div className="bg-indigo-100 border-2 border-indigo-500 p-4 rounded-lg">
            <p className="text-gray-900 leading-relaxed font-semibold">
              ➡️ Bối cảnh đó đặt ra yêu cầu cấp bách: Việt Nam phải đổi mới tư duy lãnh đạo, tư duy kinh tế, phương thức quản lý, nếu không sẽ tụt hậu, khủng hoảng trầm trọng hơn.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: '3',
      label: '3. Đại hội VI',
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-600 p-6 rounded-lg">
            <p className="text-gray-800 leading-relaxed mb-3">
              <strong>Đại hội VI là bước ngoặt vĩ đại</strong>, đánh dấu sự ra đời của đường lối đổi mới toàn diện đất nước.
            </p>
            <p className="text-gray-800 leading-relaxed mb-3">
              Đảng chủ trương <strong>lấy đổi mới kinh tế làm trọng tâm</strong>, đồng thời từng bước đổi mới chính trị, xã hội, văn hóa, đối ngoại.
            </p>
            <p className="text-gray-800 leading-relaxed mb-3">
              <strong>Mục tiêu trọng yếu:</strong> Đưa đất nước thoát khỏi khủng hoảng, ổn định và phát triển.
            </p>
            <div className="mt-4 p-4 bg-white rounded border-2 border-blue-500">
              <p className="text-gray-900 leading-relaxed text-lg font-semibold italic text-center">
                "Nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật."
              </p>
              <p className="text-gray-600 text-sm text-center mt-2">
                → Thể hiện bản lĩnh của Đảng, dám tự đổi mới chính mình.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Bối cảnh ra đời công cuộc đổi mới
          </h1>
          <p className="text-gray-600 mb-8">Trần Quang Thiên - Mở bài</p>

          <TabController tabs={tabs} borderColor="blue" />

          {/* Navigation */}
          <div className="mt-8 flex justify-between">
            <Link
              href="/"
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
            >
              ← Trang chủ
            </Link>
            <Link
              href="/doi-moi-toan-dien"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Đổi mới toàn diện →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
