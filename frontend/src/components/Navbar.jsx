import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <nav className="flex justify-between items-center bg-blue-600/80 px-5 py-3 shadow-lg">
      <img src="/Logo.jpg" alt="Logo" className="w-20 h-auto rounded-lg" />
      <h1 className="text-white text-xl font-bold drop-shadow-md">
        Zihin Atlası Blog 🫠
      </h1>
      <div className="flex items-center gap-5">
        <Link to="/login" className="text-white hover:text-yellow-300">Giriş</Link>
        
        <div className="relative">
          <button 
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-white hover:text-yellow-300"
          >
            Kategoriler ▼
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 top-8 bg-white text-gray-800 min-w-[200px] rounded-lg shadow-lg z-10">
              <Link to="/kategori/saglikli-yasam" className="block px-4 py-3 hover:bg-gray-100">Sağlıklı Yaşam</Link>
              <Link to="/kategori/yararli-bilgiler" className="block px-4 py-3 hover:bg-gray-100">Yararlı Bilgiler</Link>
              <Link to="/kategori/seyahat" className="block px-4 py-3 hover:bg-gray-100">Seyahat ve Kültür</Link>
              <Link to="/kategori/kaybolanlar" className="block px-4 py-3 hover:bg-gray-100">Kaybolanlar ve Unutulanlar</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}