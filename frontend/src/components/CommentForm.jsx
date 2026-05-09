import { useState } from 'react'

export default function CommentForm({ onCommentSubmit }) {
  const [comment, setComment] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (comment.trim()) {
      onCommentSubmit(comment)
      setComment('')
    }
  }

  return (
    <div className="mt-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium transition"
      >
        💬 Yorum Yap
      </button>
      
      {isOpen && (
        <form onSubmit={handleSubmit} className="mt-3 flex gap-2">
          <input 
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            type="text"
            placeholder="Yorumunuzu yazın..."
            className="flex-1 p-3 rounded-xl border border-purple-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition text-gray-700"
            autoFocus
          />
          <button 
            type="submit"
            className="px-4 py-2 bg-gradient-to-r from-purple-400 to-blue-400 text-white rounded-xl hover:from-purple-500 hover:to-blue-500 transition"
          >
            Gönder
          </button>
        </form>
      )}
    </div>
  )
}