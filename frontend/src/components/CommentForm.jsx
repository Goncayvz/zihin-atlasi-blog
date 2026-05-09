import { useState } from 'react'

export default function CommentForm({ onCommentSubmit }) {
  const [comment, setComment] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (comment.trim()) {
      onCommentSubmit(comment)
      setComment('')
      setIsOpen(false)
    }
  }

  return (
    <div>
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="text-sm bg-gradient-to-r from-purple-400 to-blue-400 text-white px-4 py-2 rounded-lg hover:from-purple-500 hover:to-blue-500 transition shadow-sm"
        >
          + Yorum Ekle
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mt-2">
          <input 
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            type="text"
            placeholder="Yorumunuzu yazın..."
            className="flex-1 p-2 rounded-lg border border-purple-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition text-gray-700 text-sm"
            autoFocus
          />
          <button 
            type="submit"
            className="px-3 py-2 bg-gradient-to-r from-purple-400 to-blue-400 text-white rounded-lg text-sm hover:from-purple-500 hover:to-blue-500 transition"
          >
            Gönder
          </button>
          <button 
            type="button"
            onClick={() => setIsOpen(false)}
            className="px-3 py-2 text-gray-400 hover:text-gray-600 text-sm transition"
          >
            ✕
          </button>
        </form>
      )}
    </div>
  )
}
