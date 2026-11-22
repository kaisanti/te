const $=id=>document.getElementById(id);
const form=$("analyzeForm"), logs=$("logs");
let latest=null;
function log(message,kind=""){const p=document.createElement("p");p.textContent=`[${new Date().toLocaleTimeString("id-ID")}] ${message}`;if(kind)p.className=kind;logs.appendChild(p);logs.scrollTop=logs.scrollHeight}
function fmt(n){return n==null?"—":Number(n).toLocaleString("id-ID")}
function set(id,v){$(id).textContent=(v===null||v===undefined||v==="")?"—":v}
async function downloadClientSide(mediaUrl, videoId){
 try{
  const parsed=new URL(mediaUrl);
  if(!["https:","http:"].includes(parsed.protocol))throw new Error("URL media tidak valid.");
  const button=$("downloadVideo");button.disabled=true;button.textContent="DOWNLOADING…";
  log("Mengunduh media langsung dari browser (client-side)…");
  const response=await fetch(parsed.href,{mode:"cors"});
  if(!response.ok)throw new Error(`Server media mengembalikan HTTP ${response.status}`);
  const blob=await response.blob();
  if(!blob.size)throw new Error("File media kosong.");
  const objectUrl=URL.createObjectURL(blob);
  const anchor=document.createElement("a");anchor.href=objectUrl;anchor.download=`${String(videoId).replace(/[^a-z0-9_-]/gi,"_")}.mp4`;
  document.body.appendChild(anchor);anchor.click();anchor.remove();
  setTimeout(()=>URL.revokeObjectURL(objectUrl),60000);
  log("Download browser selesai dimulai.","ok");
 }catch(error){
  log(`Download client-side gagal: ${error.message}. Membuka URL media di tab baru sebagai alternatif.`,"err");
  window.open(mediaUrl,"_blank","noopener");
 }finally{const button=$("downloadVideo");button.disabled=false;button.textContent="⇩ DOWNLOAD VIDEO";}
}
function reset(){latest=null;$("result").hidden=true;$("empty").hidden=false;$("url").value="";logs.innerHTML="<p>[INIT] TikTok Analyzer Engine siap.</p>"}
$("reset").onclick=reset;
$("copy").onclick=async()=>{if(!latest)return;await navigator.clipboard.writeText(JSON.stringify(latest,null,2));log("Hasil analisis disalin ke clipboard.","ok")};
form.addEventListener("submit",async e=>{
 e.preventDefault();const url=$("url").value.trim();if(!url)return;
 $("submitBtn").disabled=true;$("submitBtn").textContent="...";$("empty").hidden=false;$("empty").textContent="Sedang menganalisis link TikTok…";$("result").hidden=true;logs.innerHTML="";
 log("Initializing TikTok Analyzer Engine ...");
 try{
  log("[1/3] Resolving video URL & fetching public metadata ...");
  const res=await fetch("/api/analyze",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url})});
  const data=await res.json();if(!res.ok)throw new Error(data.error||"Analisis gagal.");
  log("[2/3] Reading engagement metrics and media information ...");
  latest=data;
  const v=data.video||{},q=data.quality||{},s=data.stats||{},d=data.diagnostics||{};
  set("caption",v.caption||v.title||"No caption provided.");
  set("author",v.author?`♙ ${v.author}`:"♙ Creator tidak tersedia");
  set("date",v.createTime?`▣ ${new Date(v.createTime).toLocaleString("id-ID")}`:"▣ Tanggal tidak tersedia");
  $("cover").src=v.cover||"";$("cover").hidden=!v.cover;
  $("openTikTok").href=v.url||url;
  const downloadButton=$("downloadVideo");
  downloadButton.hidden=!v.downloadUrl;
  downloadButton.disabled=false;
  downloadButton.onclick=()=>downloadClientSide(v.downloadUrl, v.id || "tiktok-video");
  set("resolution",q.width&&q.height?`${q.width} x ${q.height}`:"Tidak tersedia dari link publik");
  set("fps",q.fps?`${q.fps} fps`:"Perlu file video");
  set("bitrate",q.bitrate?`${q.bitrate} Mbps`:"Perlu file video");
  set("duration",q.duration?`${q.duration} seconds`:(v.duration?`${v.duration} seconds`:"—"));
  set("filesize",q.filesize||"Perlu file video");set("dynamic",q.dynamicRange||"Tidak terdeteksi");
  for(const [id,val] of Object.entries({views:s.views,likes:s.likes,comments:s.comments,favorites:s.favorites,shares:s.shares,downloads:s.downloads}))set(id,fmt(val));
  const rate=s.views?(((Number(s.likes||0)+Number(s.comments||0)+Number(s.shares||0))/Number(s.views))*100).toFixed(2)+"%":"Tidak tersedia";
  set("rate",rate);set("videoId",v.id);set("region",v.region||"Tidak tersedia");set("sound",v.sound||"Tidak tersedia");
  const label=d.shadowban?.label||"Tidak diketahui";set("shadow",`Shadowban: ${label}`);set("shadowDetail",label);
  $("fyp").textContent=d.fyp?.label||"FYP: Tidak dapat diverifikasi";
  $("disclaimer").textContent=data.disclaimer||"Statistik dan diagnostik bergantung pada data publik yang tersedia. Shadowban tidak dapat dipastikan hanya dari metrik publik.";
  $("empty").hidden=true;$("result").hidden=false;
  log("[3/3] Compiling video metrics and statistics ...");
  if (data.source) {
   log(`Sumber: halaman publik ${data.source.publicPage ? "terbaca" : "tidak terbaca"}; data video tertanam ${data.source.embeddedVideoData ? "ditemukan" : "tidak ditemukan"}; oEmbed ${data.source.oembed ? "tersedia" : "tidak tersedia"}.`);
   if (!data.source.engagementAvailable) log("Statistik engagement tidak dikirim oleh sumber publik/provider. Tambahkan provider API yang mendukung statistik untuk mengisi views/likes/comments.");
   if (!data.source.providerConfigured) log("Provider eksternal belum dikonfigurasi (TIKTOK_DATA_API_URL).", "err");
  }
  log("Analisis selesai. Kolom yang tidak disediakan sumber akan tetap ditampilkan sebagai tidak tersedia.","ok");
 }catch(err){$("empty").hidden=false;$("empty").textContent=err.message;log(err.message,"err")}
 finally{$("submitBtn").disabled=false;$("submitBtn").textContent="GET"}
});