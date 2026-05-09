import { useState } from 'react'

export default function PostForm({ onPostSubmit }) {
  const [content, setContent] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (content.trim()) {
      onPostSubmit(content)
      setContent('')
      setIsOpen(false)
    }
  }

  return (
    <div>
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium transition"
        >
          <span className="text-2xl">🖊️</span>
          <span>Bugün ne paylaşmak istersiniz?</span>
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="bg-purple-50 p-4 rounded-xl">
          <textarea 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Düşüncelerinizi yazın..."
            className="w-full p-3 rounded-xl border border-purple-200 bg-white resize-none focus:outline-none focus:ring-2 focus:ring-purple-400 transition text-gray-700"
            rows="3"
            autoFocus
          />
          <div className="flex gap-2 justify-end mt-2">
            <button 
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-gray-500 hover:text-gray-700 transition"
            >
              İptal
            </button>
            <button 
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-purple-400 to-blue-400 text-white font-medium rounded-xl hover:from-purple-500 hover:to-blue-500 transition shadow-sm"
            >
              Paylaş
            </button>
          </div>
        </form>
      )}
    </div>
  )
}