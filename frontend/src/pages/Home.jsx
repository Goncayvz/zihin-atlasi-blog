import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { KATEGORI_ANIMASYON } from '../components/CategoryAnimations'

const API_BASE = 'http://localhost/zihin-atlasi-v2/backend'

export default function Home() {
  const [posts, setPosts] = useState([])
  const [aktifKategori, setAktifKategori] = useState('yararli-bilgiler')
  const [commentsByPostId, setCommentsByPostId] = useState({})

  const Animasyon = aktifKategori ? KATEGORI_ANIMASYON[aktifKategori] : null

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${API_BASE}/posts.php`)
        const normalized = Array.isArray(res.data)
          ? res.data.map((p) => ({
              ...p,
              createdAt: p.createdAt ?? p.created_at,
            }))
          : []
        setPosts(normalized)
      } catch {
        toast.error('Paylaşımlar yüklenemedi!')
      }
    }
    fetchPosts()
  }, [])

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
    } catch {
      toast.error('Yorumlar yüklenemedi!')
    }
  }

  // POST İŞLEMLERİ (API)
  const addPost = async (content, category) => {
    const user = JSON.parse(localStorage.getItem('user'))

    try {
      const res = await axios.post(`${API_BASE}/posts.php`, {
        user_id: user?.id || 1,
        content,
        category,
      })

      if (res.data.success) {
        const newPost = {
          id: res.data.id,
          content,
          category,
          likes: 0,
          createdAt: new Date().toISOString(),
          username: user?.username || 'Misafir',
        }
        setPosts([newPost, ...posts])
        setAktifKategori(category)
        toast.success('Paylaşım eklendi! ✨')
      } else {
        toast.error(res.data.message || 'Paylaşım eklenemedi!')
      }
    } catch {
      toast.error('Paylaşım eklenemedi!')
    }
  }

  const editPost = async (id, newContent) => {
    try {
      await axios.put(`${API_BASE}/posts.php`, { post_id: id, content: newContent })
      setPosts(posts.map((post) => (post.id === id ? { ...post, content: newContent } : post)))
      toast.success('Paylaşım güncellendi! ✏️')
    } catch {
      toast.error('Güncellenemedi!')
    }
  }

  const likePost = async (id) => {
    try {
      await axios.put(`${API_BASE}/posts.php`, { post_id: id })
      setPosts(posts.map((post) => (post.id === id ? { ...post, likes: (post.likes || 0) + 1 } : post)))
    } catch {
      toast.error('Bir hata oluştu!')
    }
  }

  const deletePost = async (id) => {
    try {
      await axios.delete(`${API_BASE}/posts.php?id=${id}`)
      setPosts(posts.filter((post) => post.id !== id))
      toast.error('Paylaşım silindi 🗑️')
    } catch {
      toast.error('Silinemedi!')
    }
  }

  // YORUM İŞLEMLERİ (API)
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
    } catch {
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
    } catch {
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
    } catch {
      toast.error('Silinemedi!')
    }
  }

  const arkaPlan = () => {
    switch (aktifKategori) {
      case 'saglikli-yasam':
        return 'from-green-200 via-emerald-100 to-teal-100'
      case 'yararli-bilgiler':
        return 'from-blue-200 via-sky-100 to-indigo-100'
      case 'seyahat':
        return 'from-sky-200 via-blue-100 to-cyan-100'
      case 'kaybolanlar':
        return 'from-purple-200 via-violet-100 to-fuchsia-100'
      default:
        return 'from-purple-50 via-blue-50 to-pink-50'
    }
  }

  return (
    <div className="relative">
      <div className={`fixed inset-0 bg-gradient-to-br ${arkaPlan()} transition-all duration-1000`} style={{ zIndex: 0 }} />

      {/* Animasyon: arka plan üstünde */}
      <div style={{ zIndex: 1, position: 'fixed', inset: 0, pointerEvents: 'none' }}>{Animasyon && <Animasyon />}</div>

      {/* Animasyon: kartların üstünde */}
      <div
        style={{
          zIndex: 20,
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          opacity: aktifKategori === 'kaybolanlar' ? 0.6 : 0.45,
        }}
      >
        {Animasyon && <Animasyon />}
      </div>

      <div className="relative max-w-2xl mx-auto pt-6 sm:pt-8 pb-8 px-3 sm:px-4" style={{ zIndex: 10 }}>
        <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-md border border-purple-100 mb-4 sm:mb-6">
          <PostForm onPostSubmit={addPost} onCategoryChange={setAktifKategori} />
        </div>

        <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-md border border-purple-100 mb-6">
          <h2 className="text-xl font-bold mb-4 text-purple-800">
            📝 Paylaşımlar
            {posts.length > 0 && <span className="text-sm font-normal text-purple-500 ml-2">({posts.length})</span>}
          </h2>
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
        </div>
      </div>
    </div>
  )
}
