# 🦉 English Quest

Aplikasi web sederhana & fun untuk belajar bahasa Inggris dari dasar (A1) sampai siap kerja remote internasional (C2) — lengkap dengan tracking progress pribadi.

Tanpa build, tanpa backend: cukup HTML + CSS + JavaScript. Semua progress tersimpan di browser (localStorage) dan bisa di-export/import sebagai JSON.

## ✨ Fitur

- **🗺️ Roadmap** — 6 level (A1 → C2), 32 topik: materi, contoh formal/informal + suara 🔊, misi latihan, mini quiz.
- **📘 Grammar Guide** — konsep dasar (present, continuous, perfect, passive) dengan bedah kalimat berwarna, ejaan akhiran (-s/-es/-ies/-ed/-ing/-er/-ly) + generator bentuk kata, 12 tenses, auxiliary, modal verbs, perbandingan & alasan penggunaannya.
- **✍️ Writing Lab** — 15 latihan menulis (email, Slack, stand-up, incident report, STAR, cover letter…), template, contoh jawaban, pengecek otomatis, auto-save draft, riwayat tulisan.
- **📅 Log** — catat sesi belajar, heatmap 16 minggu, skill balance.
- **🧠 Vocab** — bank kosakata + flashcard.
- **⭐ Gamifikasi** — XP, rank, streak harian, target menit, confetti 🎉.

## 🚀 Jalankan lokal

Buka `index.html` langsung di browser, atau:

```bash
npx serve .
```

## ▲ Deploy ke Vercel

**Via dashboard:** Import repo ini di [vercel.com/new](https://vercel.com/new) → Framework Preset: **Other** → Build Command: kosong → Output Directory: `.` → Deploy.

**Via CLI:**

```bash
npm i -g vercel
vercel        # preview
vercel --prod # production
```

Konfigurasi ada di [`vercel.json`](vercel.json) (clean URLs, header keamanan, revalidasi cache JS/CSS agar update konten langsung terlihat).

## 📁 Struktur

| File | Isi |
|---|---|
| `index.html` | Struktur halaman & tab |
| `style.css` | Tampilan (light/dark, mobile-friendly) |
| `data.js` | Kurikulum roadmap, frasa harian, rank |
| `grammar.js` | Grammar guide + alasan perbandingan |
| `writing.js` | Prompt menulis + aturan pengecek |
| `spelling.js` | Ejaan akhiran + generator bentuk kata |
| `app.js` | Logika aplikasi, tracking & penyimpanan |

> 💾 Data progress tersimpan per browser/device. Gunakan **Setting → Export JSON** untuk backup atau pindah device.
