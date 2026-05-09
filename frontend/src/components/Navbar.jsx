import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  // Sayfa yüklenince localStorage'dan kullanıcıyı al
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
    <nav className="sticky top-0 z-50 flex justify-between items-center bg-gradient-to-r from-purple-300 via-blue-200 to-sky-200 px-5 py-3 shadow-md">
      {/* Sol taraf - Sadece Logo */}
      <div className="flex items-center">
        <img src="/Logo.jpg" alt="Logo" className="w-14 h-auto rounded-xl shadow-sm" />
      </div>
      
      {/* Başlık */}
      <h1 className="text-purple-800 text-xl font-bold drop-shadow-sm">
        Zihin Atlası Blog 🫠
      </h1>
      
      {/* Sağ taraf - Menü */}
      <div className="flex items-center gap-4">
        <Link to="/" className="text-2xl hover:scale-110 transition" title="Ana Sayfa">🏠</Link>
        
        {/* Giriş yapılmışsa kullanıcı adı + çıkış, yapılmamışsa giriş butonu */}
        {user ? (
          <>
            <span className="text-purple-700 text-sm font-medium">👤 {user.username}</span>
            <button onClick={cikisYap} className="text-red-500 hover:text-red-700 text-sm font-medium transition">Çıkış</button>
          </>
        ) : (
          <Link to="/login" className="text-purple-700 font-medium hover:text-purple-900 transition">Giriş</Link>
        )}
        
        <div className="relative">
          <button 
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-purple-700 font-medium hover:text-purple-900 transition"
          >
            Kategoriler ▼
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 top-8 bg-white/90 backdrop-blur-sm text-gray-700 min-w-[200px] rounded-xl shadow-lg z-10 border border-purple-100">
              <Link to="/kategori/saglikli-yasam" className="block px-4 py-3 hover:bg-purple-50 rounded-t-xl transition">🌿 Sağlıklı Yaşam</Link>
              <Link to="/kategori/yararli-bilgiler" className="block px-4 py-3 hover:bg-purple-50 transition">💡 Yararlı Bilgiler</Link>
              <Link to="/kategori/seyahat" className="block px-4 py-3 hover:bg-purple-50 transition">✈️ Seyahat ve Kültür</Link>
              <Link to="/kategori/kaybolanlar" className="block px-4 py-3 hover:bg-purple-50 rounded-b-xl transition">📜 Kaybolanlar ve Unutulanlar</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}