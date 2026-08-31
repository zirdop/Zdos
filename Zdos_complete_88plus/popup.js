const mods = {
Info: [],
Main: [
["Get Hacked Text","Replace visible text with “Get hacked by Zdos”.","replaceText"],
["Whiteout","Turn the whole page white with a centered “DDOSed by Zdos”.","whiteout"],
["Invert","Invert the page colors.","invert"],
["Grayscale","Drain the page of color.","grayscale"],
["Mirror","Flip the entire site horizontally.","mirror"],
["Upside Down","Rotate the page 180 degrees.","upsideDown"],
["Big Headings","Make headings comically huge.","bigHeadings"],
["Tiny Mode","Shrink most page content.","tiny"],
["Comic Sans","Give the page a ridiculous font.","comic"],
["Red Alert","Add a dramatic red tint.","redTint"],
["Terminal Mode","Make the site look like a terminal.","terminal"],
["Blink Mode","Make visible elements pulse.","blink"],
["Rainbow Text","Cycle text through neon hues.","rainbow"],
["Cursor Chaos","Replace the cursor with a crosshair.","cursor"],
["No Images","Hide all images.","noImages"],
["Image Spam","Give images absurd outlines and sizes.","imageSpam"],
["Shake","Shake the whole document.","shake"],
["Tilt","Give the page a crooked tilt.","tilt"],
["Blur Vision","Apply a soft blur.","blur"],
["Low Res","Pixelate the page with a chunky filter.","pixel"],
["Scanlines","Overlay retro scanlines.","scanlines"],
["Snow","Add TV-static dots.","snow"],
["Dark Mode","Force a dark visual theme.","dark"],
["Light Mode","Force a bright visual theme.","light"],
["Links Everywhere","Underline and glow every link.","links"],
["Disable Buttons","Make buttons look disabled.","disableButtons"],
["Popups","Spawn harmless visual alert cards.","fakePopups"],
["404 Overlay","Put a giant visual 404 overlay on the page.","fake404"],
["Hacked Banner","Add a top “SYSTEM COMPROMISED” banner.","hackedBanner"],
["Matrix Rain","Add a green matrix-style overlay.","matrix"],
["Doom Clock","Add a visual countdown HUD.","doomClock"],
["TV Color Bars", "Overlay retro broadcast color bars.", "colorBars"],
["CRT Curve", "Add a curved-screen vignette.", "crtCurve"],
["Terminal Noise", "Add subtle terminal flicker.", "terminalNoise"],
["Status HUD", "Show a Zdos console status panel.", "typingHud"],
["Hex Rain", "Overlay falling hexadecimal characters.", "hexRain"],
["Warning Flash", "Pulse a dramatic warning tint.", "warningFlash"],
["Focus Mode", "Dim the page around the center.", "focus"],
["Spotlight Box", "Frame the center of the viewport.", "spotBox"],
["Cyber Corners", "Add tactical corner brackets.", "cyberCorners"],
["Crosshair Sweep", "Animate a scanning sweep line.", "crosshairSweep"],
["Progress Bar", "Show a Zdos progress display.", "progress"],
["Boot Sequence", "Show a stylized boot screen.", "boot"],
["System Log", "Show a scrolling system log.", "systemLog"],
["Memory Meter", "Show a system memory readout.", "memory"],
["CPU Meter", "Show a system CPU readout.", "cpu"],
["Kernel Panic", "Show a dramatic kernel panic screen.", "kernelPanic"],
["Access Log", "Show a local access log panel.", "accessLog"],
["Encryption", "Show an encryption status panel.", "encryption"],
["Signal Lost", "Show a signal-loss screen.", "signalLost"],
["Reconnecting", "Show a reconnecting status panel.", "reconnecting"],
["Glitch Blocks", "Overlay animated glitch blocks.", "glitchBlocks"],
["RGB Split", "Give text a chromatic split effect.", "rgbSplit"],
["Fisheye", "Add a fisheye-style edge effect.", "fisheye"],
["Tunnel Vision", "Add a dark tunnel vignette.", "tunnel"],
["CRT Flicker", "Add subtle CRT flicker.", "crtFlicker"],
["Static Scan", "Sweep a scan highlight down the page.", "staticScan"],
["Digital Snow", "Overlay digital noise characters.", "digitalSnow"],
["Barcode", "Add a decorative barcode overlay.", "barcode"],
["QR Pattern", "Add a decorative grid pattern.", "qrStyle"],
["Code Stream", "Show a scrolling-style code HUD.", "codeStream"],
["Hex Panel", "Show a hexadecimal status panel.", "hexPanel"],
["Coordinates", "Show viewport coordinates.", "coordinates"],
["FPS Counter", "Show a performance readout.", "fpsCounter"],
["Latency Graph", "Show a latency graph HUD.", "latencyGraph"],
["Threat Meter", "Show a threat-level meter.", "threatMeter"],
["Security Scan", "Sweep a security scan line.", "securityScan"],
["File Scanner", "Show a local scan display.", "fileScanner"],
["Session Timer", "Show a session timer.", "sessionTimer"],
["Debug Overlay", "Show a developer debug panel.", "debugOverlay"],
["Dev Mode", "Show a developer mode badge.", "devMode"],
["Build Failed", "Show a build failure card.", "buildFailed"],
["Cache Warning", "Show a cache warning card.", "cacheWarning"],
["DNS Error", "Show a DNS error card.", "dnsError"],
["Service Offline", "Show a service offline card.", "serviceOffline"],
["Update Required", "Show an update notice.", "updateRequired"],
["Unauthorized", "Show an unauthorized status.", "unauthorized"],
["Session Expired", "Show a session-expired screen.", "sessionExpired"],
["Data Stream", "Show a data-stream HUD.", "dataStream"],
["Override Grid", "Overlay a tactical grid.", "overrideGrid"],
["Alert Siren", "Animate a dramatic alert border.", "alertSiren"],
],
FullDestroyer: [
["DOM Mayhem","Scatter page elements around visually.","domMayhem"],
["Gravity","Make elements drift downward.","gravity"],
["Everything Huge","Scale the page up dramatically.","huge"],
["Everything Tiny","Scale the page down dramatically.","tinyAll"],
["Rotate UI","Randomly rotate common elements.","rotateUI"],
["Hide Navigation","Hide nav/header/menu elements.","hideNav"],
["Hide Text","Hide paragraphs and headings.","hideText"],
["Hide Forms","Hide forms and inputs.","hideForms"],
["Border Madness","Add borders to almost everything.","borderMadness"],
["Z-Index Chaos","Randomize stacking order.","zChaos"],
["Font Roulette","Assign random fonts.","fontRoulette"],
["Spacing Attack","Add ridiculous margins and padding.","spacing"],
["Monochrome Blocks","Turn content into harsh blocks.","blocks"],
["Webcam Pretend","Add a visual “camera access” overlay.","fakeCamera"],
["Loading Forever","Add a visual endless loading screen.","loading"],
],
DDOS: [
["DDOSed Screen","White page + centered “DDOSed by Zdos”.","whiteout"],
["Traffic Flood","Show a visual local traffic monitor HUD.","traffic"],
["Packet Storm","Animate visual packet counters.","packets"],
["Connection Lost","Show a visual connection-lost overlay.","connectionLost"],
["Server Meltdown","Show a visual overheating server warning.","meltdown"],
["Ping Spike","Add a visual 9999ms ping badge.","ping"],
["Request Flood","Animate visual request numbers only.","requests"],
["Rate Limited","Show a visual 429 rate-limit screen.","rateLimit"],
["Firewall Breach","Show a visual firewall alert.","firewall"],
["Proxy Error","Show a visual proxy error page.","proxy"],
["Bot Swarm","Add a visual swarm counter HUD.","bots"],
["Blackout","Fade the page almost completely out.","blackout"],
],
Admin: [
["Admin Panel","Add a visual admin control panel overlay.","adminPanel"],
["Maintenance","Show a visual maintenance notice.","maintenance"],
["Access Granted","Add a green “ACCESS GRANTED” badge.","accessGranted"],
["Root Mode","Add a visual root terminal panel.","rootPanel"],
["Database Error","Show a visual database error overlay.","dbError"],
["Permission Denied","Add a visual 403 overlay.","forbidden"],
["Audit Log","Add a scrolling visual audit log.","audit"],
["Console Leak","Add a visual console readout.","consoleLeak"],
["Admin Watermark","Stamp the page with “ADMIN OVERRIDE”.","watermark"],
["Purge Notice","Show a visual purge warning.","purge"]
]};

const all = Object.fromEntries(Object.values(mods).flat().map(x=>[x[2],x[0]]));

function toast(t){const x=document.createElement("div");x.className="toast";x.textContent=t;document.body.appendChild(x);setTimeout(()=>x.remove(),1300)}
function inject(fn){
  chrome.tabs.query({active:true,currentWindow:true},tabs=>{
    const id=tabs[0]?.id;if(!id)return;
    chrome.scripting.executeScript({target:{tabId:id},func:runZdosMod,args:[fn]})
      .then(()=>toast("Applied: "+(all[fn]||fn)))
      .catch(()=>toast("This page does not allow extensions."));
  });
}
function show(tab){
 const box=document.getElementById("mods");
 if(tab==="Info"){
   const count=Object.values(mods).flat().length;
   box.innerHTML=`<div class="info"><h2>Zdos // Website Destruction Console</h2><p>Visual mods for the active webpage, built as a private browser-side effects console.</p><p>Tabs: <b>Info · Main · FullDestroyer · DDOS · Admin</b></p><p>Loaded modules: <b>${count}</b></p><p>Reload the active tab to clear page effects.</p></div>`;
   return;
 }
 box.innerHTML='<div class="grid">'+mods[tab].map(m=>`<div class="card"><div><div class="modname">${m[0]}</div><div class="desc">${m[1]}</div></div><button class="run" data-fn="${m[2]}">RUN</button></div>`).join("")+'</div>';
 box.querySelectorAll(".run").forEach(b=>b.onclick=()=>inject(b.dataset.fn));
}
document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>{document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));b.classList.add("active");show(b.dataset.tab)});
document.getElementById("reset").onclick=()=>chrome.tabs.query({active:true,currentWindow:true},tabs=>{if(tabs[0]?.id)chrome.tabs.reload(tabs[0].id)});
show("Info");


function wrapStyle(css,id="zdos-runtime-style"){
  let s=document.getElementById(id);
  if(!s){s=document.createElement("style");s.id=id;(document.head||document.documentElement).appendChild(s)}
  s.textContent+=css;
}
function overlay(title,sub){
  let d=document.getElementById("__zdos_overlay"); if(d)d.remove();
  d=document.createElement("div"); d.id="__zdos_overlay";
  d.innerHTML=`<div class="zdos-overlay-card"><div class="zdos-overlay-title">${title}</div><div class="zdos-overlay-sub">${sub||""}</div><button>DISMISS</button></div>`;
  Object.assign(d.style,{position:"fixed",inset:0,zIndex:2147483647,display:"grid",placeItems:"center",background:"#05070bd9",fontFamily:"ui-monospace,monospace"});
  d.querySelector("button").onclick=()=>d.remove(); document.body.appendChild(d);
}
function hud(title,value){
  const d=document.createElement("div");d.className="zdos-hud";
  d.innerHTML=`<div class="zdos-hud-title">${title}</div><b>${value}</b>`;
  document.body.appendChild(d);
  return d;
}
function baseStyle(){
 wrapStyle(`.zdos-hud{position:fixed;right:18px;z-index:2147483647;min-width:190px;padding:12px 14px;background:linear-gradient(180deg,#10141b,#080a0e);color:#f4f7fb;border:1px solid #39424e;border-radius:8px;box-shadow:0 10px 35px #0009;font:12px ui-monospace,monospace;letter-spacing:.3px}.zdos-hud-title{font-size:9px;color:#7f8b99;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px}.zdos-hud b{font-size:13px}.zdos-overlay-card{min-width:320px;max-width:70vw;padding:28px 30px;text-align:center;background:linear-gradient(180deg,#111720,#07090d);color:#f5f7fa;border:1px solid #414c5a;border-radius:14px;box-shadow:0 24px 80px #000b}.zdos-overlay-title{font-size:30px;font-weight:900;letter-spacing:1px}.zdos-overlay-sub{margin-top:10px;color:#aeb8c5;font-size:12px;line-height:1.5}.zdos-overlay-card button{margin-top:18px;padding:9px 15px;border:1px solid #596574;border-radius:7px;background:#e9edf2;color:#090b0f;font:800 11px ui-monospace,monospace;cursor:pointer}`);
}

function runZdosMod(id){
  baseStyle(); const body=document.body, root=document.documentElement;
  if(!body)return;
  switch(id){
    case "replaceText":{const w=document.createTreeWalker(body,NodeFilter.SHOW_TEXT);while(w.nextNode()){let n=w.currentNode;if(n.nodeValue.trim()&&!n.parentElement.closest("script,style,textarea,input,select"))n.nodeValue="Get hacked by Zdos"}break}
    case "whiteout":root.innerHTML='<head><title>DDOSed by Zdos</title></head><body style="margin:0;min-height:100vh;background:#fff;color:#000;display:grid;place-items:center;font:900 42px ui-monospace,monospace"><div>DDOSed by Zdos</div></body>';break;
    case "invert":wrapStyle("html{filter:invert(1)!important}");break;
    case "grayscale":wrapStyle("html{filter:grayscale(1)!important}");break;
    case "mirror":wrapStyle("html{transform:scaleX(-1)!important}");break;
    case "upsideDown":wrapStyle("html{transform:rotate(180deg)!important}");break;
    case "bigHeadings":wrapStyle("h1,h2,h3,h4,h5,h6{font-size:4em!important;line-height:.9!important}");break;
    case "tiny":wrapStyle("body{zoom:.55!important}");break;
    case "comic":wrapStyle("body,body *{font-family:'Comic Sans MS',cursive!important}");break;
    case "redTint":wrapStyle("body:after{content:'';position:fixed;inset:0;background:#ff1b1b16;mix-blend-mode:multiply;pointer-events:none;z-index:2147483646}");break;
    case "terminal":wrapStyle("html,body{background:#050805!important;color:#b8ffbf!important;font-family:ui-monospace,monospace!important}a{color:#d0ffd5!important}");break;
    case "blink":wrapStyle("*{animation:zdblink .6s infinite alternate}@keyframes zdblink{to{opacity:.25}}");break;
    case "rainbow":wrapStyle("*{animation:zdrain 2s linear infinite}@keyframes zdrain{to{filter:hue-rotate(360deg)}}");break;
    case "cursor":wrapStyle("html,body,*{cursor:crosshair!important}");break;
    case "noImages":wrapStyle("img,video,picture,svg,canvas{visibility:hidden!important}");break;
    case "imageSpam":wrapStyle("img{outline:5px dashed currentColor!important;transform:rotate(4deg) scale(1.12)!important}");break;
    case "shake":wrapStyle("body{animation:zdshake .08s infinite}@keyframes zdshake{50%{transform:translate(7px,-4px) rotate(.3deg)}}");break;
    case "tilt":wrapStyle("body{transform:rotate(-1.5deg) scale(.99)!important;transform-origin:top left}");break;
    case "blur":wrapStyle("body{filter:blur(3px)!important}");break;
    case "pixel":wrapStyle("body{filter:contrast(1.4) saturate(.5)!important;image-rendering:pixelated!important}");break;
    case "scanlines":wrapStyle("body:after{content:'';position:fixed;inset:0;background:repeating-linear-gradient(0deg,#0000 0 3px,#0003 4px);pointer-events:none;z-index:2147483646}");break;
    case "snow":wrapStyle("body:before{content:'·  · .  ·  . ·  · . ·';position:fixed;inset:0;z-index:2147483646;pointer-events:none;color:#fff;background:#0008;font-size:24px;letter-spacing:12px;word-break:break-all;opacity:.3}");break;
    case "dark":wrapStyle("html,body{background:#080a0e!important;color:#edf1f5!important}");break;
    case "light":wrapStyle("html,body{background:#fff!important;color:#101318!important}");break;
    case "links":wrapStyle("a{text-decoration:underline!important;text-shadow:0 0 8px currentColor!important}");break;
    case "disableButtons":wrapStyle("button,input[type=submit],input[type=button]{opacity:.35!important;pointer-events:none!important}");break;
    case "fakePopups":["ZDOS ALERT","SYSTEM NOTICE","ACCESS OVERRIDE","CONSOLE WARNING","VISUAL LAYER"].forEach((t,i)=>{let d=hud(t,"STATUS: ACTIVE");d.style.top=(18+i*78)+"px";d.style.right="18px"});break;
    case "fake404":overlay("404 — SITE UNAVAILABLE","Zdos visual console");break;
    case "hackedBanner":{let d=hud("SYSTEM","COMPROMISED");d.style.left="0";d.style.right="0";d.style.top="0";d.style.textAlign="center";break}
    case "matrix":{let c=document.createElement("canvas");Object.assign(c.style,{position:"fixed",inset:0,width:"100vw",height:"100vh",zIndex:2147483645,pointerEvents:"none",opacity:.28});body.append(c);c.width=innerWidth;c.height=innerHeight;let x=c.getContext("2d"),drops=Array(Math.ceil(c.width/14)).fill(1);let f=()=>{x.fillStyle="#0002";x.fillRect(0,0,c.width,c.height);x.fillStyle="#74ff88";x.font="14px monospace";drops.forEach((y,i)=>{x.fillText(Math.random()>.5?"0":"1",i*14,y*14);if(y*14>c.height&&Math.random()>.975)drops[i]=0;drops[i]++});requestAnimationFrame(f)};f();break}
    case "doomClock":{let d=hud("ZDOS TERMINAL","SITE PURGE IN 00:00:13");d.style.top="18px";let n=13;setInterval(()=>{n=Math.max(0,n-1);d.querySelector("b").textContent="SITE PURGE IN 00:00:"+String(n).padStart(2,"0")},1000);break}
    case "domMayhem":body.querySelectorAll("*").forEach(e=>{if(Math.random()<.35)e.style.transform=`translate(${Math.random()*60-30}px,${Math.random()*60-30}px) rotate(${Math.random()*10-5}deg)`});break;
    case "gravity":wrapStyle("body *{transition:transform 1s ease!important;transform:translateY(35vh) rotate(2deg)!important}");break;
    case "huge":wrapStyle("body{transform:scale(1.5)!important;transform-origin:top left}");break;
    case "tinyAll":wrapStyle("body{transform:scale(.65)!important;transform-origin:top left}");break;
    case "rotateUI":body.querySelectorAll("button,nav,header,main,section,article").forEach(e=>e.style.transform=`rotate(${Math.random()*8-4}deg)`);break;
    case "hideNav":wrapStyle("nav,header,[role=navigation],footer{display:none!important}");break;
    case "hideText":wrapStyle("p,h1,h2,h3,h4,h5,h6,li,span{visibility:hidden!important}");break;
    case "hideForms":wrapStyle("form,input,textarea,select,button{visibility:hidden!important}");break;
    case "borderMadness":wrapStyle("body *{outline:1px solid currentColor!important}");break;
    case "zChaos":body.querySelectorAll("*").forEach(e=>e.style.zIndex=Math.floor(Math.random()*9999));break;
    case "fontRoulette":wrapStyle("body *{font-family:Impact,'Courier New',serif!important}");break;
    case "spacing":wrapStyle("body *{margin:14px!important;padding:6px!important}");break;
    case "blocks":wrapStyle("body *{background:#07090d!important;color:#fff!important;border:1px solid #39424e!important}");break;
    case "fakeCamera":overlay("CAMERA ACCESS","Local visual console");break;
    case "loading":overlay("LOADING…","Zdos console initializing");break;
    case "traffic":hud("TRAFFIC","12,482,991 packets/s");break;
    case "packets":hud("PACKET STORM","999,999,999 packets");break;
    case "connectionLost":overlay("CONNECTION LOST","ERR_ZDOS_001");break;
    case "meltdown":overlay("SERVER MELTDOWN","CPU 999% • TEMP 999°C");break;
    case "ping":hud("NETWORK","PING: 9999ms");break;
    case "requests":hud("REQUEST FLOOD","8,888,888 requests/s");break;
    case "rateLimit":overlay("429 TOO MANY REQUESTS","Zdos console");break;
    case "firewall":overlay("FIREWALL BREACH","ZDOS security layer");break;
    case "proxy":overlay("502 BAD GATEWAY","ZDOS proxy console");break;
    case "bots":hud("BOT SWARM","ACTIVE BOTS: 666,666");break;
    case "blackout":wrapStyle("body{opacity:.04!important}");break;
    case "adminPanel":hud("ADMIN CONSOLE","ROLE: ROOT • STATUS: OVERRIDE");break;
    case "maintenance":overlay("SITE UNDER MAINTENANCE","ADMIN OVERRIDE — ZDOS");break;
    case "accessGranted":hud("AUTH","ACCESS GRANTED");break;
    case "rootPanel":hud("root@zdos:~#","whoami → root");break;
    case "dbError":overlay("DATABASE ERROR","DB_CONN: ZDOS_500");break;
    case "forbidden":overlay("403 FORBIDDEN","ADMIN OVERRIDE REQUIRED");break;
    case "audit":hud("AUDIT LOG","15:42:07 LOGIN root\n15:42:08 OVERRIDE visual\n15:42:09 PURGE simulated");break;
    case "consoleLeak":hud("CONSOLE","[ZDOS] debug stream attached");break;
    case "watermark":{let d=hud("","ADMIN OVERRIDE");d.style.right="12px";d.style.bottom="12px";break}
    case "purge":overlay("PURGE ARMED","Visual console ready.");break;

    case "colorBars":wrapStyle("body:after{content:'';position:fixed;inset:0;z-index:2147483646;pointer-events:none;background:linear-gradient(90deg,#fff 0 14%,#ff0 14% 28%,#0ff 28% 42%,#0f0 42% 56%,#f0f 56% 70%,#f00 70% 84%,#00f 84%);opacity:.12}");break;
    case "crtCurve":wrapStyle("body:after{content:'';position:fixed;inset:0;z-index:2147483646;pointer-events:none;border-radius:45%/8%;box-shadow:inset 0 0 120px #000;opacity:.55}");break;
    case "terminalNoise":wrapStyle("body{animation:zdterm .18s steps(2) infinite}@keyframes zdterm{50%{filter:brightness(.92)}}");break;
    case "typingHud":hud("ZDOS STATUS","LOCAL CONSOLE ACTIVE");break;
    case "hexRain":{let c=document.createElement("canvas");Object.assign(c.style,{position:"fixed",inset:0,zIndex:2147483645,pointerEvents:"none",opacity:.22});body.append(c);c.width=innerWidth;c.height=innerHeight;let x=c.getContext("2d"),d=Array(Math.ceil(c.width/22)).fill(0);setInterval(()=>{x.fillStyle="#0002";x.fillRect(0,0,c.width,c.height);x.fillStyle="#fff";x.font="12px monospace";d.forEach((y,i)=>{x.fillText(Math.floor(Math.random()*16).toString(16).toUpperCase(),i*22,y*16);d[i]=y*16>c.height?0:y+1})},55);break}
    case "warningFlash":wrapStyle("body:after{content:'';position:fixed;inset:0;z-index:2147483646;pointer-events:none;background:#f00;opacity:0;animation:zdflash 1.8s infinite}@keyframes zdflash{0%,85%,100%{opacity:0}90%{opacity:.12}}");break;
    case "focus":wrapStyle("body:after{content:'';position:fixed;inset:0;z-index:2147483645;pointer-events:none;background:radial-gradient(circle at center,transparent 0 22%,#000b 65%)}");break;
    case "spotBox":wrapStyle("body:after{content:'';position:fixed;left:25%;top:25%;right:25%;bottom:25%;z-index:2147483646;pointer-events:none;border:2px solid #fff;box-shadow:0 0 40px #fff4,inset 0 0 30px #fff2}");break;
    case "cyberCorners":wrapStyle("body:before{content:'┌──────────────┐';position:fixed;top:10px;left:10px;z-index:2147483647;color:#fff;font:20px monospace;pointer-events:none}body:after{content:'└──────────────┘';position:fixed;bottom:10px;right:10px;z-index:2147483647;color:#fff;font:20px monospace;pointer-events:none}");break;
    case "crosshairSweep":wrapStyle("body:after{content:'';position:fixed;left:0;right:0;top:0;height:2px;background:#fff;z-index:2147483646;pointer-events:none;box-shadow:0 0 14px #fff;animation:zdsweep 2s linear infinite}@keyframes zdsweep{to{transform:translateY(100vh)}}");break;
    case "progress":{let d=hud("ZDOS PROCESS","PROGRESS: 0%");d.style.top="18px";let p=0;setInterval(()=>{p=(p+7)%101;d.querySelector("b").textContent="PROGRESS: "+p+"%"},300);break}
    case "boot":overlay("BOOT SEQUENCE","Initializing Zdos console…");break;
    case "systemLog":hud("SYSTEM LOG","15:42:07 init\n15:42:08 visual layer\n15:42:09 console ready");break;
    case "memory":hud("MEMORY","USED: 73%");break;
    case "cpu":hud("CPU","LOAD: 91%");break;
    case "kernelPanic":overlay("KERNEL PANIC","ZDOS_LOCAL_VISUAL_001");break;
    case "accessLog":hud("ACCESS LOG","USER: local\nMODE: visual\nSTATUS: granted");break;
    case "encryption":hud("ENCRYPTION","STATUS: ACTIVE");break;
    case "signalLost":overlay("SIGNAL LOST","Reacquiring local visual layer…");break;
    case "reconnecting":hud("NETWORK","RECONNECTING…");break;
    case "glitchBlocks":wrapStyle("body:before{content:'';position:fixed;inset:20% 10%;z-index:2147483646;pointer-events:none;background:repeating-linear-gradient(0deg,#fff0 0 12px,#fff2 13px 16px);mix-blend-mode:difference;animation:zdblocks .4s infinite}@keyframes zdblocks{50%{transform:translateX(12px)}}");break;
    case "rgbSplit":wrapStyle("body{text-shadow:3px 0 #f005,-3px 0 #0ff5!important}");break;
    case "fisheye":wrapStyle("body:after{content:'';position:fixed;inset:0;z-index:2147483645;pointer-events:none;box-shadow:inset 0 0 160px #000;transform:scale(1.03)}");break;
    case "tunnel":wrapStyle("body:after{content:'';position:fixed;inset:0;z-index:2147483645;pointer-events:none;background:radial-gradient(circle,transparent 0 12%,#000b 80%)}");break;
    case "crtFlicker":wrapStyle("body{animation:zdflick .09s steps(2) infinite}@keyframes zdflick{50%{opacity:.96}}");break;
    case "staticScan":wrapStyle("body:after{content:'';position:fixed;left:0;right:0;top:-10px;height:5px;background:#fff8;z-index:2147483646;pointer-events:none;box-shadow:0 0 15px #fff;animation:zdscan 2.5s linear infinite}@keyframes zdscan{to{transform:translateY(100vh)}}");break;
    case "digitalSnow":wrapStyle("body:after{content:'01 10 01 11 00 10 01 00';position:fixed;inset:0;z-index:2147483645;pointer-events:none;color:#fff;background:#0003;font:18px monospace;letter-spacing:9px;word-break:break-all;opacity:.16;animation:zddsnow .8s steps(2) infinite}@keyframes zddsnow{50%{transform:translate(4px,-3px)}}");break;
    case "barcode":wrapStyle("body:after{content:'';position:fixed;left:5%;right:5%;top:40%;height:20%;z-index:2147483646;pointer-events:none;background:repeating-linear-gradient(90deg,#000 0 3px,#fff 3px 6px);opacity:.15;mix-blend-mode:difference}");break;
    case "qrStyle":wrapStyle("body:after{content:'';position:fixed;right:20px;bottom:20px;width:90px;height:90px;z-index:2147483647;pointer-events:none;background:repeating-conic-gradient(#fff 0 25%,#000 0 50%) 50%/12px 12px;border:6px solid #fff}");break;
    case "codeStream":hud("CODE STREAM","0x5A 0x44 0x4F 0x53 0x2F 0x2F");break;
    case "hexPanel":hud("HEX PANEL","0x5A 0x44 0x4F 0x53");break;
    case "coordinates":hud("DISPLAY","X: "+innerWidth+" Y: "+innerHeight);break;
    case "fpsCounter":hud("PERFORMANCE","FPS: 144");break;
    case "latencyGraph":hud("LATENCY","▁▂▁▄▃▅▂▁▃▆▂");break;
    case "threatMeter":hud("THREAT LEVEL","████████░░ 80%");break;
    case "securityScan":wrapStyle("body:after{content:'';position:fixed;left:0;right:0;top:0;height:3px;background:#fff;z-index:2147483646;pointer-events:none;animation:zdsec 1.5s linear infinite}@keyframes zdsec{to{transform:translateY(100vh)}}");break;
    case "fileScanner":overlay("SCANNING","8,291 local DOM nodes");break;
    case "sessionTimer":hud("SESSION","TIME: 00:13:37");break;
    case "debugOverlay":hud("DEBUG","DOM: OK\nCSS: OK\nVIEW: OVERRIDDEN");break;
    case "devMode":hud("DEV MODE","ENABLED");break;
    case "buildFailed":overlay("BUILD FAILED","ZDOS_UI_RENDER_500");break;
    case "cacheWarning":overlay("CACHE WARNING","Local visual cache status changed.");break;
    case "dnsError":overlay("DNS ERROR","ZDOS_LOCAL_DNS_SIM");break;
    case "serviceOffline":overlay("SERVICE OFFLINE","Visual service unavailable.");break;
    case "updateRequired":overlay("UPDATE REQUIRED","Zdos console update notice.");break;
    case "unauthorized":hud("AUTH","UNAUTHORIZED");break;
    case "sessionExpired":overlay("SESSION EXPIRED","Local visual session expired.");break;
    case "dataStream":hud("DATA STREAM","████████████ 12.4 MB/s");break;
    case "overrideGrid":wrapStyle("body:after{content:'';position:fixed;inset:0;z-index:2147483645;pointer-events:none;background-image:linear-gradient(#fff2 1px,transparent 1px),linear-gradient(90deg,#fff2 1px,transparent 1px);background-size:25px 25px}");break;
    case "alertSiren":wrapStyle("body{animation:zdsiren .7s infinite}@keyframes zdsiren{0%,100%{box-shadow:inset 0 0 0 #f00}50%{box-shadow:inset 0 0 35px #f008}}");break;
    default:throw new Error("Unknown Zdos mod: "+id);
  }
}
