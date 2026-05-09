import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) setUser(JSON.parse(savedUser))
  }, [])

  const cikisYap = () => {
    localStorage.removeItem('user')
    setUser(null)
    navigate('/')
  }

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-purple-300 via-blue-200 to-sky-200 shadow-md">
      <div className="flex items-center justify-between gap-2 px-3 sm:px-5 py-2 sm:py-3">
        <div className="flex items-center">
          <img src="/Logo.jpg" alt="Logo" className="w-10 sm:w-14 h-auto rounded-xl shadow-sm" />
        </div>

        <h1 className="text-purple-800 font-bold drop-shadow-sm text-sm sm:text-xl truncate max-w-[44vw] sm:max-w-none">
          Zihin Atlası Blog 🫠
        </h1>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link to="/" className="text-xl sm:text-2xl hover:scale-110 transition" title="Ana Sayfa">
            🏠
          </Link>

          {user ? (
            <>
              <span className="hidden sm:inline text-purple-700 text-sm font-medium">👤 {user.username}</span>
              <button onClick={cikisYap} className="text-red-600 hover:text-red-800 text-sm font-medium transition">
                Çıkış
              </button>
            </>
          ) : (
            <Link to="/login" className="text-purple-700 font-medium hover:text-purple-900 transition text-sm sm:text-base">
              Giriş
            </Link>
          )}

          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-purple-700 font-medium hover:text-purple-900 transition text-sm sm:text-base whitespace-nowrap"
            >
              Kategoriler ▼
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 top-9 bg-white/90 backdrop-blur-sm text-gray-700 min-w-[180px] sm:min-w-[220px] rounded-xl shadow-lg z-10 border border-purple-100 overflow-hidden">
                <Link to="/kategori/saglikli-yasam" className="block px-4 py-3 hover:bg-purple-50 transition">
                  🌿 Sağlıklı Yaşam
                </Link>
                <Link to="/kategori/yararli-bilgiler" className="block px-4 py-3 hover:bg-purple-50 transition">
                  💡 Yararlı Bilgiler
                </Link>
                <Link to="/kategori/seyahat" className="block px-4 py-3 hover:bg-purple-50 transition">
                  ✈️ Seyahat ve Kültür
                </Link>
                <Link to="/kategori/kaybolanlar" className="block px-4 py-3 hover:bg-purple-50 transition">
                  📜 Kaybolanlar ve Unutulanlar
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

