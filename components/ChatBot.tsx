'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  id: number
  text: string
  isUser: boolean
  timestamp: Date
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Xin chào! Tôi là chatbot hỗ trợ về đề tài "Bình Minh Của Thời Kì Đổi Mới (1986-1996)". Bạn có câu hỏi gì không?',
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const messageIdCounter = useRef(2)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const knowledgeBase: { [key: string]: string } = {
    'đại hội vi': 'Đại hội VI diễn ra vào tháng 12/1986, là bước ngoặt lịch sử khởi xướng công cuộc đổi mới toàn diện. Đại hội chủ trương lấy đổi mới kinh tế làm trọng tâm, đồng thời từng bước đổi mới chính trị, xã hội, văn hóa, đối ngoại.',
    'đổi mới': 'Đổi mới là công cuộc toàn diện bắt đầu từ năm 1986, chuyển từ cơ chế "xin - cho" bao cấp sang cơ chế thị trường có sự quản lý của Nhà nước theo định hướng XHCN. Đây là bước chuyển từ khủng hoảng sang phục hồi, từ bao cấp sang năng động.',
    'bình minh': 'Giai đoạn 1986-1996 được ví như "bình minh" vì đây là ánh sáng đầu tiên xua tan đêm tối khủng hoảng, đặt nền móng cho thời kỳ công nghiệp hóa, hiện đại hóa sau này. Đây là bước chuyển lịch sử từ khủng hoảng sang phục hồi.',
    'khoán 10': 'Khoán 10 (1988) là chính sách giao quyền sử dụng đất lâu dài cho hộ nông dân, gắn trách nhiệm và lợi ích. Nhờ đó, Việt Nam từ thiếu lương thực triền miên trở thành nước xuất khẩu gạo hàng đầu thế giới đầu 1990s.',
    'kết quả': 'Kết quả nổi bật (1986-1996): GDP tăng bình quân 7-8%/năm, lạm phát giảm từ 700% (1986) xuống dưới 10% (1995), tỷ lệ hộ nghèo giảm từ 60% xuống dưới 30%. Việt Nam gia nhập ASEAN (1995) và thiết lập quan hệ với hơn 150 quốc gia.',
    'đối ngoại': 'Đường lối đối ngoại mới: "Đa phương hóa, đa dạng hóa quan hệ quốc tế". Các mốc quan trọng: Bình thường hóa với Trung Quốc (1991), Hoa Kỳ (1995), và gia nhập ASEAN (1995).',
    'nông nghiệp': 'Đổi mới trong nông nghiệp là khâu đột phá đầu tiên. Từ Khoán 100 (1981) đến Khoán 10 (1988), sản lượng lúa tăng nhanh, đời sống nông dân cải thiện rõ rệt. Đây là "tia sáng đầu tiên của bình minh đổi mới".',
    'kinh tế': 'Đổi mới kinh tế là trọng tâm: Chuyển sang cơ chế thị trường, thừa nhận nhiều thành phần kinh tế, ban hành Luật Đầu tư nước ngoài (1987) và Luật Doanh nghiệp tư nhân (1990).',
    'văn hóa': 'Văn hóa - xã hội: Xóa đói giảm nghèo, phổ cập giáo dục tiểu học, mở rộng hệ thống y tế, triển khai chính sách đền ơn đáp nghĩa, phong trào "Toàn dân đoàn kết xây dựng đời sống văn hóa".',
    'ý nghĩa': 'Ý nghĩa lịch sử: Đưa đất nước thoát khỏi khủng hoảng, khẳng định tính đúng đắn của đường lối đổi mới, tạo nền tảng vững chắc cho công nghiệp hóa - hiện đại hóa, mở ra thời kỳ hội nhập và phát triển.',
  }

  const getResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    
    // Tìm kiếm từ khóa trong knowledge base
    for (const [keyword, response] of Object.entries(knowledgeBase)) {
      if (lowerMessage.includes(keyword)) {
        return response
      }
    }

    // Câu hỏi đặc biệt
    if (lowerMessage.includes('xin chào') || lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return 'Xin chào! Tôi có thể giúp bạn tìm hiểu về giai đoạn 1986-1996 - Bình minh của thời kỳ đổi mới. Bạn muốn biết gì?'
    }

    if (lowerMessage.includes('tại sao') && lowerMessage.includes('bình minh')) {
      return 'Giai đoạn 1986-1996 được gọi là "bình minh" vì đây là ánh sáng đầu tiên xua tan đêm tối khủng hoảng, đặt nền móng cho thời kỳ công nghiệp hóa, hiện đại hóa sau này. Đây là bước chuyển lịch sử từ khủng hoảng sang phục hồi, từ bao cấp sang năng động, từ cô lập sang hội nhập.'
    }

    if (lowerMessage.includes('giúp') || lowerMessage.includes('hướng dẫn')) {
      return 'Tôi có thể trả lời các câu hỏi về: Đại hội VI, đổi mới kinh tế, nông nghiệp (Khoán 10), đối ngoại, kết quả và ý nghĩa của giai đoạn 1986-1996. Bạn có thể hỏi bất kỳ điều gì về đề tài này!'
    }

    // Câu trả lời mặc định
    return 'Xin lỗi, tôi chưa hiểu rõ câu hỏi của bạn. Bạn có thể hỏi về: Đại hội VI, đổi mới kinh tế, nông nghiệp, đối ngoại, kết quả và ý nghĩa của giai đoạn 1986-1996. Hoặc bạn có thể xem chi tiết hơn trong các trang của website!'
  }

  const handleSendMessage = (messageText?: string) => {
    const textToSend = messageText || inputValue
    if (!textToSend.trim()) return

    const userMessage: Message = {
      id: messageIdCounter.current++,
      text: textToSend,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)
    
    if (!messageText) {
      setInputValue('')
    }

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messageIdCounter.current++,
        text: getResponse(textToSend),
        isUser: false,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 500)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickQuestions = [
    'Đại hội VI là gì?',
    'Tại sao gọi là bình minh?',
    'Kết quả đổi mới?',
    'Khoán 10 là gì?',
  ]

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 md:w-16 md:h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 z-50 hover:scale-110"
          aria-label="Mở chatbot"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <span className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 w-[calc(100vw-2rem)] md:w-96 h-[70vh] md:h-[600px] max-h-[calc(100vh-2rem)] md:max-h-[600px] bg-white rounded-lg shadow-2xl flex flex-col z-50 border border-gray-200 animate-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg">Chatbot Đổi Mới</h3>
                <p className="text-xs text-blue-100">Trực tuyến</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-full p-1 transition"
              aria-label="Đóng chatbot"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.isUser
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-800 border border-gray-200'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.isUser ? 'text-blue-100' : 'text-gray-500'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString('vi-VN', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-lg p-3 bg-white text-gray-800 border border-gray-200">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2 border-t border-gray-200 bg-white">
              <p className="text-xs text-gray-500 mb-2 mt-2">Câu hỏi nhanh:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(question)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Nhập câu hỏi của bạn..."
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition disabled:bg-gray-300 disabled:cursor-not-allowed"
                aria-label="Gửi tin nhắn"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
