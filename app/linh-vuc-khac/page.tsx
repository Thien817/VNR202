import Link from 'next/link'

export default function LinhVucKhac() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Các lĩnh vực khác trong công cuộc đổi mới
          </h1>
          <p className="text-gray-600 mb-8">Bùi Ánh Tiên - Thân bài 2</p>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">
                1. Công nghiệp và dịch vụ
              </h2>
              
              <div className="space-y-4">
                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                  <p className="text-gray-800 leading-relaxed">
                    Giai đoạn 1986–1996, Việt Nam chuyển hướng ưu tiên phát triển <strong>công nghiệp nhẹ, hàng tiêu dùng, hàng xuất khẩu</strong>.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                  <p className="text-gray-800 leading-relaxed font-semibold mb-2">
                    Hình thành các khu công nghiệp và khu chế xuất đầu tiên:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-800 ml-4">
                    <li>Khu chế xuất Tân Thuận (1991), Linh Trung, Bắc Thăng Long…</li>
                    <li>Đây là tiền đề cho mô hình thu hút đầu tư nước ngoài sau này.</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <p className="text-gray-800 leading-relaxed">
                    Nhà nước tập trung cải thiện <strong>hạ tầng giao thông, điện năng, viễn thông</strong>, đồng thời khuyến khích khu vực tư nhân đầu tư.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                  <p className="text-gray-800 leading-relaxed">
                    <strong>Khu vực dịch vụ – thương mại phát triển mạnh</strong>, đặc biệt là ngân hàng, vận tải, du lịch, bưu điện, mở ra diện mạo kinh tế năng động hơn.
                  </p>
                  <p className="text-gray-800 leading-relaxed mt-2 pl-4 text-sm">
                    → Sự kết hợp này tạo nên diện mạo mới cho nền kinh tế: năng động, hội nhập và hướng ngoại.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">
                2. Đổi mới về đối ngoại
              </h2>
              
              <div className="space-y-4">
                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded">
                  <p className="text-gray-800 leading-relaxed">
                    Đường lối đối ngoại mới được xác định: <strong>"Đa phương hóa, đa dạng hóa quan hệ quốc tế"</strong>, thay cho chính sách khép kín.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-6 rounded-lg">
                  <p className="text-gray-900 leading-relaxed text-lg font-semibold italic text-center mb-4">
                    "Việt Nam muốn là bạn, là đối tác tin cậy của tất cả các nước trong cộng đồng quốc tế."
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <p className="text-gray-800 leading-relaxed font-semibold mb-3">
                    Các mốc quan trọng:
                  </p>
                  <div className="space-y-3 ml-4">
                    <div className="flex items-start">
                      <span className="font-bold text-green-700 mr-3">•</span>
                      <p className="text-gray-800">
                        <strong>Bình thường hóa quan hệ với Trung Quốc (1991)</strong>.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="font-bold text-green-700 mr-3">•</span>
                      <p className="text-gray-800">
                        <strong>Bình thường hóa quan hệ với Hoa Kỳ (1995)</strong>.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="font-bold text-green-700 mr-3">•</span>
                      <p className="text-gray-800">
                        <strong>Gia nhập ASEAN (1995)</strong> – bước ngoặt hội nhập khu vực.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-100 border-2 border-blue-500 p-4 rounded-lg">
                  <p className="text-gray-900 leading-relaxed">
                    Nhờ đó, Việt Nam từng bước <strong>thoát khỏi bao vây cấm vận</strong>, mở rộng hợp tác, nâng cao vị thế quốc tế.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">
                3. Văn hóa – xã hội
              </h2>
              
              <div className="space-y-4">
                <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded">
                  <p className="text-gray-800 leading-relaxed">
                    Nhà nước thực hiện <strong>chính sách xóa đói giảm nghèo</strong>, phổ cập giáo dục tiểu học, chăm sóc y tế cộng đồng, từng bước nâng cao đời sống nhân dân.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <p className="text-gray-800 leading-relaxed">
                    <strong>Y tế được chú trọng đổi mới:</strong> mở rộng hệ thống bệnh viện, trạm y tế xã, triển khai chương trình tiêm chủng mở rộng, chăm sóc sức khỏe bà mẹ – trẻ em, và ban hành chính sách bảo hiểm y tế tạo nền tảng xã hội hóa y tế.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                  <p className="text-gray-800 leading-relaxed">
                    Triển khai <strong>chính sách đền ơn đáp nghĩa</strong>, hỗ trợ người có công, vùng sâu vùng xa, khơi dậy tinh thần đoàn kết dân tộc.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                  <p className="text-gray-800 leading-relaxed">
                    Phong trào <strong>"Toàn dân đoàn kết xây dựng đời sống văn hóa"</strong> được phát động – hướng tới phát triển toàn diện con người Việt Nam.
                  </p>
                </div>

                <div className="bg-indigo-100 border-2 border-indigo-500 p-4 rounded-lg">
                  <p className="text-gray-900 leading-relaxed">
                    <strong>Văn hóa, giáo dục, y tế, khoa học kỹ thuật phát triển đồng bộ</strong>, củng cố niềm tin nhân dân vào sự lãnh đạo của Đảng.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex justify-between">
            <Link
              href="/doi-moi-toan-dien"
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
            >
              ← Đổi mới toàn diện
            </Link>
            <Link
              href="/ket-qua-y-nghia"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Kết quả và ý nghĩa →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
