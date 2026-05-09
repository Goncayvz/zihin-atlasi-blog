import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordAgain, setShowPasswordAgain] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-300 via-blue-200 to-sky-200">
      <div className="bg-white/40 backdrop-blur-md rounded-2xl p-10 shadow-xl text-center w-[370px] border border-white/50">
        {/* SVG Pusula - Pastel renkli */}
        <svg viewBox="0 0 200 200" className="w-28 h-28 mx-auto mb-5 drop-shadow-md">
          <circle cx="100" cy="100" r="90" stroke="#7c3aed" strokeWidth="3" fill="none" opacity="0.7" />
          <text x="95" y="22" fontSize="14" fontWeight="bold" fill="#7c3aed">N</text>
          <text x="178" y="105" fontSize="14" fontWeight="bold" fill="#7c3aed">E</text>
          <text x="95" y="192" fontSize="14" fontWeight="bold" fill="#7c3aed">S</text>
          <text x="8" y="105" fontSize="14" fontWeight="bold" fill="#7c3aed">W</text>
          <g>
            <polygon points="100,30 95,100 105,100" fill="#c084fc" />
            <polygon points="100,170 95,100 105,100" fill="#60a5fa" />
            <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="4s" repeatCount="indefinite" />
          </g>
        </svg>

        <h2 className="text-2xl font-semibold mb-5 text-purple-800">Kayıt Ol 🌸</h2>
        <form>
          {/* Kullanıcı Adı */}
          <input 
            type="text" 
            placeholder="Kullanıcı Adı" 
            className="w-full p-3 mb-3 rounded-xl border border-purple-200 bg-white/70 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition" 
            required 
          />

          {/* E-posta */}
          <input 
            type="email" 
            placeholder="E-posta" 
            className="w-full p-3 mb-3 rounded-xl border border-purple-200 bg-white/70 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition" 
            required 
          />

          {/* Şifre */}
          <div className="relative mb-3">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Şifre" 
              className="w-full p-3 pr-12 rounded-xl border border-purple-200 bg-white/70 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition" 
              required 
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-500 hover:text-purple-700 transition"
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

          {/* Şifre Tekrar */}
          <div className="relative mb-4">
            <input 
              type={showPasswordAgain ? "text" : "password"} 
              placeholder="Şifre Tekrar" 
              className="w-full p-3 pr-12 rounded-xl border border-purple-200 bg-white/70 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition" 
              required 
            />
            <button 
              type="button"
              onClick={() => setShowPasswordAgain(!showPasswordAgain)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-500 hover:text-purple-700 transition"
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
            className="w-full p-3 bg-gradient-to-r from-purple-400 to-blue-400 text-white font-bold rounded-xl hover:from-purple-500 hover:to-blue-500 transition shadow-md"
          >
            Hesap Oluştur
          </button>
        </form>
        <p className="mt-4 text-sm text-purple-700">
          Hesabınız var mı? <Link to="/login" className="text-blue-600 font-semibold hover:underline">Giriş Yap</Link>
        </p>
      </div>
    </div>
  )
}