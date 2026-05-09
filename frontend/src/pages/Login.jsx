import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const res = await axios.post('http://localhost/zihin-atlasi-v2/backend/login.php', {
        username: formData.username,
        password: formData.password
      })
      
      if (res.data.success) {
        toast.success(`Hoş geldin ${res.data.user.username}! ✨`)
        localStorage.setItem('user', JSON.stringify(res.data.user))
        setTimeout(() => navigate('/'), 1000)
      } else {
        toast.error(res.data.message)
      }
    } catch (err) {
      toast.error('Sunucu hatası!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 via-sky-200 to-purple-200">
      <div className="bg-white/40 backdrop-blur-md rounded-2xl p-10 shadow-xl text-center w-[350px] border border-white/50">
        <svg viewBox="0 0 200 200" className="w-28 h-28 mx-auto mb-5 drop-shadow-md">
          <circle cx="100" cy="100" r="90" stroke="#3b82f6" strokeWidth="3" fill="none" opacity="0.7" />
          <text x="95" y="22" fontSize="14" fontWeight="bold" fill="#3b82f6">N</text>
          <text x="178" y="105" fontSize="14" fontWeight="bold" fill="#3b82f6">E</text>
          <text x="95" y="192" fontSize="14" fontWeight="bold" fill="#3b82f6">S</text>
          <text x="8" y="105" fontSize="14" fontWeight="bold" fill="#3b82f6">W</text>
          <g>
            <polygon points="100,30 95,100 105,100" fill="#60a5fa" />
            <polygon points="100,170 95,100 105,100" fill="#93c5fd" />
            <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="4s" repeatCount="indefinite" />
          </g>
        </svg>

        <h2 className="text-2xl font-semibold mb-5 text-blue-800">Hoş Geldiniz ✨</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Kullanıcı Adı"
            value={formData.username}
            onChange={(e) => setFormData({...formData, username: e.target.value})}
            className="w-full p-3 mb-3 rounded-xl border border-blue-200 bg-white/70 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" 
            required 
          />
          <div className="relative mb-4">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Şifre"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full p-3 pr-12 rounded-xl border border-blue-200 bg-white/70 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" 
              required 
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500 hover:text-blue-700 transition"
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                  <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                  <path d="m14.12 14.12a3 3 0 1 1-4.24-4.24" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>
          <button 
            type="submit"
            disabled={loading}
            className="w-full p-3 bg-gradient-to-r from-blue-400 to-sky-400 text-white font-bold rounded-xl hover:from-blue-500 hover:to-sky-500 transition shadow-md disabled:opacity-50"
          >
            {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
          </button>
        </form>
        <p className="mt-4 text-sm text-blue-700">
          Hesabınız yok mu? <Link to="/register" className="text-pink-500 font-semibold hover:underline">Kayıt Ol</Link>
        </p>
      </div>
    </div>
  )
}
