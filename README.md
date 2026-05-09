# 🧠 Zihin Atlası Blog

Modern, kategori bazlı full-stack mini blog uygulaması.  
Frontend tarafı React + Tailwind CSS, backend tarafı PHP + MySQL ile geliştirilmiştir.

---

# 🚀 Özellikler

- 🔐 Kullanıcı kayıt / giriş sistemi
- 📝 Blog paylaşımı oluşturma, düzenleme ve silme (CRUD)
- 💬 Post altında yorum sistemi
- 👍 Beğeni sistemi
- 🗂️ Kategori filtreleme sistemi
- 🎨 Kategoriye özel animasyonlu arka planlar
- 📱 Responsive mobil uyumlu tasarım
- 🔔 Toast bildirimleri
- 👁️ Şifre göster / gizle özelliği

---

# 🛠️ Kullanılan Teknolojiler

| Katman | Teknoloji |
|--------|-----------|
| Frontend | React, Tailwind CSS, Vite |
| Backend | PHP REST API |
| Database | MySQL |
| Araçlar | Laragon, Git, phpMyAdmin |
| Kütüphaneler | Axios, React Router, React Hot Toast |

---

# 📂 Proje Yapısı

```bash
zihin-atlasi-v2/
├── backend/
│   ├── schema.sql
│   ├── db.php
│   ├── register.php
│   ├── login.php
│   ├── posts.php
│   └── comments.php
│
├── frontend/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── assets/
│       └── services/
│
├── docs/
│   └── screenshots/
│
└── README.md
```

---

# ⚙️ Kurulum

## 1. Projeyi Klonla

```bash
git clone https://github.com/Goncayvz/zihin-atlasi-blog.git
cd zihin-atlasi-v2
```

---

## 2. Backend Kurulumu

Laragon üzerinde Apache ve MySQL servislerini başlat.
XAMPP de kullanabirsiniz.

### Veritabanını oluştur

```sql
CREATE DATABASE IF NOT EXISTS zihin_atlasi
CHARACTER SET utf8mb4
COLLATE utf8mb4_turkish_ci;
```

Ardından proje içerisindeki:

```bash
/backend/schema.sql
```

dosyasını phpMyAdmin üzerinden içe aktar.

Bu dosya:
- users tablosu
- posts tablosu
- comments tablosu
- foreign key ilişkileri

içermektedir.

---

## 3. Frontend Kurulumu

```bash
cd frontend
npm install
npm run dev
```

Uygulama:

```bash
http://localhost:5173
```

---

# 🔌 API Endpointleri

## Posts API

| Method | Endpoint | Açıklama |
|--------|----------|----------|
| GET | `/backend/posts.php` | Tüm postları getir |
| POST | `/backend/posts.php` | Yeni post oluştur |
| PUT | `/backend/posts.php` | Post güncelle / beğeni |
| DELETE | `/backend/posts.php?id=1` | Post sil |

---

## Comments API

| Method | Endpoint | Açıklama |
|--------|----------|----------|
| GET | `/backend/comments.php?post_id=1` | Post yorumlarını getir |
| POST | `/backend/comments.php` | Yeni yorum oluştur |
| PUT | `/backend/comments.php` | Yorumu güncelle |
| DELETE | `/backend/comments.php?id=1` | Yorumu sil |

---

# ✨ Öne Çıkan Özellikler

- Component tabanlı React mimarisi
- REST API entegrasyonu
- Responsive UI tasarımı
- Kategori bazlı dinamik yapı
- CRUD operasyonları
- Authentication sistemi
- MySQL ilişkisel veritabanı yapısı
- Modern pastel UI yaklaşımı

---

# 📸 Ekran Görüntüleri

## Ana Sayfa

```md
![Home](docs/screenshots/home.png)
```

## Kategori Sayfası

```md
![Category](docs/screenshots/category.png)
```

## Giriş Sayfası

```md
![Login](docs/screenshots/auth.png)
```

---

# 👩‍💻 Geliştirici

Gonca Yavuz

- GitHub: https://github.com/Goncayvz
- LinkedIn: https://www.linkedin.com/in/gonca-yavuz-350716327/

---

# 📌 Not

Bu proje eğitim ve portföy amacıyla geliştirilmiştir.
Modern frontend geliştirme, REST API kullanımı ve full-stack mimari pratiği amacıyla hazırlanmıştır.
