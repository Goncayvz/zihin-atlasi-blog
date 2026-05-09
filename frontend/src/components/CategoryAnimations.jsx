// Category-specific background animations used on Home and Category pages.

// 🌿 Sağlıklı Yaşam - Yaprak animasyonu
export function YaprakAnimasyonu() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.12))' }}
    >
      <span className="absolute text-4xl animate-fall1 opacity-45" style={{ left: '5%' }}>
        🍃
      </span>
      <span className="absolute text-3xl animate-fall2 opacity-40" style={{ left: '25%' }}>
        🌿
      </span>
      <span className="absolute text-4xl animate-fall3 opacity-40" style={{ left: '50%' }}>
        🍂
      </span>
      <span className="absolute text-3xl animate-fall1 opacity-35" style={{ left: '75%', animationDelay: '3s' }}>
        🌱
      </span>
      <span className="absolute text-4xl animate-fall2 opacity-40" style={{ left: '90%', animationDelay: '5s' }}>
        🍃
      </span>
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
export function IsikAnimasyonu() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.10))' }}
    >
      <span className="absolute text-4xl animate-glow1 opacity-35" style={{ top: '10%', left: '10%' }}>
        ✨
      </span>
      <span className="absolute text-3xl animate-glow2 opacity-30" style={{ top: '30%', left: '70%' }}>
        ⭐
      </span>
      <span
        className="absolute text-5xl animate-glow1 opacity-28"
        style={{ top: '60%', left: '30%', animationDelay: '2s' }}
      >
        💡
      </span>
      <span
        className="absolute text-3xl animate-glow2 opacity-30"
        style={{ top: '80%', left: '80%', animationDelay: '1s' }}
      >
        ✨
      </span>
      <span
        className="absolute text-4xl animate-glow1 opacity-30"
        style={{ top: '50%', left: '50%', animationDelay: '3s' }}
      >
        ⭐
      </span>
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

// ✈️ Seyahat - Uçak/Bulut animasyonu
export function UcakAnimasyonu() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.12))' }}
    >
      {/* Hareketli uçaklar (sabit değil) */}
      <span className="absolute text-5xl animate-ucak opacity-25" style={{ top: '28%' }}>
        ✈️
      </span>
      <span className="absolute text-6xl animate-ucak opacity-18" style={{ top: '62%', animationDelay: '4s' }}>
        ✈️
      </span>

      {/* Bulutlar */}
      <span className="absolute text-5xl animate-bulut opacity-35" style={{ top: '10%', left: '20%' }}>
        ☁️
      </span>
      <span className="absolute text-6xl animate-bulut opacity-30" style={{ top: '40%', left: '60%', animationDelay: '2s' }}>
        ☁️
      </span>
      <span className="absolute text-5xl animate-bulut opacity-28" style={{ top: '70%', left: '30%', animationDelay: '4s' }}>
        ☁️
      </span>
      <span className="absolute text-5xl animate-bulut opacity-26" style={{ top: '22%', left: '78%', animationDelay: '1s' }}>
        ☁️
      </span>
      <span className="absolute text-4xl animate-bulut opacity-24" style={{ top: '58%', left: '12%', animationDelay: '3s' }}>
        ☁️
      </span>
      <span className="absolute text-6xl animate-bulut opacity-22" style={{ top: '82%', left: '72%', animationDelay: '5s' }}>
        ☁️
      </span>
      <span className="absolute text-5xl animate-bulut opacity-30" style={{ top: '15%', left: '45%', animationDelay: '6s' }}>
        ☁️
      </span>
      <span className="absolute text-4xl animate-bulut opacity-26" style={{ top: '33%', left: '10%', animationDelay: '7s' }}>
        ☁️
      </span>
      <span className="absolute text-6xl animate-bulut opacity-24" style={{ top: '48%', left: '82%', animationDelay: '8s' }}>
        ☁️
      </span>
      <span className="absolute text-5xl animate-bulut opacity-22" style={{ top: '76%', left: '8%', animationDelay: '9s' }}>
        ☁️
      </span>
      <span className="absolute text-4xl animate-bulut opacity-20" style={{ top: '88%', left: '45%', animationDelay: '10s' }}>
        ☁️
      </span>

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
export function TozAnimasyonu() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.10))' }}
    >
      <span className="absolute text-5xl animate-toz1 opacity-40" style={{ top: '12%', left: '10%' }}>
        📜
      </span>
      <span className="absolute text-4xl animate-toz2 opacity-32" style={{ top: '40%', left: '70%' }}>
        🕯️
      </span>
      <span className="absolute text-5xl animate-toz1 opacity-32" style={{ top: '72%', left: '25%', animationDelay: '2s' }}>
        📜
      </span>
      <span className="absolute text-4xl animate-toz2 opacity-30" style={{ top: '22%', left: '85%', animationDelay: '1s' }}>
        🕯️
      </span>
      <span className="absolute text-5xl animate-toz1 opacity-32" style={{ top: '55%', left: '45%', animationDelay: '3s' }}>
        📜
      </span>
      <span className="absolute text-4xl animate-toz2 opacity-26" style={{ top: '62%', left: '12%', animationDelay: '4s' }}>
        🕯️
      </span>
      <span className="absolute text-5xl animate-toz1 opacity-26" style={{ top: '30%', left: '35%', animationDelay: '5s' }}>
        📜
      </span>
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

export const KATEGORI_ANIMASYON = {
  'saglikli-yasam': YaprakAnimasyonu,
  'yararli-bilgiler': IsikAnimasyonu,
  seyahat: UcakAnimasyonu,
  kaybolanlar: TozAnimasyonu,
}

