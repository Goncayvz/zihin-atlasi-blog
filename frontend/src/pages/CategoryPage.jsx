import { useParams, Link } from 'react-router-dom'

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
    icon: '🥗'
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
    icon: '🧠'
  },
  'seyahat': {
    ad: '✈️ Seyahat ve Kültür',
    aciklama: 'Gezi rehberleri, kültürel keşifler ve anılar',
    bgGradient: 'from-sky-200 via-blue-100 to-cyan-100',
    borderColor: 'border-orange-300',
    textColor: 'text-orange-800',
    badgeBg: 'bg-orange-200',
    badgeText: 'text-orange-700',
    dotColor: '#fdba74',
    icon: '🗺️'
  },
  'kaybolanlar': {
    ad: '📜 Kaybolanlar ve Unutulanlar',
    aciklama: 'Tarihten silinenler, unutulan gelenekler ve hikayeler',
    bgGradient: 'from-purple-200 via-violet-100 to-fuchsia-100',
    borderColor: 'border-purple-300',
    textColor: 'text-purple-800',
    badgeBg: 'bg-purple-200',
    badgeText: 'text-purple-700',
    dotColor: '#c4b5fd',
    icon: '🏛️'
  }
}

export default function CategoryPage() {
  const { kategoriId } = useParams()
  const kategori = KATEGORILER[kategoriId] || {
    ad: kategoriId,
    aciklama: 'Kategori bulunamadı',
    bgGradient: 'from-gray-200 to-gray-100',
    borderColor: 'border-gray-300',
    textColor: 'text-gray-800',
    badgeBg: 'bg-gray-200',
    badgeText: 'text-gray-700',
    dotColor: '#d1d5db',
    icon: '📂'
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${kategori.bgGradient} relative`}>
      {/* Dot pattern */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `radial-gradient(circle, ${kategori.dotColor} 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* İçerik */}
      <div className="relative z-10 max-w-2xl mx-auto pt-8 pb-8">
        {/* Kategori Başlık Kartı */}
        <div className={`bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-md ${kategori.borderColor} border mb-6 text-center`}>
          <span className="text-5xl mb-3 block">{kategori.icon}</span>
          <h1 className={`text-3xl font-bold ${kategori.textColor} mb-2`}>
            {kategori.ad}
          </h1>
          <p className="text-gray-500">{kategori.aciklama}</p>
        </div>

        {/* Paylaşımlar */}
        <div className={`bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-md ${kategori.borderColor} border`}>
          <h2 className={`text-xl font-bold ${kategori.textColor} mb-4`}>
            📝 Paylaşımlar
          </h2>
          <p className="text-gray-400 text-center py-12 text-lg">
            Bu kategoride henüz paylaşım yok.
          </p>
          <div className="text-center mt-4">
            <Link 
              to="/" 
              className={`inline-block px-6 py-3 ${kategori.badgeBg} ${kategori.badgeText} rounded-xl font-medium hover:opacity-80 transition`}
            >
              🏠 Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
