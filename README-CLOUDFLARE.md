# TikTok Metrics HQ — Cloudflare Workers

Versi ini menggabungkan website dan API ke satu Cloudflare Worker. Tidak memerlukan Vercel, GitHub, Termux, atau build step.

## Deploy dari HP Android (Dashboard Cloudflare)

1. Ekstrak ZIP di perangkat.
2. Buka https://dash.cloudflare.com/ lalu pilih **Workers & Pages**.
3. Pilih **Create application** → **Create Worker** (atau **Start with Hello World**).
4. Beri nama `tiktok-metrics-hq`, lalu Deploy/Create.
5. Buka Worker → **Edit code**. Hapus kode contoh, lalu salin seluruh isi file `worker.js` dari ZIP dan tempel ke editor. Tekan **Deploy**.
6. Buka Worker → **Settings** → **Variables and Secrets** → **Add**.
7. Pilih tipe **Secret**, nama `TIKTOK_DATA_API_KEY`, lalu tempel token SteadyAPI kamu. Simpan dan tekan **Deploy**. Jangan gunakan tipe Text/Plaintext untuk API key.
8. Buka alamat `https://tiktok-metrics-hq.<subdomain>.workers.dev`.

## SteadyAPI

Endpoint dipasang di backend: `GET https://api.steadyapi.com/v1/tiktok/video/info?url=<TIKTOK_URL>` dengan header `Authorization: Bearer <TIKTOK_DATA_API_KEY>`. Short link TikTok didukung oleh endpoint SteadyAPI. API key hanya dibaca Worker dan tidak dikirim ke browser.

## Download video

Tombol download menggunakan browser (fetch → Blob) dari `playUrl` yang dikembalikan provider. URL tersebut bertanda tangan dan dapat kedaluwarsa. Jika host media tidak mengizinkan CORS, aplikasi membuka URL media di tab baru sebagai fallback.

## Batasan

- Akun Cloudflare Workers Free saat ini memiliki kuota 100.000 request per hari; ada batas CPU dan batas platform lain. Periksa halaman Limits Cloudflare untuk ketentuan terbaru.
- API SteadyAPI tetap membutuhkan paket/kredit dan API key yang valid. Cloudflare tidak menggantikan biaya provider data.
- FPS, bitrate, dan ukuran file mungkin tidak disediakan endpoint video; aplikasi tidak mengarang nilai.
- Jika provider tidak mengembalikan field tertentu, kolom akan tetap kosong/tidak tersedia.

## Struktur

- `worker.js` — satu file siap ditempel ke Cloudflare Worker Editor.
- `public/` — sumber HTML/CSS/JS yang juga dibundel di worker.js.
- `wrangler.toml` — konfigurasi opsional jika kelak deploy memakai Wrangler.
