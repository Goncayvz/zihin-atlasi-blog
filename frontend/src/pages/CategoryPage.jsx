import { useParams } from 'react-router-dom'

const KATEGORI_ADLARI = {
  'saglikli-yasam': '🌿 Sağlıklı Yaşam',
  'yararli-bilgiler': '💡 Yararlı Bilgiler',
  'seyahat': '✈️ Seyahat ve Kültür',
  'kaybolanlar': '📜 Kaybolanlar ve Unutulanlar',
}

export default function CategoryPage() {
  const { kategoriId } = useParams()
  const kategoriAd = KATEGORI_ADLARI[kategoriId] || kategoriId

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-purple-100">
      <h2 className="text-xl font-bold mb-4 text-purple-800">
        {kategoriAd} Paylaşımları
      </h2>
      <p className="text-gray-400 text-center py-8">
        Bu kategoride henüz paylaşım yok.
      </p>
    </div>
  )
}