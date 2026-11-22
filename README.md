# TikTok Analyzer — Metrics HQ (Vercel)

Website statis berada di `public/` dan endpoint analisis berada di `api/analyze.js`.

## Perbaikan pembacaan link TikTok

Backend sekarang:
- Mengikuti redirect short link (`vt.tiktok.com` / `vm.tiktok.com`) dan memvalidasi bahwa tujuan akhirnya tetap domain TikTok.
- Membaca data JSON yang mungkin disisipkan pada halaman video publik (`__UNIVERSAL_DATA_FOR_REHYDRATION__`, `SIGI_STATE`, dan script JSON).
- Menggunakan oEmbed sebagai fallback untuk judul/kreator/thumbnail jika tersedia.
- Menggabungkan hasil dari provider eksternal bila dikonfigurasi.
- Menampilkan diagnosis sumber data di console agar terlihat apakah halaman publik, data tertanam, atau oEmbed berhasil dibaca.

TikTok dapat membatasi halaman publik berdasarkan wilayah, login, rate limit, atau anti-bot. Jika halaman tidak menyertakan data statistik, views/likes/comments/shares tetap tidak tersedia. Aplikasi tidak mengarang angka.

## Download client-side

Tombol **DOWNLOAD VIDEO** muncul jika sumber data mengembalikan URL media langsung. Browser mengambil URL tersebut menggunakan `fetch()`, membuat Blob, lalu memulai download di perangkat pengguna. Media tidak disimpan oleh server aplikasi.

URL media harus mengizinkan CORS dari domain website. Jika CORS ditolak, aplikasi mencoba membuka URL media di tab baru. Link halaman TikTok biasa bukan URL MP4 langsung.

## Deploy ke Vercel

1. Ekstrak ZIP.
2. Impor project ke Vercel melalui repository Git, atau gunakan metode deploy yang tersedia di akun Vercel.
3. Pastikan Root Directory menunjuk ke folder yang berisi `package.json`, `api/`, `public/`, dan `vercel.json`.
4. Framework Preset: **Other**. Tidak diperlukan build command.
5. Deploy. Endpoint tersedia di `/api/analyze`.

## Environment Variables (opsional)

Di Vercel → Project → Settings → Environment Variables:
- `TIKTOK_DATA_API_URL` — endpoint provider yang menerima parameter query `url`.
- `TIKTOK_DATA_API_KEY` — API key provider, disimpan di server saja.

Redeploy setelah mengubah environment variables. Provider harus mengembalikan JSON yang berisi data video dan, jika tersedia, `stats` serta `download_url`.

Contoh respons provider:

```json
{
  "data": {
    "id": "123456789",
    "url": "https://www.tiktok.com/@creator/video/123456789",
    "description": "Caption",
    "author": {"username": "creator"},
    "cover": "https://example.com/cover.jpg",
    "download_url": "https://cdn.example.com/video.mp4",
    "stats": {"plays": 1000, "likes": 100, "comments": 5, "shares": 3, "saves": 7}
  }
}
```

## Batasan

- TikTok oEmbed tidak menyediakan views, likes, bitrate, atau file media asli.
- FPS, bitrate, ukuran file, dan dynamic range memerlukan akses ke file video asli atau metadata dari provider.
- Shadowban/FYP tidak dapat dibuktikan hanya dari link publik.
- Gunakan API/provider yang sah dan patuhi ketentuan TikTok serta hak cipta.
