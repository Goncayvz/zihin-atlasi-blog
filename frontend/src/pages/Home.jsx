import { useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import PostForm from '../components/PostForm'
import PostList from '../components/PostList'
import CommentForm from '../components/CommentForm'
import CommentList from '../components/CommentList'

const API_BASE = 'http://localhost/zihin-atlasi-v2/backend'

// 🌿 Sağlıklı Yaşam - Yaprak animasyonu
function YaprakAnimasyonu() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.12))' }}
    >
      <span className="absolute text-4xl animate-fall1 opacity-45" style={{ left: '5%' }}>🍃</span>
      <span className="absolute text-3xl animate-fall2 opacity-40" style={{ left: '25%' }}>🌿</span>
      <span className="absolute text-4xl animate-fall3 opacity-40" style={{ left: '50%' }}>🍂</span>
      <span className="absolute text-3xl animate-fall1 opacity-35" style={{ left: '75%', animationDelay: '3s' }}>🌱</span>
      <span className="absolute text-4xl animate-fall2 opacity-40" style={{ left: '90%', animationDelay: '5s' }}>🍃</span>
      <style>{`
        @keyframes fall1 {
          0% { top: -5%; transform: rotate(0deg) translateX(0); opacity: 0.25; }
          100% { top: 105%; transform: rotate(360deg) translateX(50px); opacity: 0; }
        }
        @keyframes fall2 {
          0% { top: -5%; transform: rotate(0deg) translateX(0); opacity: 0.2; }
          100% { top: 105%; transform: rotate(-360deg) translateX(-30px); opacity: 0; }
        }
        @keyframes fall3 {
          0% { top: -5%; transform: rotate(0deg) translateX(0); opacity: 0.2; }
          100% { top: 105%; transform: rotate(540deg) translateX(20px); opacity: 0; }
        }
        .animate-fall1 { animation: fall1 8s linear infinite; }
        .animate-fall2 { animation: fall2 10s linear infinite; }
        .animate-fall3 { animation: fall3 9s linear infinite; }
      `}</style>
    </div>
  )
}

// 💡 Yararlı Bilgiler - Işık animasyonu
function IsikAnimasyonu() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.10))' }}
    >
      <span className="absolute text-4xl animate-glow1 opacity-35" style={{ top: '10%', left: '10%' }}>✨</span>
      <span className="absolute text-3xl animate-glow2 opacity-30" style={{ top: '30%', left: '70%' }}>⭐</span>
      <span className="absolute text-5xl animate-glow1 opacity-28" style={{ top: '60%', left: '30%', animationDelay: '2s' }}>💡</span>
      <span className="absolute text-3xl animate-glow2 opacity-30" style={{ top: '80%', left: '80%', animationDelay: '1s' }}>✨</span>
      <span className="absolute text-4xl animate-glow1 opacity-30" style={{ top: '50%', left: '50%', animationDelay: '3s' }}>⭐</span>
      <style>{`
        @keyframes glow1 {
          0%, 100% { transform: scale(1); opacity: 0.12; }
          50% { transform: scale(1.6); opacity: 0.28; }
        }
        @keyframes glow2 {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.1; }
          50% { transform: scale(1.4) rotate(15deg); opacity: 0.25; }
        }
        .animate-glow1 { animation: glow1 3s ease-in-out infinite; }
        .animate-glow2 { animation: glow2 4s ease-in-out infinite; }
      `}</style>
    </div>
  )
}

// ✈️ Seyahat - Uçak animasyonu
function UcakAnimasyonu() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.12))' }}
    >
      <span className="absolute text-5xl animate-ucak opacity-25" style={{ top: '28%' }}>✈️</span>
      <span className="absolute text-6xl animate-ucak opacity-18" style={{ top: '62%', animationDelay: '4s' }}>✈️</span>
      <span className="absolute text-5xl animate-bulut opacity-35" style={{ top: '10%', left: '20%' }}>☁️</span>
      <span className="absolute text-6xl animate-bulut opacity-30" style={{ top: '40%', left: '60%', animationDelay: '2s' }}>☁️</span>
      <span className="absolute text-5xl animate-bulut opacity-28" style={{ top: '70%', left: '30%', animationDelay: '4s' }}>☁️</span>
      <span className="absolute text-5xl animate-bulut opacity-26" style={{ top: '22%', left: '78%', animationDelay: '1s' }}>☁️</span>
      <span className="absolute text-4xl animate-bulut opacity-24" style={{ top: '58%', left: '12%', animationDelay: '3s' }}>☁️</span>
      <span className="absolute text-6xl animate-bulut opacity-22" style={{ top: '82%', left: '72%', animationDelay: '5s' }}>☁️</span>
      <span className="absolute text-5xl animate-bulut opacity-30" style={{ top: '15%', left: '45%', animationDelay: '6s' }}>☁️</span>
      <span className="absolute text-4xl animate-bulut opacity-26" style={{ top: '33%', left: '10%', animationDelay: '7s' }}>☁️</span>
      <span className="absolute text-6xl animate-bulut opacity-24" style={{ top: '48%', left: '82%', animationDelay: '8s' }}>☁️</span>
      <span className="absolute text-5xl animate-bulut opacity-22" style={{ top: '76%', left: '8%', animationDelay: '9s' }}>☁️</span>
      <span className="absolute text-4xl animate-bulut opacity-20" style={{ top: '88%', left: '45%', animationDelay: '10s' }}>☁️</span>
      <style>{`
        @keyframes ucak {
          0% { left: -10%; transform: rotate(-8deg) translateY(0); opacity: 0; }
          10% { opacity: 0.2; }
          90% { opacity: 0.2; }
          100% { left: 110%; transform: rotate(5deg) translateY(-20px); opacity: 0; }
        }
        @keyframes bulut {
          0%, 100% { transform: translateX(0); opacity: 0.1; }
          50% { transform: translateX(30px); opacity: 0.2; }
        }
        .animate-ucak { animation: ucak 7s ease-in-out infinite; position: absolute; }
        .animate-bulut { animation: bulut 10s ease-in-out infinite; position: absolute; }
      `}</style>
    </div>
  )
}

// 📜 Kaybolanlar - Süzülme animasyonu
function TozAnimasyonu() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.10))' }}
    >
      <span className="absolute text-5xl animate-toz1 opacity-40" style={{ top: '12%', left: '10%' }}>📜</span>
      <span className="absolute text-4xl animate-toz2 opacity-32" style={{ top: '40%', left: '70%' }}>🕯️</span>
      <span className="absolute text-5xl animate-toz1 opacity-32" style={{ top: '72%', left: '25%', animationDelay: '2s' }}>📜</span>
      <span className="absolute text-4xl animate-toz2 opacity-30" style={{ top: '22%', left: '85%', animationDelay: '1s' }}>🕯️</span>
      <span className="absolute text-5xl animate-toz1 opacity-32" style={{ top: '55%', left: '45%', animationDelay: '3s' }}>📜</span>
      <span className="absolute text-4xl animate-toz2 opacity-26" style={{ top: '62%', left: '12%', animationDelay: '4s' }}>🕯️</span>
      <span className="absolute text-5xl animate-toz1 opacity-26" style={{ top: '30%', left: '35%', animationDelay: '5s' }}>📜</span>
      <style>{`
        @keyframes toz1 {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.12; }
          25% { transform: translateY(-20px) rotate(5deg); opacity: 0.2; }
          50% { transform: translateY(-10px) rotate(-3deg); opacity: 0.1; }
          75% { transform: translateY(-25px) rotate(8deg); opacity: 0.18; }
        }
        @keyframes toz2 {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.1; }
          50% { transform: translateY(-15px) rotate(-5deg); opacity: 0.2; }
        }
        .animate-toz1 { animation: toz1 7s ease-in-out infinite; }
        .animate-toz2 { animation: toz2 5s ease-in-out infinite; }
      `}</style>
    </div>
  )
}

const KATEGORI_ANIMASYON = {
  'saglikli-yasam': YaprakAnimasyonu,
  'yararli-bilgiler': IsikAnimasyonu,
  seyahat: UcakAnimasyonu,
  kaybolanlar: TozAnimasyonu,
}

export default function Home() {
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  const [aktifKategori, setAktifKategori] = useState('yararli-bilgiler')

  const Animasyon = aktifKategori ? KATEGORI_ANIMASYON[aktifKategori] : null

  // POST İŞLEMLERİ (API BAĞLANTILI)
  const addPost = async (content, category) => {
    const user = JSON.parse(localStorage.getItem('user'))
    
    try {
      const res = await axios.post(`${API_BASE}/posts.php`, {
        user_id: user?.id || 1,
        content,
        category
      })
      
      if (res.data.success) {
        const newPost = {
          id: res.data.id,
          content,
          category,
          likes: 0,
          created_at: new Date().toISOString(),
          username: user?.username || 'Misafir'
        }
        setPosts([newPost, ...posts])
        setAktifKategori(category)
        toast.success('Paylaşım eklendi! ✨')
      }
    } catch (err) {
      toast.error('Paylaşım eklenemedi!')
    }
  }

  const editPost = async (id, newContent) => {
    try {
      await axios.put(`${API_BASE}/posts.php`, { 
        post_id: id, 
        content: newContent 
      })
      setPosts(posts.map((post) => (post.id === id ? { ...post, content: newContent } : post)))
      toast.success('Paylaşım güncellendi! ✏️')
    } catch (err) {
      toast.error('Güncellenemedi!')
    }
  }

  const likePost = async (id) => {
    try {
      await axios.put(`${API_BASE}/posts.php`, { post_id: id })
      setPosts(posts.map((post) => (post.id === id ? { ...post, likes: post.likes + 1 } : post)))
      toast('Beğendin! 👍', { icon: '❤️' })
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

  // YORUM İŞLEMLERİ
  const addComment = (content) => {
    const newComment = {
      id: Date.now(),
      content,
      createdAt: new Date().toISOString(),
    }
    setComments([newComment, ...comments])
    toast.success('Yorum eklendi! 💬')
  }

  const editComment = (id, newContent) => {
    setComments(comments.map((comment) => (comment.id === id ? { ...comment, content: newContent } : comment)))
    toast.success('Yorum güncellendi! ✏️')
  }

  const deleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id))
    toast.error('Yorum silindi 🗑️')
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

      <div style={{ zIndex: 1, position: 'fixed', inset: 0, pointerEvents: 'none' }}>
        {Animasyon && <Animasyon />}
      </div>

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

      <div className="relative max-w-2xl mx-auto pt-8 pb-8 px-4" style={{ zIndex: 10 }}>
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-purple-100 mb-6">
          <PostForm onPostSubmit={addPost} onCategoryChange={setAktifKategori} />
        </div>

        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-purple-100 mb-6">
          <h2 className="text-xl font-bold mb-4 text-purple-800">
            📝 Paylaşımlar
            {posts.length > 0 && <span className="text-sm font-normal text-purple-500 ml-2">({posts.length})</span>}
          </h2>
          <PostList posts={posts} onLike={likePost} onDelete={deletePost} onEdit={editPost} />
        </div>

        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-purple-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-purple-800">
              💬 Yorumlar
              {comments.length > 0 && <span className="text-sm font-normal text-purple-500 ml-2">({comments.length})</span>}
            </h2>
            <CommentForm onCommentSubmit={addComment} />
          </div>
          <CommentList comments={comments} onEdit={editComment} onDelete={deleteComment} />
        </div>
      </div>
    </div>
  )
}
