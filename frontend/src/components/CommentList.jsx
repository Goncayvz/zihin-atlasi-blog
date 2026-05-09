import { useState } from 'react'

export default function CommentList({ comments, onEdit, onDelete }) {
  const [editingId, setEditingId] = useState(null)
  const [editContent, setEditContent] = useState('')

  const startEdit = (comment) => {
    setEditingId(comment.id)
    setEditContent(comment.content)
  }

  const saveEdit = (id) => {
    if (editContent.trim()) {
      onEdit(id, editContent)
      setEditingId(null)
      setEditContent('')
    }
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditContent('')
  }

  if (comments.length === 0) {
    return (
      <p className="text-gray-400 text-center py-4">
        Henüz yorum yok.
      </p>
    )
  }

  return (
    <div className="space-y-2">
      {comments.map((comment) => (
        <div key={comment.id} className="bg-gray-50 p-3 rounded-lg group">
          {editingId === comment.id ? (
            // Düzenleme modu
            <div className="flex gap-2">
              <input 
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                className="flex-1 p-2 rounded-lg border border-purple-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                autoFocus
              />
              <button 
                onClick={() => saveEdit(comment.id)}
                className="text-green-500 hover:text-green-700 text-sm font-medium"
              >
                💾
              </button>
              <button 
                onClick={cancelEdit}
                className="text-gray-400 hover:text-gray-600 text-sm"
              >
                ❌
              </button>
            </div>
          ) : (
            // Normal görünüm
            <>
              <div className="flex justify-between items-start">
                <p className="text-gray-700 text-sm">👤 {comment.content}</p>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
                  <button 
                    onClick={() => startEdit(comment)}
                    className="text-gray-400 hover:text-blue-500 text-xs"
                    title="Düzenle"
                  >
                    ✏️
                  </button>
                  <button 
                    onClick={() => onDelete(comment.id)}
                    className="text-gray-400 hover:text-red-500 text-xs"
                    title="Sil"
                  >
                    🗑️
                  </button>
                </div>
              </div>
              <span className="text-xs text-gray-400">
                {new Date(comment.createdAt || comment.created_at).toLocaleString('tr-TR')}
              </span>
            </>
          )}
        </div>
      ))}
    </div>
  )
}
