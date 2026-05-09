import { useState } from 'react'

const KATEGORI_ADLARI = {
  'saglikli-yasam': '🌿 Sağlıklı Yaşam',
  'yararli-bilgiler': '💡 Yararlı Bilgiler',
  'seyahat': '✈️ Seyahat ve Kültür',
  'kaybolanlar': '📜 Kaybolanlar ve Unutulanlar',
}

export default function PostList({ posts, onLike, onDelete, onEdit }) {
  const [editingId, setEditingId] = useState(null)
  const [editContent, setEditContent] = useState('')

  const startEdit = (post) => {
    setEditingId(post.id)
    setEditContent(post.content)
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

  if (posts.length === 0) {
    return (
      <p className="text-gray-400 text-center py-8">
        Henüz paylaşım yok. İlk paylaşımı sen yap! ✨
      </p>
    )
  }

  return (
    <div className="space-y-3">
      {posts.map((post) => (
        <div key={post.id} className="bg-purple-50/50 border-l-4 border-purple-400 p-4 rounded-r-xl hover:shadow-sm transition group">
          {editingId === post.id ? (
            <div>
              <textarea 
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                className="w-full p-3 rounded-xl border border-purple-200 bg-white resize-none focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-700 mb-2"
                rows="3"
                autoFocus
              />
              <div className="flex gap-2 justify-end">
                <button onClick={cancelEdit} className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700 transition">İptal</button>
                <button onClick={() => saveEdit(post.id)} className="px-4 py-1 text-sm bg-gradient-to-r from-purple-400 to-blue-400 text-white rounded-lg hover:from-purple-500 hover:to-blue-500 transition">Kaydet</button>
              </div>
            </div>
          ) : (
            <>
              {/* Kategori etiketi */}
              <span className="text-xs bg-purple-200 text-purple-700 px-2 py-1 rounded-full mb-2 inline-block">
                {KATEGORI_ADLARI[post.category] || post.category}
              </span>
              <p className="text-gray-700 mb-2">{post.content}</p>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>{new Date(post.createdAt).toLocaleString('tr-TR')}</span>
                <div className="flex gap-3">
                  <button onClick={() => onLike(post.id)} className="hover:text-pink-500 transition flex items-center gap-1">
                    👍 {post.likes || 0}
                  </button>
                  <button onClick={() => startEdit(post)} className="opacity-0 group-hover:opacity-100 hover:text-blue-500 transition" title="Düzenle">✏️</button>
                  <button onClick={() => onDelete(post.id)} className="opacity-0 group-hover:opacity-100 hover:text-red-500 transition" title="Sil">🗑️</button>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  )
}