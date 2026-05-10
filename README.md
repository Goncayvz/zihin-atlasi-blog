# 🧠 Zihin Atlası Blog

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

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
<img width="1911" height="867" alt="image" src="https://github.com/user-attachments/assets/b593f53e-331f-43e8-93a4-764b52db9db3" />

```

## Kategori Sayfaları
Seyahat ve kültür
```md
<img width="1917" height="857" alt="image" src="https://github.com/user-attachments/assets/7aef0a02-2d19-4cd1-bfb2-e4777f5d7ff3" />

```
Kaybolanlar ve Unutulanlar 
```md
<img width="1918" height="862" alt="image" src="https://github.com/user-attachments/assets/04b2eaab-11bf-439d-9558-f6fbe08e9e85" />

```
Sağlıklı Yaşam
```md
<img width="1918" height="858" alt="image" src="https://github.com/user-attachments/assets/715a8cd8-491d-4f68-884b-7a57105b3e11" />
```
Yararlı Bilgiler
```md
<img width="1902" height="870" alt="image" src="https://github.com/user-attachments/assets/77711127-d090-4271-96f5-b722530ca650" />

```

## Giriş Sayfası

```md
<img width="1600" height="702" alt="image" src="https://github.com/user-attachments/assets/e7df6ede-336c-402b-8f5d-fb66fc0240e8" />

```
## Kayıt Ol sayfası 
```md
<img width="1600" height="728" alt="image" src="https://github.com/user-attachments/assets/5c45304d-876d-43fe-83ce-076abac58dd6" />

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
