import Link from 'next/link'

export default function TaiLieuThamKhao() {
  const references = [
    {
      title: 'Giáo trình Lịch sử Đảng Cộng sản Việt Nam - Ban Tuyên giáo TW',
      url: 'https://www.iuv.edu.vn/cms/plugin_upload/preview/news/1468/1113/gt-lich-su-dang-csvn-ban-tuyen-giao-tw.pdf',
      description: 'Tài liệu chính thức về lịch sử Đảng'
    },
    {
      title: 'Những thành tựu cơ bản về phát triển kinh tế - xã hội của Việt Nam từ khi đổi mới đến nay',
      url: 'https://tapchicongsan.org.vn/en/chinh-tri-xay-dung-dang/-/2018/21694/nhung-thanh-tuu-co-ban-ve-phat-trien-kinh-te---xa-hoi-cua-viet-nam-tu-khi-doi-moi-den-nay.aápx',
      description: 'Tạp chí Cộng sản - Phân tích thành tựu đổi mới'
    },
    {
      title: 'Sự bổ sung phát triển đường lối đổi mới của Đảng trong thời kỳ đổi mới (1986-2016)',
      url: 'https://ussh.vnu.edu.vn/vi/news/nhan-vat-su-kien/su-bo-sung-phat-trien-duong-loi-doi-moi-cua-dang-trong-thoi-ky-doi-moi-1986-2016-14946.html',
      description: 'Đại học Khoa học Xã hội và Nhân văn - VNU'
    },
    {
      title: 'Tài liệu PDF về Đổi mới',
      url: 'https://tmu-moodle.tmu.edu.vn/moodledata/filedir/4d/74/4d742664429401f063f8cb046d7ecd8b390989e1.pdf',
      description: 'Tài liệu học tập về thời kỳ đổi mới'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tài liệu tham khảo
          </h1>
          <p className="text-gray-600 mb-8">Các nguồn tài liệu và tham khảo về thời kỳ đổi mới 1986-1996</p>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="space-y-6">
              {references.map((ref, index) => (
                <div
                  key={index}
                  className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-lg hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {index + 1}. {ref.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{ref.description}</p>
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Xem tài liệu
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-gray-100 to-gray-50 p-6 rounded-lg border-2 border-gray-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Thông tin nhóm</h3>
              <p className="text-gray-700 mb-2">
                <strong>Đề tài:</strong> Tại sao gọi giai đoạn 1986 - 1996 là bình minh của thời kỳ đổi mới?
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Thành viên nhóm 7:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Nguyễn Di Thiên (Sản phẩm sáng tạo - Web)</li>
                <li>Nguyễn Hà Viết Anh (Tạo Quiz)</li>
                <li>Huỳnh Trần Thanh Ngân (Kết bài)</li>
                <li>Bùi Minh Trí (Thân bài 1)</li>
                <li>Bùi Ánh Tiên (Thân bài 2)</li>
                <li>Trần Quang Thiên (Mở bài)</li>
              </ul>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex justify-between">
            <Link
              href="/ket-qua-y-nghia"
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
            >
              ← Kết quả và ý nghĩa
            </Link>
            <Link
              href="/"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Trang chủ →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
