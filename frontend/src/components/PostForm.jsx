import { useState } from 'react'

const KATEGORILER = [
  { 
    id: 'saglikli-yasam', 
    ad: '🌿 Sağlıklı Yaşam', 
    color: 'bg-green-100 text-green-700 border-green-300',
    bgAnim: 'from-green-50 to-emerald-50',
    emoji: '🍃'
  },
  { 
    id: 'yararli-bilgiler', 
    ad: '💡 Yararlı Bilgiler', 
    color: 'bg-blue-100 text-blue-700 border-blue-300',
    bgAnim: 'from-blue-50 to-sky-50',
    emoji: '💡'
  },
  { 
    id: 'seyahat', 
    ad: '✈️ Seyahat ve Kültür', 
    color: 'bg-orange-100 text-orange-700 border-orange-300',
    bgAnim: 'from-sky-50 to-cyan-50',
    emoji: '✈️'
  },
  { 
    id: 'kaybolanlar', 
    ad: '📜 Kaybolanlar ve Unutulanlar', 
    color: 'bg-purple-100 text-purple-700 border-purple-300',
    bgAnim: 'from-purple-50 to-violet-50',
    emoji: '📜'
  },
]

export default function PostForm({ onPostSubmit, onCategoryChange }) {
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('yararli-bilgiler')
  const [isOpen, setIsOpen] = useState(false)

  const seciliKategori = KATEGORILER.find(k => k.id === category)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (content.trim()) {
      onPostSubmit(content, category)
      setContent('')
      setCategory('yararli-bilgiler')
      if (onCategoryChange) onCategoryChange('yararli-bilgiler')
      setIsOpen(false)
    }
  }

  return (
    <div className="relative">
      {!isOpen ? (
        <button 
          onClick={() => {
            setIsOpen(true)
            if (onCategoryChange) onCategoryChange(category)
          }}
          className="flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium transition text-sm sm:text-base"
        >
          <span className="text-2xl">🖊️</span>
          <span>Bugün ne paylaşmak istersiniz?</span>
        </button>
      ) : (
        <form onSubmit={handleSubmit} className={`bg-gradient-to-br ${seciliKategori.bgAnim} p-4 rounded-xl border ${seciliKategori.color.split(' ')[2]} relative overflow-hidden transition-all duration-500`}>
          <div className="absolute -top-2 -right-2 text-4xl opacity-20 animate-bounce-slow">
            {seciliKategori.emoji}
          </div>
          <div className="absolute -bottom-2 -left-2 text-3xl opacity-10 animate-pulse">
            {seciliKategori.emoji}
          </div>
          
          <textarea 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Düşüncelerinizi yazın..."
            className="w-full p-3 rounded-xl border border-purple-200 bg-white/80 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400 transition text-gray-700 relative z-10"
            rows="3"
            autoFocus
          />
          
          <div className="mt-3 relative z-10">
            <label className="text-sm text-purple-700 font-medium mb-2 block">Kategori seçin:</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {KATEGORILER.map(kat => (
                <button
                  key={kat.id}
                  type="button"
                  onClick={() => {
                    setCategory(kat.id)
                    if (onCategoryChange) onCategoryChange(kat.id)
                  }}
                  className={`text-sm px-3 py-2 rounded-lg border transition text-left ${
                    category === kat.id 
                      ? kat.color + ' shadow-sm scale-105' 
                      : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {kat.ad}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 justify-end mt-3 relative z-10">
            <button 
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-gray-500 hover:text-gray-700 transition"
            >
              İptal
            </button>
            <button 
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-purple-400 to-blue-400 text-white font-medium rounded-xl hover:from-purple-500 hover:to-blue-500 transition shadow-sm"
            >
              Paylaş
            </button>
          </div>
        </form>
      )}
      
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(10deg); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
