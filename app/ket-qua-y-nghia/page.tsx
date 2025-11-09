import Link from 'next/link'

export default function KetQuaYNghia() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kết quả và ý nghĩa
          </h1>
          <p className="text-xl text-gray-700 mb-2">Vì sao gọi là "Bình minh của thời kỳ đổi mới"</p>
          <p className="text-gray-600 mb-8">Huỳnh Trần Thanh Ngân - Kết bài</p>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-red-600 pb-2">
                1. Kết quả nổi bật (1986 – 1996)
              </h2>
              
              <div className="space-y-6">
                {/* Kinh tế */}
                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Kinh tế:</h3>
                  <ul className="space-y-3 text-gray-800">
                    <li className="flex items-start">
                      <span className="font-bold text-green-700 mr-3">•</span>
                      <p><strong>GDP tăng bình quân 7–8%/năm</strong> (1991–1996).</p>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-green-700 mr-3">•</span>
                      <p><strong>Lạm phát giảm từ hơn 700% (1986) xuống dưới 10% (1995)</strong>.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-green-700 mr-3">•</span>
                      <p><strong>Cơ cấu kinh tế chuyển dịch tích cực:</strong> nông nghiệp giảm, công nghiệp – dịch vụ tăng.</p>
                    </li>
                  </ul>
                </div>

                {/* Xã hội */}
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Xã hội:</h3>
                  <ul className="space-y-3 text-gray-800">
                    <li className="flex items-start">
                      <span className="font-bold text-blue-700 mr-3">•</span>
                      <p><strong>Tỷ lệ hộ nghèo giảm từ gần 60% xuống còn dưới 30%</strong>.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-blue-700 mr-3">•</span>
                      <p>Hệ thống giáo dục, y tế, phúc lợi được mở rộng, mức sống trung bình tăng lên.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-blue-700 mr-3">•</span>
                      <p>Văn hóa tinh thần khởi sắc, niềm tin vào Đảng và Nhà nước được khôi phục.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-blue-700 mr-3">•</span>
                      <p>Đời sống nhân dân cải thiện rõ rệt, tỷ lệ hộ nghèo giảm mạnh.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-blue-700 mr-3">•</span>
                      <p>Hàng hóa phong phú, thị trường sôi động, môi trường kinh doanh năng động hơn.</p>
                    </li>
                  </ul>
                </div>

                {/* Đối ngoại */}
                <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Đối ngoại:</h3>
                  <ul className="space-y-3 text-gray-800">
                    <li className="flex items-start">
                      <span className="font-bold text-purple-700 mr-3">•</span>
                      <p>Việt Nam trở thành <strong>thành viên tích cực của ASEAN</strong>, thiết lập quan hệ với hơn <strong>150 quốc gia</strong>.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-purple-700 mr-3">•</span>
                      <p><strong>Uy tín, vị thế quốc tế được nâng cao đáng kể</strong>.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-red-600 pb-2">
                2. Ý nghĩa lịch sử
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-600 p-6 rounded-lg">
                  <ul className="space-y-3 text-gray-800">
                    <li className="flex items-start">
                      <span className="font-bold text-red-700 mr-3">•</span>
                      <p><strong>Đưa đất nước thoát khỏi khủng hoảng kinh tế – xã hội kéo dài</strong>, ổn định chính trị – xã hội.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-red-700 mr-3">•</span>
                      <p><strong>Khẳng định tính đúng đắn và sáng tạo</strong> của đường lối đổi mới do Đảng khởi xướng.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-red-700 mr-3">•</span>
                      <p><strong>Tạo nền tảng vững chắc</strong> cho giai đoạn đẩy mạnh công nghiệp hóa – hiện đại hóa từ năm 1996 trở đi.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-red-700 mr-3">•</span>
                      <p><strong>Mở ra một thời kỳ mới:</strong> Việt Nam hội nhập, phát triển, vươn tầm quốc tế.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-red-600 pb-2">
                3. Vì sao gọi là "Bình minh của thời kỳ đổi mới"
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 border-2 border-yellow-500 p-8 rounded-lg">
                  <p className="text-gray-900 leading-relaxed text-lg mb-4 text-center font-semibold">
                    "Bình minh" là ánh sáng đầu tiên xua tan bóng tối, báo hiệu một kỷ nguyên mới.
                  </p>
                  <p className="text-gray-800 leading-relaxed mb-4">
                    Giai đoạn <strong>1986 – 1996</strong> chính là thời điểm đất nước thức dậy, chuyển mình mạnh mẽ từ cơ chế cũ sang nền kinh tế thị trường định hướng XHCN.
                  </p>
                  <div className="bg-white p-6 rounded-lg border-2 border-orange-500 mt-4">
                    <p className="text-gray-900 leading-relaxed font-semibold text-center text-lg">
                      Đây là bước chuyển lịch sử – từ khủng hoảng sang phục hồi, từ bao cấp sang năng động, từ cô lập sang hội nhập.
                    </p>
                  </div>
                  <p className="text-gray-900 leading-relaxed mt-4 text-center font-bold text-xl">
                    → Vì vậy, 1986–1996 được ví như <span className="text-orange-600">"bình minh"</span> – khởi đầu tươi sáng của thời kỳ đổi mới và phát triển của dân tộc Việt Nam.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex justify-between">
            <Link
              href="/linh-vuc-khac"
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
            >
              ← Lĩnh vực khác
            </Link>
            <Link
              href="/tai-lieu-tham-khao"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Tài liệu tham khảo →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
