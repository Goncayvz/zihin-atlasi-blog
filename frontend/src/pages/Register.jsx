import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordAgain, setShowPasswordAgain] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordAgain: ''
  })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (formData.password !== formData.passwordAgain) {
      toast.error('Şifreler eşleşmiyor!')
      return
    }

    if (formData.password.length < 6) {
      toast.error('Şifre en az 6 karakter olmalı!')
      return
    }

    setLoading(true)
    try {
      const res = await axios.post('http://localhost/zihin-atlasi-v2/backend/register.php', {
        username: formData.username,
        email: formData.email,
        password: formData.password
      })
      
      if (res.data.success) {
        toast.success('Kayıt başarılı! Giriş yapabilirsiniz. 🌸')
        setTimeout(() => navigate('/login'), 1500)
      } else {
        toast.error(res.data.message)
      }
    } catch (err) {
      toast.error('Sunucu hatası! Lütfen tekrar deneyin.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-300 via-purple-200 to-blue-200">
      <div className="bg-white/40 backdrop-blur-md rounded-2xl p-10 shadow-xl text-center w-[370px] border border-white/50">
        <svg viewBox="0 0 200 200" className="w-28 h-28 mx-auto mb-5 drop-shadow-md">
          <circle cx="100" cy="100" r="90" stroke="#ec4899" strokeWidth="3" fill="none" opacity="0.7" />
          <text x="95" y="22" fontSize="14" fontWeight="bold" fill="#ec4899">N</text>
          <text x="178" y="105" fontSize="14" fontWeight="bold" fill="#ec4899">E</text>
          <text x="95" y="192" fontSize="14" fontWeight="bold" fill="#ec4899">S</text>
          <text x="8" y="105" fontSize="14" fontWeight="bold" fill="#ec4899">W</text>
          <g>
            <polygon points="100,30 95,100 105,100" fill="#f9a8d4" />
            <polygon points="100,170 95,100 105,100" fill="#c084fc" />
            <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="4s" repeatCount="indefinite" />
          </g>
        </svg>

        <h2 className="text-2xl font-semibold mb-5 text-pink-800">Kayıt Ol 🌸</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Kullanıcı Adı"
            value={formData.username}
            onChange={(e) => setFormData({...formData, username: e.target.value})}
            className="w-full p-3 mb-3 rounded-xl border border-pink-200 bg-white/70 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition" 
            required 
          />
          <input 
            type="email" 
            placeholder="E-posta"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full p-3 mb-3 rounded-xl border border-pink-200 bg-white/70 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition" 
            required 
          />
          <div className="relative mb-3">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Şifre"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full p-3 pr-12 rounded-xl border border-pink-200 bg-white/70 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition" 
              required 
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-pink-500 hover:text-pink-700 transition"
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
          <div className="relative mb-4">
            <input 
              type={showPasswordAgain ? "text" : "password"} 
              placeholder="Şifre Tekrar"
              value={formData.passwordAgain}
              onChange={(e) => setFormData({...formData, passwordAgain: e.target.value})}
              className="w-full p-3 pr-12 rounded-xl border border-pink-200 bg-white/70 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition" 
              required 
            />
            <button 
              type="button"
              onClick={() => setShowPasswordAgain(!showPasswordAgain)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-pink-500 hover:text-pink-700 transition"
            >
              {showPasswordAgain ? (
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
            className="w-full p-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white font-bold rounded-xl hover:from-pink-500 hover:to-purple-500 transition shadow-md disabled:opacity-50"
          >
            {loading ? 'Kaydediliyor...' : 'Hesap Oluştur'}
          </button>
        </form>
        <p className="mt-4 text-sm text-pink-700">
          Hesabınız var mı? <Link to="/login" className="text-blue-500 font-semibold hover:underline">Giriş Yap</Link>
        </p>
      </div>
    </div>
  )
}
