import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import PostList from '../components/PostList'
import { KATEGORI_ANIMASYON } from '../components/CategoryAnimations'

const API_BASE = 'http://localhost/zihin-atlasi-v2/backend'

const KATEGORILER = {
  'saglikli-yasam': {
    ad: '🌿 Sağlıklı Yaşam',
    aciklama: 'Sağlıklı yaşam, beslenme ve spor üzerine paylaşımlar',
    bgGradient: 'from-green-200 via-emerald-100 to-teal-100',
    borderColor: 'border-green-300',
    textColor: 'text-green-800',
    badgeBg: 'bg-green-200',
    badgeText: 'text-green-700',
    dotColor: '#86efac',
    icon: '🥗',
  },
  'yararli-bilgiler': {
    ad: '💡 Yararlı Bilgiler',
    aciklama: 'Hayatınızı kolaylaştıracak pratik bilgiler',
    bgGradient: 'from-blue-200 via-sky-100 to-indigo-100',
    borderColor: 'border-blue-300',
    textColor: 'text-blue-800',
    badgeBg: 'bg-blue-200',
    badgeText: 'text-blue-700',
    dotColor: '#93c5fd',
    icon: '🧠',
  },
  seyahat: {
    ad: '✈️ Seyahat ve Kültür',
    aciklama: 'Gezi rehberleri, kültürel keşifler ve anılar',
    bgGradient: 'from-sky-200 via-blue-100 to-cyan-100',
    borderColor: 'border-sky-300',
    textColor: 'text-sky-900',
    badgeBg: 'bg-sky-200',
    badgeText: 'text-sky-800',
    dotColor: '#93c5fd',
    icon: '🗺️',
  },
  kaybolanlar: {
    ad: '📜 Kaybolanlar ve Unutulanlar',
    aciklama: 'Tarihten silinenler, unutulan gelenekler ve hikayeler',
    bgGradient: 'from-purple-200 via-violet-100 to-fuchsia-100',
    borderColor: 'border-purple-300',
    textColor: 'text-purple-800',
    badgeBg: 'bg-purple-200',
    badgeText: 'text-purple-700',
    dotColor: '#c4b5fd',
    icon: '🏛️',
  },
}

export default function CategoryPage() {
  const { kategoriId } = useParams()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [commentsByPostId, setCommentsByPostId] = useState({})

  const kategori = useMemo(
    () =>
      KATEGORILER[kategoriId] || {
        ad: kategoriId,
        aciklama: 'Kategori bulunamadı',
        bgGradient: 'from-gray-200 to-gray-100',
        borderColor: 'border-gray-300',
        textColor: 'text-gray-800',
        badgeBg: 'bg-gray-200',
        badgeText: 'text-gray-700',
        dotColor: '#d1d5db',
        icon: '📁',
      },
    [kategoriId],
  )

  const Animasyon = kategoriId ? KATEGORI_ANIMASYON[kategoriId] : null

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      try {
        const res = await axios.get(`${API_BASE}/posts.php?category=${encodeURIComponent(kategoriId)}`)
        const normalized = Array.isArray(res.data)
          ? res.data.map((p) => ({
              ...p,
              createdAt: p.createdAt ?? p.created_at,
            }))
          : []
        setPosts(normalized)
      } catch (err) {
        toast.error('Postlar yüklenemedi!')
      } finally {
        setLoading(false)
      }
    }

    if (kategoriId) fetchPosts()
  }, [kategoriId])

  const editPost = async (id, newContent) => {
    try {
      await axios.put(`${API_BASE}/posts.php`, { post_id: id, content: newContent })
      setPosts(posts.map((post) => (post.id === id ? { ...post, content: newContent } : post)))
      toast.success('Paylaşım güncellendi! ✏️')
    } catch (err) {
      toast.error('Güncellenemedi!')
    }
  }

  const likePost = async (id) => {
    try {
      await axios.put(`${API_BASE}/posts.php`, { post_id: id })
      setPosts(posts.map((post) => (post.id === id ? { ...post, likes: (post.likes || 0) + 1 } : post)))
    } catch (err) {
      toast.error('Bir hata oluştu!')
    }
  }

  const deletePost = async (id) => {
    try {
      await axios.delete(`${API_BASE}/posts.php?id=${id}`)
      setPosts(posts.filter((post) => post.id !== id))
      toast.error('Paylaşım silindi 🗑️')
    } catch (err) {
      toast.error('Silinemedi!')
    }
  }

  const loadComments = async (postId) => {
    try {
      const res = await axios.get(`${API_BASE}/comments.php?post_id=${postId}`)
      const normalized = Array.isArray(res.data)
        ? res.data.map((c) => ({
            id: c.id,
            content: c.content ?? c.comment,
            createdAt: c.createdAt ?? c.created_at,
            user_id: c.user_id,
            post_id: c.post_id,
          }))
        : []
      setCommentsByPostId((prev) => ({ ...prev, [postId]: normalized }))
    } catch (err) {
      toast.error('Yorumlar yüklenemedi!')
    }
  }

  const addComment = async (postId, content) => {
    const user = JSON.parse(localStorage.getItem('user'))
    try {
      const res = await axios.post(`${API_BASE}/comments.php`, {
        user_id: user?.id || 1,
        post_id: postId,
        comment: content,
      })
      if (!res.data?.success) {
        toast.error(res.data?.message || 'Yorum eklenemedi!')
        return
      }
      const newComment = {
        id: Date.now(),
        content,
        createdAt: new Date().toISOString(),
        user_id: user?.id || 1,
        post_id: postId,
      }
      setCommentsByPostId((prev) => ({ ...prev, [postId]: [newComment, ...(prev[postId] || [])] }))
      toast.success('Yorum eklendi! 💬')
    } catch (err) {
      toast.error('Yorum eklenemedi!')
    }
  }

  const editComment = async (postId, commentId, newContent) => {
    try {
      await axios.put(`${API_BASE}/comments.php`, { comment_id: commentId, comment: newContent })
      setCommentsByPostId((prev) => ({
        ...prev,
        [postId]: (prev[postId] || []).map((c) => (c.id === commentId ? { ...c, content: newContent } : c)),
      }))
      toast.success('Yorum güncellendi! ✏️')
    } catch (err) {
      toast.error('Güncellenemedi!')
    }
  }

  const deleteComment = async (postId, commentId) => {
    try {
      await axios.delete(`${API_BASE}/comments.php?id=${commentId}`)
      setCommentsByPostId((prev) => ({
        ...prev,
        [postId]: (prev[postId] || []).filter((c) => c.id !== commentId),
      }))
      toast.error('Yorum silindi 🗑️')
    } catch (err) {
      toast.error('Silinemedi!')
    }
  }

  return (
    <div className="relative min-h-screen">
      {/* Gradient arka plan */}
      <div className={`fixed inset-0 bg-gradient-to-br ${kategori.bgGradient}`} style={{ zIndex: 0 }} />

      {/* Dot pattern */}
      <div
        className="fixed inset-0 opacity-15 pointer-events-none"
        style={{
          zIndex: 1,
          backgroundImage: `radial-gradient(circle, ${kategori.dotColor} 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Kategori animasyonu (arka plan) */}
      <div
        style={{
          zIndex: 2,
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.7,
          filter: 'contrast(1.05) saturate(1.1)',
        }}
      >
        {Animasyon && <Animasyon />}
      </div>

      {/* İçerik */}
      <div className="relative z-10 max-w-2xl mx-auto pt-6 sm:pt-8 pb-8 px-3 sm:px-4">
        <div className={`bg-white/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-md ${kategori.borderColor} border mb-4 sm:mb-6 text-center`}>
          <span className="text-5xl mb-3 block">{kategori.icon}</span>
          <h1 className={`text-3xl font-bold ${kategori.textColor} mb-2`}>{kategori.ad}</h1>
          <p className="text-gray-500">{kategori.aciklama}</p>
        </div>

        <div className={`bg-white/60 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-md ${kategori.borderColor} border`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <h2 className={`text-xl font-bold ${kategori.textColor}`}>📝 Paylaşımlar</h2>
            <Link to="/" className={`px-4 py-2 ${kategori.badgeBg} ${kategori.badgeText} rounded-xl font-medium hover:opacity-80 transition`}>
              🏠 Ana Sayfa
            </Link>
          </div>

          {loading ? (
            <p className="text-gray-400 text-center py-12 text-lg">Yükleniyor...</p>
          ) : posts.length === 0 ? (
            <p className="text-gray-400 text-center py-12 text-lg">Bu kategoride henüz paylaşım yok.</p>
          ) : (
            <PostList
              posts={posts}
              onLike={likePost}
              onDelete={deletePost}
              onEdit={editPost}
              commentsByPostId={commentsByPostId}
              onLoadComments={loadComments}
              onAddComment={addComment}
              onEditComment={editComment}
              onDeleteComment={deleteComment}
            />
          )}
        </div>
      </div>
    </div>
  )
}
