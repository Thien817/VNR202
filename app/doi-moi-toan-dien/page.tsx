import Link from 'next/link'

export default function DoiMoiToanDien() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Đổi mới toàn diện giai đoạn 1986 – 1996
          </h1>
          <p className="text-gray-600 mb-8">Bùi Minh Trí - Thân bài 1</p>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-green-600 pb-2">
                1. Đổi mới tư duy kinh tế
              </h2>
              
              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <p className="text-gray-800 leading-relaxed">
                    Đảng ta xác định <strong>đổi mới kinh tế là trọng tâm</strong>, mở đầu cho đổi mới toàn diện.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                  <p className="text-gray-800 leading-relaxed mb-2">
                    <strong>Từ cơ chế "xin – cho" bao cấp</strong>, chuyển sang <strong>cơ chế thị trường có sự quản lý của Nhà nước</strong> theo định hướng XHCN.
                  </p>
                  <p className="text-gray-800 leading-relaxed text-sm mt-2 pl-4">
                    → Các cơ sở sản xuất được trao quyền tự chủ, doanh nghiệp được quyền quyết định giá, đầu ra, đầu vào.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                  <p className="text-gray-800 leading-relaxed">
                    Nhà nước thừa nhận <strong>nhiều thành phần kinh tế cùng phát triển</strong>: quốc doanh, tập thể, tư nhân, cá thể, và kinh tế có vốn đầu tư nước ngoài.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                  <p className="text-gray-800 leading-relaxed font-semibold mb-2">
                    Một loạt chính sách pháp lý mở đường:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-800 ml-4">
                    <li>
                      <strong>Luật Đầu tư nước ngoài (1987):</strong> thu hút vốn, công nghệ, kinh nghiệm quản lý từ bên ngoài.
                    </li>
                    <li>
                      <strong>Luật Doanh nghiệp tư nhân và Công ty TNHH (1990):</strong> tạo hành lang pháp lý cho khu vực tư nhân
                    </li>
                  </ul>
                  <p className="text-gray-800 leading-relaxed mt-3">
                    Nhờ đó, Việt Nam bước đầu hình thành <strong>nền kinh tế hàng hóa nhiều thành phần</strong>, vận hành theo quy luật thị trường nhưng vẫn giữ định hướng xã hội chủ nghĩa.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-green-600 pb-2">
                2. Đổi mới trong nông nghiệp – khâu đột phá đầu tiên
              </h2>
              
              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <p className="text-gray-800 leading-relaxed">
                    Đảng xác định <strong>nông nghiệp là lĩnh vực "mở đường"</strong> vì hơn <strong>70% dân số</strong> sống ở nông thôn.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                  <p className="text-gray-800 leading-relaxed mb-2">
                    <strong>Từ Khoán 100 (1981) đến Khoán 10 (1988):</strong>
                  </p>
                  <p className="text-gray-800 leading-relaxed text-sm mt-2 pl-4">
                    → Giao quyền sử dụng đất lâu dài cho hộ nông dân, gắn trách nhiệm và lợi ích.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600 p-6 rounded-lg">
                  <p className="text-gray-800 leading-relaxed font-semibold mb-3">
                    Kết quả:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-800 ml-4">
                    <li>
                      Sản lượng lúa tăng nhanh, từ <strong>thiếu lương thực triền miên</strong> trở thành <strong>nước xuất khẩu gạo hàng đầu thế giới</strong> đầu 1990s.
                    </li>
                    <li>
                      Nông dân có động lực sản xuất, đời sống cải thiện rõ rệt.
                    </li>
                  </ul>
                  <div className="mt-4 p-4 bg-white rounded border-2 border-green-500">
                    <p className="text-gray-900 leading-relaxed">
                      Thành công này khẳng định: <strong>Đường lối đổi mới của Đảng là đúng đắn, phù hợp thực tiễn</strong>; là <strong className="text-green-700">"tia sáng đầu tiên của bình minh đổi mới"</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-green-600 pb-2">
                3. Chính sách kế hoạch hóa gia đình – ổn định xã hội và phát triển bền vững
              </h2>
              
              <div className="space-y-4">
                <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded">
                  <p className="text-gray-800 leading-relaxed">
                    Song song với đổi mới kinh tế, Đảng và Nhà nước ban hành <strong>chính sách dân số và kế hoạch hóa gia đình</strong> nhằm ổn định quy mô dân số, nâng cao chất lượng cuộc sống.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                  <p className="text-gray-800 leading-relaxed">
                    Giai đoạn cuối thập niên 1980, <strong>dân số Việt Nam tăng rất nhanh</strong>, gây áp lực lớn lên y tế, giáo dục, việc làm và an sinh xã hội.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                  <p className="text-gray-800 leading-relaxed">
                    Chính phủ phát động phong trào <strong>"Mỗi cặp vợ chồng nên có 1–2 con"</strong>, kết hợp tuyên truyền, giáo dục, và cung cấp dịch vụ y tế sinh sản.
                  </p>
                </div>

                <div className="bg-indigo-100 border-2 border-indigo-500 p-4 rounded-lg">
                  <p className="text-gray-900 leading-relaxed">
                    Nhờ đó, <strong>tốc độ gia tăng dân số giảm rõ rệt</strong>, góp phần ổn định kinh tế, cải thiện đời sống và tạo điều kiện cho đầu tư phát triển.
                  </p>
                  <p className="text-gray-900 leading-relaxed mt-2 font-semibold">
                    ➡️ Đây được coi là một chính sách xã hội tiêu biểu trong thời kỳ đổi mới, thể hiện tầm nhìn dài hạn của Đảng trong việc gắn tăng trưởng kinh tế với phát triển con người.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex justify-between">
            <Link
              href="/boi-canh"
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
            >
              ← Bối cảnh ra đời
            </Link>
            <Link
              href="/linh-vuc-khac"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Lĩnh vực khác →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
