const HTML = "<!doctype html>\n<html lang=\"id\">\n<head>\n  <meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n  <meta name=\"theme-color\" content=\"#fdfcf6\"><title>TikTok Analyzer — Metrics HQ</title>\n  <link rel=\"stylesheet\" href=\"/styles.css\">\n</head>\n<body>\n  <div class=\"top-blur\"></div>\n  <header class=\"brand\">\n    <div class=\"brand-left\"><div class=\"tiktok\">♪</div><div><div class=\"brand-title\">TIKTOK ANALYZER <span>METRICS HQ</span></div><div class=\"sub\">Video metrics, shadowban &amp; bitrate.</div></div></div>\n    <div class=\"version\">v1.0 <b>•</b> METRICS</div>\n    <button class=\"close\" aria-label=\"Reset\" id=\"reset\">×</button>\n  </header>\n  <main>\n    <form id=\"analyzeForm\" class=\"urlbar\">\n      <input id=\"url\" type=\"url\" placeholder=\"https://www.tiktok.com/@username/video/...\" required>\n      <button class=\"get\" id=\"submitBtn\">GET</button>\n    </form>\n    <section class=\"panel\">\n      <div class=\"panel-head\"><span class=\"tag\">ANALYSIS RESULT</span><button class=\"icon-btn\" id=\"copy\" title=\"Salin hasil\">▢</button></div>\n      <div id=\"empty\" class=\"empty\">Masukkan link TikTok lalu tekan GET untuk memulai analisis.</div>\n      <div id=\"result\" hidden>\n        <div class=\"video-head\">\n          <img id=\"cover\" alt=\"Thumbnail video\" src=\"\">\n          <div class=\"video-info\">\n            <div id=\"caption\" class=\"caption\">—</div>\n            <div class=\"meta\"><span id=\"author\">♙ —</span><span id=\"date\">▣ —</span></div>\n            <div class=\"pills\"><span class=\"pill green\" id=\"fyp\">FYP: Belum dapat diverifikasi</span><span class=\"pill\" id=\"shadow\">Shadowban: Tidak diketahui</span></div>\n            <div class=\"video-actions\"><a id=\"openTikTok\" target=\"_blank\" rel=\"noopener\">Buka video di TikTok ↗</a><button type=\"button\" class=\"download-btn\" id=\"downloadVideo\" hidden>⇩ DOWNLOAD VIDEO</button></div>\n          </div>\n        </div>\n        <div class=\"metrics\" id=\"quality\">\n          <div class=\"metric\"><small>▣ Resolution</small><strong id=\"resolution\">—</strong></div>\n          <div class=\"metric\"><small>◉ Frame Rate</small><strong id=\"fps\">—</strong></div>\n          <div class=\"metric\"><small>◒ Bitrate</small><strong id=\"bitrate\">—</strong></div>\n          <div class=\"metric\"><small>◷ Duration</small><strong id=\"duration\">—</strong></div>\n          <div class=\"metric\"><small>▤ File Size</small><strong id=\"filesize\">—</strong></div>\n          <div class=\"metric\"><small>▣ Dynamic Range</small><strong id=\"dynamic\">—</strong></div>\n        </div>\n        <div class=\"engagement\">\n          <h3>ENGAGEMENT METRICS</h3>\n          <div class=\"eng-grid\">\n            <div>◉ <b id=\"views\">—</b> Views</div><div>♥ <b id=\"likes\">—</b> Likes</div>\n            <div>▰ <b id=\"comments\">—</b> Comments</div><div>▣ <b id=\"favorites\">—</b> Favorites</div>\n            <div>➦ <b id=\"shares\">—</b> Shares</div><div>⇩ <b id=\"downloads\">—</b> Downloads</div>\n          </div>\n          <div class=\"rate\">⌁ Engagement : <strong id=\"rate\">—</strong></div>\n        </div>\n        <div class=\"details\">\n          <div><span>ID :</span> <b id=\"videoId\">—</b></div><div><span>Shadow Ban :</span> <b id=\"shadowDetail\">Tidak diketahui</b></div>\n          <div><span>Region :</span> <b id=\"region\">—</b></div><div><span>Sound :</span> <b id=\"sound\">—</b></div>\n        </div>\n        <p class=\"disclaimer\" id=\"disclaimer\"></p>\n      </div>\n    </section>\n    <section class=\"panel console\">\n      <div class=\"panel-head\"><span class=\"console-title\">▣ CONSOLE OUTPUT</span><span class=\"server\">SERVER : VERCEL</span></div>\n      <div id=\"logs\" aria-live=\"polite\"><p>[INIT] TikTok Analyzer Engine siap.</p><p>[INFO] Data publik dan kualitas media akan ditampilkan jika tersedia.</p></div>\n    </section>\n    <footer>METRICS HQ · Public data only · No TikTok password required</footer>\n  </main>\n  <script src=\"/app.js\"></script>\n</body></html>";
const CSS = "*{box-sizing:border-box}body{margin:0;background:#fdfcf5;color:#111;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.top-blur{height:225px;background:linear-gradient(110deg,#777,#444);filter:blur(0);border-bottom:3px solid #111}.brand{background:#fffef9;border-bottom:3px solid #111;display:flex;align-items:center;gap:14px;padding:18px 24px;position:sticky;top:0;z-index:2}.brand-left{display:flex;align-items:center;gap:14px;flex:1}.tiktok{width:48px;height:48px;border:3px solid #111;display:grid;place-items:center;font-size:32px;font-weight:bold}.brand-title{font-weight:900;font-size:19px}.brand-title span,.tag{background:#050505;color:white;padding:5px 9px;border-radius:3px;font-size:12px}.sub{color:#777;font-size:13px;margin-top:5px;font-weight:bold}.version{color:#888;font-size:12px}.close{border:3px solid #111;background:white;font-size:26px;width:42px;height:42px;box-shadow:3px 3px #111}main{max-width:1100px;margin:24px auto;padding:0 22px}.urlbar{display:flex;gap:10px;margin-bottom:20px}.urlbar input{flex:1;min-width:0;border:3px solid #111;padding:15px 17px;font: bold 16px ui-monospace;background:white;box-shadow:3px 3px #aaa}.get{border:3px solid #111;background:#4dcc7b;padding:0 35px;font:bold 16px ui-monospace;box-shadow:3px 3px #111}.get:disabled{opacity:.6}.panel{border:3px solid #111;background:white;padding:18px;margin-bottom:20px;box-shadow:4px 4px #111}.panel-head{display:flex;align-items:center;justify-content:space-between;border-bottom:2px solid #ddd;padding-bottom:13px;margin-bottom:16px}.tag{font-size:14px}.icon-btn{border:0;background:white;font-size:23px;color:#888;cursor:pointer}.empty{color:#888;padding:20px 0}.video-head{display:flex;gap:18px;padding:4px 0 18px;border-bottom:1px solid #ddd}.video-head img{width:124px;height:205px;object-fit:cover;border:3px solid #111;border-radius:3px;background:#eee}.video-info{min-width:0;flex:1}.caption{color:#999;margin:5px 0 20px;overflow-wrap:anywhere}.meta{display:flex;gap:18px;flex-wrap:wrap;color:#555;font-weight:bold;font-size:13px;margin-bottom:14px}.pills{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px}.pill{border:1px solid #bbb;border-radius:5px;padding:5px 9px;color:#555;font-size:12px;background:#f5f5f5}.pill.green{background:#d8f8e9;border-color:#55c79a;color:#17684d}a{color:#17684d;font-weight:bold;font-size:13px}.metrics{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin:18px 0}.metric{border:1px solid #aaa;background:#fffdf3;padding:12px}.metric small{display:block;color:#777;font-weight:bold;margin-bottom:6px}.metric strong{font-size:16px;overflow-wrap:anywhere}.engagement{border:1px solid #ccc;border-radius:3px;background:#fcfcfc;padding:16px;margin:18px 0}.engagement h3{font-size:13px;color:#888;margin:0 0 14px}.eng-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;font-size:14px}.eng-grid b{margin-right:4px}.rate{margin-top:18px}.details{border-top:1px solid #ddd;padding-top:15px;display:grid;grid-template-columns:1fr 1fr;gap:12px;font-size:13px}.details span{color:#888}.disclaimer{font-size:11px;color:#777;line-height:1.5}.console{background:#fffef9}.console-title{font-weight:900;font-size:13px}.server{font-size:11px;color:#777;letter-spacing:1px}#logs{color:#888;font-size:13px;line-height:1.55;overflow-wrap:anywhere}#logs p{margin:6px 0}#logs .ok{color:#18815e;font-weight:bold}#logs .err{color:#b3261e;font-weight:bold}footer{text-align:center;color:#999;font-size:11px;padding:8px 0 28px}@media(min-width:760px){.metrics{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:520px){.top-blur{height:150px}.brand{padding:12px}.brand-title{font-size:14px}.brand-title span{font-size:9px}.sub{font-size:11px}.version{display:none}main{padding:0 12px;margin:18px auto}.urlbar input{font-size:13px;padding:12px}.get{padding:0 17px}.panel{padding:13px}.video-head img{width:100px;height:170px}.meta{font-size:11px;gap:9px}.details{grid-template-columns:1fr}.metric strong{font-size:14px}}\n.video-actions{display:flex;align-items:center;gap:12px;flex-wrap:wrap}.download-btn{border:2px solid #111;background:#4dcc7b;padding:8px 12px;font:bold 12px ui-monospace;box-shadow:2px 2px #111;cursor:pointer}.download-btn:disabled{opacity:.6;cursor:wait}.download-btn[hidden]{display:none}\n";
const APP = "const $=id=>document.getElementById(id);\nconst form=$(\"analyzeForm\"), logs=$(\"logs\");\nlet latest=null;\nfunction log(message,kind=\"\"){const p=document.createElement(\"p\");p.textContent=`[${new Date().toLocaleTimeString(\"id-ID\")}] ${message}`;if(kind)p.className=kind;logs.appendChild(p);logs.scrollTop=logs.scrollHeight}\nfunction fmt(n){return n==null?\"—\":Number(n).toLocaleString(\"id-ID\")}\nfunction set(id,v){$(id).textContent=(v===null||v===undefined||v===\"\")?\"—\":v}\nasync function downloadClientSide(mediaUrl, videoId){\n try{\n  const parsed=new URL(mediaUrl);\n  if(![\"https:\",\"http:\"].includes(parsed.protocol))throw new Error(\"URL media tidak valid.\");\n  const button=$(\"downloadVideo\");button.disabled=true;button.textContent=\"DOWNLOADING…\";\n  log(\"Mengunduh media langsung dari browser (client-side)…\");\n  const response=await fetch(parsed.href,{mode:\"cors\"});\n  if(!response.ok)throw new Error(`Server media mengembalikan HTTP ${response.status}`);\n  const blob=await response.blob();\n  if(!blob.size)throw new Error(\"File media kosong.\");\n  const objectUrl=URL.createObjectURL(blob);\n  const anchor=document.createElement(\"a\");anchor.href=objectUrl;anchor.download=`${String(videoId).replace(/[^a-z0-9_-]/gi,\"_\")}.mp4`;\n  document.body.appendChild(anchor);anchor.click();anchor.remove();\n  setTimeout(()=>URL.revokeObjectURL(objectUrl),60000);\n  log(\"Download browser selesai dimulai.\",\"ok\");\n }catch(error){\n  log(`Download client-side gagal: ${error.message}. Membuka URL media di tab baru sebagai alternatif.`,\"err\");\n  window.open(mediaUrl,\"_blank\",\"noopener\");\n }finally{const button=$(\"downloadVideo\");button.disabled=false;button.textContent=\"⇩ DOWNLOAD VIDEO\";}\n}\nfunction reset(){latest=null;$(\"result\").hidden=true;$(\"empty\").hidden=false;$(\"url\").value=\"\";logs.innerHTML=\"<p>[INIT] TikTok Analyzer Engine siap.</p>\"}\n$(\"reset\").onclick=reset;\n$(\"copy\").onclick=async()=>{if(!latest)return;await navigator.clipboard.writeText(JSON.stringify(latest,null,2));log(\"Hasil analisis disalin ke clipboard.\",\"ok\")};\nform.addEventListener(\"submit\",async e=>{\n e.preventDefault();const url=$(\"url\").value.trim();if(!url)return;\n $(\"submitBtn\").disabled=true;$(\"submitBtn\").textContent=\"...\";$(\"empty\").hidden=false;$(\"empty\").textContent=\"Sedang menganalisis link TikTok…\";$(\"result\").hidden=true;logs.innerHTML=\"\";\n log(\"Initializing TikTok Analyzer Engine ...\");\n try{\n  log(\"[1/3] Resolving video URL & fetching public metadata ...\");\n  const res=await fetch(\"/api/analyze\",{method:\"POST\",headers:{\"content-type\":\"application/json\"},body:JSON.stringify({url})});\n  const data=await res.json();if(!res.ok)throw new Error(data.error||\"Analisis gagal.\");\n  log(\"[2/3] Reading engagement metrics and media information ...\");\n  latest=data;\n  const v=data.video||{},q=data.quality||{},s=data.stats||{},d=data.diagnostics||{};\n  set(\"caption\",v.caption||v.title||\"No caption provided.\");\n  set(\"author\",v.author?`♙ ${v.author}`:\"♙ Creator tidak tersedia\");\n  set(\"date\",v.createTime?`▣ ${new Date(v.createTime).toLocaleString(\"id-ID\")}`:\"▣ Tanggal tidak tersedia\");\n  $(\"cover\").src=v.cover||\"\";$(\"cover\").hidden=!v.cover;\n  $(\"openTikTok\").href=v.url||url;\n  const downloadButton=$(\"downloadVideo\");\n  downloadButton.hidden=!v.downloadUrl;\n  downloadButton.disabled=false;\n  downloadButton.onclick=()=>downloadClientSide(v.downloadUrl, v.id || \"tiktok-video\");\n  set(\"resolution\",q.width&&q.height?`${q.width} x ${q.height}`:\"Tidak tersedia dari link publik\");\n  set(\"fps\",q.fps?`${q.fps} fps`:\"Perlu file video\");\n  set(\"bitrate\",q.bitrate?`${q.bitrate} Mbps`:\"Perlu file video\");\n  set(\"duration\",q.duration?`${q.duration} seconds`:(v.duration?`${v.duration} seconds`:\"—\"));\n  set(\"filesize\",q.filesize||\"Perlu file video\");set(\"dynamic\",q.dynamicRange||\"Tidak terdeteksi\");\n  for(const [id,val] of Object.entries({views:s.views,likes:s.likes,comments:s.comments,favorites:s.favorites,shares:s.shares,downloads:s.downloads}))set(id,fmt(val));\n  const rate=s.views?(((Number(s.likes||0)+Number(s.comments||0)+Number(s.shares||0))/Number(s.views))*100).toFixed(2)+\"%\":\"Tidak tersedia\";\n  set(\"rate\",rate);set(\"videoId\",v.id);set(\"region\",v.region||\"Tidak tersedia\");set(\"sound\",v.sound||\"Tidak tersedia\");\n  const label=d.shadowban?.label||\"Tidak diketahui\";set(\"shadow\",`Shadowban: ${label}`);set(\"shadowDetail\",label);\n  $(\"fyp\").textContent=d.fyp?.label||\"FYP: Tidak dapat diverifikasi\";\n  $(\"disclaimer\").textContent=data.disclaimer||\"Statistik dan diagnostik bergantung pada data publik yang tersedia. Shadowban tidak dapat dipastikan hanya dari metrik publik.\";\n  $(\"empty\").hidden=true;$(\"result\").hidden=false;\n  log(\"[3/3] Compiling video metrics and statistics ...\");\n  if (data.source) {\n   log(`Sumber: halaman publik ${data.source.publicPage ? \"terbaca\" : \"tidak terbaca\"}; data video tertanam ${data.source.embeddedVideoData ? \"ditemukan\" : \"tidak ditemukan\"}; oEmbed ${data.source.oembed ? \"tersedia\" : \"tidak tersedia\"}.`);\n   if (!data.source.engagementAvailable) log(\"Statistik engagement tidak dikirim oleh sumber publik/provider. Tambahkan provider API yang mendukung statistik untuk mengisi views/likes/comments.\");\n   if (!data.source.providerConfigured) log(\"API SteadyAPI belum aktif. Tambahkan Secret TIKTOK_DATA_API_KEY di Cloudflare Workers → Settings → Variables and Secrets.\", \"err\");\n  }\n  log(\"Analisis selesai. Kolom yang tidak disediakan sumber akan tetap ditampilkan sebagai tidak tersedia.\",\"ok\");\n }catch(err){$(\"empty\").hidden=false;$(\"empty\").textContent=err.message;log(err.message,\"err\")}\n finally{$(\"submitBtn\").disabled=false;$(\"submitBtn\").textContent=\"GET\"}\n});";

const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" }
});
const isTikTokHost = host => /(^|\.)tiktok\.com$/i.test(host);
function validTikTok(raw) {
  try { const u = new URL(raw); return ["http:", "https:"].includes(u.protocol) && isTikTokHost(u.hostname); }
  catch { return false; }
}
async function resolveUrl(raw) {
  const response = await fetch(raw, { redirect: "follow", headers: {
    "user-agent": "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 Chrome/120.0 Mobile Safari/537.36",
    accept: "text/html,application/xhtml+xml,application/json"
  }});
  const finalUrl = response.url || raw;
  if (!isTikTokHost(new URL(finalUrl).hostname)) throw new Error("Short link dialihkan ke domain selain TikTok.");
  return finalUrl;
}
function parseEmbeddedJson(html) {
  const out = [];
  const patterns = [
    /<script[^>]+id=["']__UNIVERSAL_DATA_FOR_REHYDRATION__["'][^>]*>([\s\\S]*?)<\/script>/i,
    /<script[^>]+id=["']SIGI_STATE["'][^>]*>([\s\\S]*?)<\/script>/i,
    /<script[^>]+type=["']application\/json["'][^>]*>([\s\\S]*?)<\/script>/gi
  ];
  for (const pattern of patterns) {
    if (pattern.global) for (const match of html.matchAll(pattern)) { try { out.push(JSON.parse(match[1])); } catch {} }
    else { const match = html.match(pattern); if (match) { try { out.push(JSON.parse(match[1])); } catch {} } }
  }
  return out;
}
function findVideoObject(roots) {
  const queue = [...roots], seen = new Set(); let best = null, bestScore = 0;
  while (queue.length) {
    const value = queue.shift();
    if (!value || typeof value !== "object" || seen.has(value)) continue;
    seen.add(value);
    if (Array.isArray(value)) { queue.push(...value); continue; }
    const stats = value.stats || value.statistics || value.statsV2;
    const video = value.video || value.videoInfo?.video || {};
    const score = (stats && typeof stats === "object" ? 4 : 0) +
      (value.aweme_id || value.awemeId || value.id ? 2 : 0) +
      (value.desc || value.description || value.caption ? 1 : 0) +
      (video.playAddr || video.downloadAddr || video.width ? 2 : 0);
    if (score > bestScore) { best = value; bestScore = score; }
    for (const child of Object.values(value)) if (child && typeof child === "object") queue.push(child);
  }
  return best;
}
async function fetchPublicPage(url) {
  try {
    const r = await fetch(url, { redirect: "follow", headers: {
      "user-agent": "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 Chrome/120.0 Mobile Safari/537.36",
      accept: "text/html,application/xhtml+xml"
    }});
    if (!r.ok) return null;
    const final = new URL(r.url || url); if (!isTikTokHost(final.hostname)) return null;
    const html = await r.text(); return { html, data: findVideoObject(parseEmbeddedJson(html)) };
  } catch { return null; }
}
async function externalProvider(url, env) {
  if (!env.TIKTOK_DATA_API_KEY) return null;
  const endpoint = new URL("https://api.steadyapi.com/v1/tiktok/video/info");
  endpoint.searchParams.set("url", url);
  const r = await fetch(endpoint, { headers: {
    "accept": "application/json", "authorization": `Bearer ${env.TIKTOK_DATA_API_KEY}`
  }});
  const payload = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(payload?.message || payload?.error || `SteadyAPI mengembalikan HTTP ${r.status}`);
  return payload;
}
const first = (...values) => values.find(v => v !== undefined && v !== null && v !== "") ?? null;
function normalizeProvider(payload) {
  if (!payload) return {};
  let item = payload.body ?? payload.data ?? payload;
  if (Array.isArray(item)) item = item[0] || {};
  if (item?.video && !item.id) item = item.video;
  return item && typeof item === "object" ? item : {};
}
async function analyze(request, env) {
  if (request.method !== "POST") return json({ error: "Method tidak diizinkan. Gunakan POST." }, 405);
  try {
    const body = await request.json().catch(() => ({}));
    const input = String(body.url || "").trim();
    if (!validTikTok(input)) return json({ error: "Masukkan URL TikTok yang valid." }, 400);
    // SteadyAPI supports TikTok short links itself; public-page fallback uses resolved URL.
    const providerPromise = externalProvider(input, env);
    const canonicalPromise = resolveUrl(input).catch(() => input);
    const [providerResult, canonical] = await Promise.all([providerPromise, canonicalPromise]);
    const page = await fetchPublicPage(canonical);
    let embed = null;
    try {
      const r = await fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(canonical)}`, { headers: { "user-agent": "Mozilla/5.0", accept: "application/json" } });
      if (r.ok) embed = await r.json();
    } catch {}
    const provider = normalizeProvider(providerResult);
    const pageData = page?.data || {};
    const p = { ...pageData, ...provider };
    const pVideo = p.video || p.videoInfo?.video || pageData.video || {};
    const stats = p.stats || p.statistics || p.statsV2 || pageData.stats || pageData.statistics || {};
    const authorObj = p.author || p.authorInfo || pageData.author || {};
    const author = first(authorObj.username, authorObj.uniqueId, authorObj.nickname, p.author_name, embed?.author_name);
    const rawDownloadUrl = first(p.playUrl, p.play_url, p.download_url, p.downloadUrl, p.video_url,
      p.nwm_video_url, p.wmplay, pVideo.playAddr, pVideo.downloadAddr);
    let downloadUrl = null;
    if (rawDownloadUrl) { try { const candidate = new URL(rawDownloadUrl); if (["https:", "http:"].includes(candidate.protocol)) downloadUrl = candidate.toString(); } catch {} }
    const createRaw = first(p.createTime, p.create_time, p.createTimeISO, pageData.createTime);
    let createTime = createRaw;
    if (createRaw && /^\d{9,10}$/.test(String(createRaw))) createTime = Number(createRaw) * 1000;
    else if (typeof createRaw === "string") { const parsed = Date.parse(createRaw); if (!Number.isNaN(parsed)) createTime = parsed; }
    const video = {
      id: first(p.id, p.aweme_id, p.awemeId, p.video_id, embed?.embed_product_id),
      url: first(p.url, p.share_url, canonical), downloadUrl,
      caption: first(p.description, p.caption, p.video_description, p.desc, embed?.title), author,
      cover: first(p.cover, p.dynamicCover, p.cover_image_url, p.thumbnail_url, pVideo.cover, pVideo.originCover),
      createTime, duration: first(p.duration, pVideo.duration),
      region: first(p.region, p.region_code, p.locationCreated),
      sound: first(p.music?.title, p.music_title, p.sound)
    };
    const quality = {
      width: first(p.width, pVideo.width), height: first(p.height, pVideo.height),
      fps: first(p.fps, p.frame_rate, pVideo.fps),
      bitrate: first(p.bitrate_mbps, p.bitrate, pVideo.bitrate),
      filesize: first(p.filesize, p.file_size, pVideo.dataSize),
      dynamicRange: p.hdr || pVideo.isHdr ? "HDR" : null,
      duration: first(p.duration, pVideo.duration)
    };
    const normalizedStats = {
      views: first(stats.plays, stats.playCount, stats.views, p.play_count, p.view_count),
      likes: first(stats.likes, stats.diggCount, p.digg_count, p.like_count),
      comments: first(stats.comments, stats.commentCount, p.comment_count),
      shares: first(stats.shares, stats.shareCount, p.share_count),
      favorites: first(stats.saves, stats.collectCount, stats.favorites, p.collect_count, p.favorite_count),
      downloads: first(stats.downloads, p.download_count)
    };
    const hasStats = Object.values(normalizedStats).some(value => value !== null);
    const hasPageData = !!pageData && Object.keys(pageData).length > 0;
    return json({ ok: true, video, quality, stats: normalizedStats,
      diagnostics: { shadowban: { label: "Tidak dapat dipastikan", basis: "Data publik tidak cukup untuk membuktikan shadowban." }, fyp: { label: "FYP tidak dapat diverifikasi dari link publik" } },
      source: { oembed: !!embed, publicPage: !!page, embeddedVideoData: hasPageData,
        externalProvider: !!providerResult, providerConfigured: !!env.TIKTOK_DATA_API_KEY, engagementAvailable: hasStats },
      disclaimer: "Data berasal dari SteadyAPI dan/atau data publik TikTok. Field yang tidak disediakan sumber akan tetap kosong. FPS, bitrate, dan ukuran file memerlukan metadata file video asli. Shadowban/FYP tidak dapat dipastikan hanya dari link publik. URL media SteadyAPI bersifat bertanda tangan dan dapat kedaluwarsa."
    });
  } catch (error) { return json({ error: error.message || "Terjadi kesalahan saat menganalisis video." }, 502); }
}
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/analyze") return analyze(request, env);
    if (url.pathname === "/" || url.pathname === "/index.html") return new Response(HTML, { headers: { "content-type": "text/html; charset=utf-8" } });
    if (url.pathname === "/styles.css") return new Response(CSS, { headers: { "content-type": "text/css; charset=utf-8" } });
    if (url.pathname === "/app.js") return new Response(APP, { headers: { "content-type": "text/javascript; charset=utf-8" } });
    return new Response("Not Found", { status: 404 });
  }
};
