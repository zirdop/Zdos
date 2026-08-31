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
["Popups","Spawn harmless fake alert cards.","fakePopups"],
["404 Overlay","Put a giant fake 404 overlay on the page.","fake404"],
["Hacked Banner","Add a top “SYSTEM COMPROMISED” banner.","hackedBanner"],
["Matrix Rain","Add a green matrix-style overlay.","matrix"],
["Doom Clock","Add a fake countdown HUD.","doomClock"],
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
["Webcam Pretend","Add a fake “camera access” overlay.","fakeCamera"],
["Loading Forever","Add a fake endless loading screen.","loading"],
],
DDOS: [
["DDOSed Screen","White page + centered “DDOSed by Zdos”.","whiteout"],
["Traffic Flood","Show a fake local traffic monitor HUD.","traffic"],
["Packet Storm","Animate fake packet counters.","packets"],
["Connection Lost","Show a fake connection-lost overlay.","connectionLost"],
["Server Meltdown","Show a fake overheating server warning.","meltdown"],
["Ping Spike","Add a fake 9999ms ping badge.","ping"],
["Request Flood","Animate fake request numbers only.","requests"],
["Rate Limited","Show a fake 429 rate-limit screen.","rateLimit"],
["Firewall Breach","Show a fake firewall alert.","firewall"],
["Proxy Error","Show a fake proxy error page.","proxy"],
["Bot Swarm","Add a fake swarm counter HUD.","bots"],
["Blackout","Fade the page almost completely out.","blackout"],
],
Admin: [
["Admin Panel","Add a fake admin control panel overlay.","adminPanel"],
["Maintenance","Show a fake maintenance notice.","maintenance"],
["Access Granted","Add a green “ACCESS GRANTED” badge.","accessGranted"],
["Root Mode","Add a fake root terminal panel.","rootPanel"],
["Database Error","Show a fake database error overlay.","dbError"],
["Permission Denied","Add a fake 403 overlay.","forbidden"],
["Audit Log","Add a scrolling fake audit log.","audit"],
["Console Leak","Add a fake console readout.","consoleLeak"],
["Admin Watermark","Stamp the page with “ADMIN OVERRIDE”.","watermark"],
["Purge Notice","Show a fake purge warning.","purge"]
]};

const all = Object.fromEntries(Object.values(mods).flat().map(x=>[x[2],x[0]]));

function toast(t){const x=document.createElement("div");x.className="toast";x.textContent=t;document.body.appendChild(x);setTimeout(()=>x.remove(),1300)}
function inject(fn, arg=null){chrome.tabs.query({active:true,currentWindow:true},tabs=>{if(!tabs[0]?.id)return;chrome.scripting.executeScript({target:{tabId:tabs[0].id},func:window[fn],args:[arg]}).then(()=>toast("Applied: "+(all[fn]||fn))).catch(()=>toast("Chrome blocked this page"));})}

function show(tab){
 const box=document.getElementById("mods");
 if(tab==="Info"){box.innerHTML=`<div class="info"><h2>Zdos // website destroyer</h2><p>A prank-style visual mod console. Every effect runs in the active tab and is local to your browser session.</p><p><b>Important:</b> “DDOS”, traffic, packets, bots and server alerts are <i>fake visual simulations</i>. Zdos does not send traffic, attack servers, alter network requests, or contact external services.</p><p>Use <code>RESET PAGE</code> or reload the tab to remove effects.</p></div>`;return}
 box.innerHTML='<div class="grid">'+mods[tab].map(m=>`<div class="card"><div><div class="modname">${m[0]}</div><div class="desc">${m[1]}</div></div><button class="run" data-fn="${m[2]}">RUN</button></div>`).join("")+'</div>';
 box.querySelectorAll(".run").forEach(b=>b.onclick=()=>inject(b.dataset.fn));
}
document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>{document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));b.classList.add("active");show(b.dataset.tab)});
document.getElementById("reset").onclick=()=>inject("zdosReset");
show("Info");

function zdosReset(){location.reload()}

function wrapStyle(css,id="zdos-style"){let s=document.getElementById(id);if(!s){s=document.createElement("style");s.id=id;document.documentElement.appendChild(s)}s.textContent=css}
function replaceText(){document.body.innerText="Get hacked by Zdos";document.body.style.cssText="font:900 42px monospace;display:grid;place-items:center;min-height:100vh;background:#000;color:#fff;text-align:center"}
function whiteout(){document.documentElement.innerHTML='<head><title>DDOSed by Zdos</title></head><body style="margin:0;min-height:100vh;background:#fff;color:#000;display:grid;place-items:center;font:900 42px monospace"><div>DDOSed by Zdos</div></body>'}
function invert(){wrapStyle("html{filter:invert(1)!important}")}
function grayscale(){wrapStyle("html{filter:grayscale(1)!important}")}
function mirror(){wrapStyle("html{transform:scaleX(-1)!important}")}
function upsideDown(){wrapStyle("html{transform:rotate(180deg)!important}")}
function bigHeadings(){wrapStyle("h1,h2,h3,h4,h5,h6{font-size:4em!important;line-height:.9!important}")}
function tiny(){wrapStyle("body{zoom:.55!important}")}
function comic(){wrapStyle("*,button,input,textarea{font-family:'Comic Sans MS',cursive!important}")}
function redTint(){wrapStyle("body:after{content:'';position:fixed;inset:0;background:#f004;mix-blend-mode:multiply;pointer-events:none;z-index:2147483646}")}
function terminal(){wrapStyle("body{background:#050505!important;color:#7cff7c!important;font-family:monospace!important}a{color:#9f9!important}img{filter:grayscale(1)}")}
function blink(){wrapStyle("*{animation:zdblink .6s infinite alternate}@keyframes zdblink{to{opacity:.25}}")}
function rainbow(){wrapStyle("*{animation:zdrain 2s linear infinite}@keyframes zdrain{to{filter:hue-rotate(360deg)}}")}
function cursor(){wrapStyle("html,body,*{cursor:crosshair!important}")}
function noImages(){wrapStyle("img,video,picture,svg{visibility:hidden!important}")}
function imageSpam(){wrapStyle("img{outline:12px dashed #000!important;transform:rotate(7deg) scale(1.3)!important}")}
function shake(){wrapStyle("body{animation:zdshake .08s infinite}@keyframes zdshake{50%{transform:translate(8px,-5px) rotate(.5deg)}}")}
function tilt(){wrapStyle("body{transform:rotate(-1.5deg) scale(.99)!important;transform-origin:top left}")}
function blur(){wrapStyle("body{filter:blur(3px)!important}")}
function pixel(){wrapStyle("body{image-rendering:pixelated!important;filter:contrast(1.4) saturate(.4)!important}")}
function scanlines(){wrapStyle("body:after{content:'';position:fixed;inset:0;background:repeating-linear-gradient(0deg,#0000 0 3px,#0003 4px);pointer-events:none;z-index:2147483646}")}
function snow(){wrapStyle("body:before{content:'· ·  ·  . ·  .  · · . · . ·';position:fixed;inset:0;z-index:2147483646;pointer-events:none;color:#fff;background:#0008;font-size:24px;letter-spacing:12px;word-break:break-all;opacity:.35}")}
function dark(){wrapStyle("html{background:#090909!important}body{background:#090909!important;color:#eee!important}")}
function light(){wrapStyle("body{background:#fff!important;color:#000!important}")}
function links(){wrapStyle("a{ text-decoration:underline!important;text-shadow:0 0 8px currentColor!important}")}
function disableButtons(){wrapStyle("button,input[type=submit],input[type=button]{opacity:.35!important;pointer-events:none!important}")}
function fakePopups(){for(let i=0;i<5;i++){let d=document.createElement("div");d.textContent=["ZDOS ALERT","SYSTEM NOTICE","HACK DETECTED","LOCAL DDOS SIMULATION","ACCESS OVERRIDE"][i];Object.assign(d.style,{position:"fixed",zIndex:2147483647,top:(12+i*15)+"%",left:(10+i*7)+"%",padding:"14px 20px",background:"#111",color:"#fff",border:"2px solid #fff",boxShadow:"8px 8px 0 #000",font:"bold 13px monospace"});document.body.appendChild(d)}}
function fake404(){overlay("404 — SITE DESTROYED","Zdos says hello.");}
function hackedBanner(){let d=document.createElement("div");d.textContent="⚠ SYSTEM COMPROMISED — ZDOS";Object.assign(d.style,{position:"fixed",top:0,left:0,right:0,zIndex:2147483647,padding:"12px",background:"#000",color:"#fff",textAlign:"center",font:"900 16px monospace"});document.body.prepend(d)}
function matrix(){let c=document.createElement("canvas");Object.assign(c.style,{position:"fixed",inset:0,zIndex:2147483646,pointerEvents:"none",opacity:.3});document.body.append(c);let x=c.getContext("2d");c.width=innerWidth;c.height=innerHeight;let drops=Array(Math.ceil(c.width/14)).fill(1);setInterval(()=>{x.fillStyle="#0001";x.fillRect(0,0,c.width,c.height);x.fillStyle="#0f0";x.font="14px monospace";drops.forEach((y,i)=>{x.fillText(Math.random()>.5?"0":"1",i*14,y*14);if(y*14>c.height&&Math.random()>.975)drops[i]=0;drops[i]++})},45)}
function doomClock(){let d=hud("ZDOS // TERMINAL", "SITE PURGE IN 00:00:13");let n=13;let t=setInterval(()=>{n--;d.querySelector("b").textContent="SITE PURGE IN 00:00:"+String(Math.max(n,0)).padStart(2,"0");if(n<=0)clearInterval(t)},1000)}
function domMayhem(){document.querySelectorAll("body *").forEach(e=>{if(Math.random()<.45)e.style.transform=`translate(${Math.random()*80-40}px,${Math.random()*80-40}px) rotate(${Math.random()*12-6}deg)`})}
function gravity(){wrapStyle("body *{transition:transform 1s ease!important;transform:translateY(35vh) rotate(2deg)!important}")}
function huge(){wrapStyle("body{transform:scale(1.6)!important;transform-origin:top left}")}
function tinyAll(){wrapStyle("body{transform:scale(.65)!important;transform-origin:top left}")}
function rotateUI(){document.querySelectorAll("button,nav,header,main,section,article").forEach(e=>e.style.transform=`rotate(${Math.random()*8-4}deg)`)}
function hideNav(){wrapStyle("nav,header,[role=navigation],footer{display:none!important}")}
function hideText(){wrapStyle("p,h1,h2,h3,h4,h5,h6,li,span{visibility:hidden!important}")}
function hideForms(){wrapStyle("form,input,textarea,select,button{visibility:hidden!important}")}
function borderMadness(){wrapStyle("body *{outline:1px solid currentColor!important}")}
function zChaos(){document.querySelectorAll("body *").forEach(e=>e.style.zIndex=Math.floor(Math.random()*9999))}
function fontRoulette(){wrapStyle("body *{font-family:Impact,'Courier New',serif!important}")}
function spacing(){wrapStyle("body *{margin:18px!important;padding:8px!important}")}
function blocks(){wrapStyle("body *{background:#000!important;color:#fff!important;border:2px solid #fff!important}")}
function fakeCamera(){overlay("CAMERA ACCESS","Get Access to other people using ts");}
function loading(){overlay("LOADING…","Zdos is pretending to load the universe.");}
function traffic(){hud("DDOS // TRAFFIC SIM", "12,482,991 packets/s")}
function packets(){hud("DDOS // PACKET STORM", "PACKETS: 999,999,999")}
function connectionLost(){overlay("CONNECTION LOST","ERR_ZDOS_LOCAL_SIMULATION");}
function meltdown(){overlay("SERVER MELTDOWN","CPU 999% • TEMP 999°C • This is fake.");}
function ping(){hud("NETWORK", "PING: 9999ms")}
function requests(){hud("REQUEST FLOOD", "REQUESTS: 8,888,888/s")}
function rateLimit(){overlay("429 TOO MANY REQUESTS","Zdos local visual simulation.");}
function firewall(){overlay("FIREWALL BREACH","RULESET: ZDOS_SIMULATION_ONLY");}
function proxy(){overlay("502 BAD GATEWAY","Proxy simulation — no network traffic was sent.");}
function bots(){hud("BOT SWARM", "ACTIVE BOTS: 666,666")}
function blackout(){wrapStyle("body{opacity:.04!important}")}
function adminPanel(){hud("ADMIN CONSOLE","ROLE: ROOT • STATUS: OVERRIDE")}
function maintenance(){overlay("SITE UNDER MAINTENANCE","ADMIN OVERRIDE — ZDOS");}
function accessGranted(){hud("AUTH", "ACCESS GRANTED")}
function rootPanel(){hud("root@zdos:~#", "whoami → root")}
function dbError(){overlay("DATABASE ERROR","DB_CONN: ZDOS_FAKE_500");}
function forbidden(){overlay("403 FORBIDDEN","ADMIN OVERRIDE REQUIRED");}
function audit(){hud("AUDIT LOG","15:42:07  LOGIN root\\n15:42:08  OVERRIDE visual\\n15:42:09  PURGE simulated")}
function consoleLeak(){hud("CONSOLE LEAK","[ZDOS] debug stream attached")}
function watermark(){let d=document.createElement("div");d.textContent="ADMIN OVERRIDE";Object.assign(d.style,{position:"fixed",right:"10px",bottom:"10px",zIndex:2147483647,color:"#fff",background:"#000",padding:"8px",font:"bold 12px monospace"});document.body.append(d)}
function purge(){overlay("PURGE ARMED","Relax — this is only a visual effect.");}


function colorBars(){wrapStyle("body:after{content:'';position:fixed;inset:0;z-index:2147483646;pointer-events:none;background:linear-gradient(90deg,#fff 0 14%,#ff0 14% 28%,#0ff 28% 42%,#0f0 42% 56%,#f0f 56% 70%,#f00 70% 84%,#00f 84%);opacity:.12}")}
function crtCurve(){wrapStyle("body:after{content:'';position:fixed;inset:0;z-index:2147483646;pointer-events:none;border-radius:45%/8%;box-shadow:inset 0 0 120px #000;opacity:.55}")}
function terminalNoise(){wrapStyle("body{animation:zdterm .18s steps(2) infinite}@keyframes zdterm{50%{filter:brightness(.92)}}")}
function typingHud(){hud("ZDOS STATUS","LOCAL VISUAL CONSOLE ACTIVE")}
function hexRain(){let c=document.createElement("canvas");Object.assign(c.style,{position:"fixed",inset:0,zIndex:2147483645,pointerEvents:"none",opacity:.22});document.body.append(c);let x=c.getContext("2d");c.width=innerWidth;c.height=innerHeight;let d=Array(Math.ceil(c.width/22)).fill(0);setInterval(()=>{x.fillStyle="#0002";x.fillRect(0,0,c.width,c.height);x.fillStyle="#fff";x.font="12px monospace";d.forEach((y,i)=>{x.fillText(Math.floor(Math.random()*16).toString(16).toUpperCase(),i*22,y*16);d[i]=y*16>c.height?0:y+1})},55)}
function warningFlash(){wrapStyle("body:after{content:'';position:fixed;inset:0;z-index:2147483646;pointer-events:none;background:#f00;opacity:0;animation:zdflash 1.8s infinite}@keyframes zdflash{0%,85%,100%{opacity:0}90%{opacity:.12}}")}
function focus(){wrapStyle("body:after{content:'';position:fixed;inset:0;z-index:2147483645;pointer-events:none;background:radial-gradient(circle at center,transparent 0 22%,#000b 65%)}")}
function spotBox(){wrapStyle("body:after{content:'';position:fixed;left:25%;top:25%;right:25%;bottom:25%;z-index:2147483646;pointer-events:none;border:2px solid #fff;box-shadow:0 0 40px #fff4,inset 0 0 30px #fff2}")}
function cyberCorners(){wrapStyle("body:before{content:'┌──────────────┐';position:fixed;top:10px;left:10px;z-index:2147483647;color:#fff;font:20px monospace;pointer-events:none}body:after{content:'└──────────────┘';position:fixed;bottom:10px;right:10px;z-index:2147483647;color:#fff;font:20px monospace;pointer-events:none}")}
function crosshairSweep(){wrapStyle("body:after{content:'';position:fixed;left:0;right:0;top:0;height:2px;background:#fff;z-index:2147483646;pointer-events:none;box-shadow:0 0 14px #fff;animation:zdsweep 2s linear infinite}@keyframes zdsweep{to{transform:translateY(100vh)}}")}
function progress(){let d=hud("ZDOS PROCESS","");let p=0;let t=setInterval(()=>{p=(p+7)%101;d.querySelector("b").textContent="PROGRESS: "+p+"%"},300)}
function boot(){overlay("BOOT SEQUENCE","Initializing Zdos visual console…")}
function systemLog(){hud("SYSTEM LOG","15:42:07  init\\n15:42:08  visual layer\\n15:42:09  console ready")}
function memory(){hud("MEMORY","USED: 73%")}
function cpu(){hud("CPU","LOAD: 91%")}
function kernelPanic(){overlay("KERNEL PANIC","ZDOS_LOCAL_VISUAL_001")}
function accessLog(){hud("ACCESS LOG","USER: local\\nMODE: visual\\nSTATUS: granted")}
function encryption(){hud("ENCRYPTION","AES VISUAL STATUS: ACTIVE")}
function signalLost(){overlay("SIGNAL LOST","Reacquiring local visual layer…")}
function reconnecting(){hud("NETWORK","RECONNECTING…")}
function glitchBlocks(){wrapStyle("body:before{content:'';position:fixed;inset:20% 10%;z-index:2147483646;pointer-events:none;background:repeating-linear-gradient(0deg,#fff0 0 12px,#fff2 13px 16px);mix-blend-mode:difference;animation:zdblocks .4s infinite}@keyframes zdblocks{50%{transform:translateX(12px)}}")}
function rgbSplit(){wrapStyle("body{ text-shadow:3px 0 #f005,-3px 0 #0ff5!important }")}
function fisheye(){wrapStyle("body:after{content:'';position:fixed;inset:0;z-index:2147483645;pointer-events:none;box-shadow:inset 0 0 160px #000;transform:scale(1.03)}")}
function tunnel(){wrapStyle("body:after{content:'';position:fixed;inset:0;z-index:2147483645;pointer-events:none;background:radial-gradient(circle,transparent 0 12%,#000b 80%)}")}
function crtFlicker(){wrapStyle("body{animation:zdflick .09s steps(2) infinite}@keyframes zdflick{50%{opacity:.96}}")}
function staticScan(){wrapStyle("body:after{content:'';position:fixed;left:0;right:0;top:-10px;height:5px;background:#fff8;z-index:2147483646;pointer-events:none;box-shadow:0 0 15px #fff;animation:zdscan 2.5s linear infinite}@keyframes zdscan{to{transform:translateY(100vh)}}")}
function digitalSnow(){wrapStyle("body:after{content:'01 10 01 11 00 10 01 00';position:fixed;inset:0;z-index:2147483645;pointer-events:none;color:#fff;background:#0003;font:18px monospace;letter-spacing:9px;word-break:break-all;opacity:.16;animation:zddsnow .8s steps(2) infinite}@keyframes zddsnow{50%{transform:translate(4px,-3px)}}")}
function barcode(){wrapStyle("body:after{content:'';position:fixed;left:5%;right:5%;top:40%;height:20%;z-index:2147483646;pointer-events:none;background:repeating-linear-gradient(90deg,#000 0 3px,#fff 3px 6px);opacity:.15;mix-blend-mode:difference}")}
function qrStyle(){wrapStyle("body:after{content:'';position:fixed;right:20px;bottom:20px;width:90px;height:90px;z-index:2147483647;pointer-events:none;background:repeating-conic-gradient(#fff 0 25%,#000 0 50%) 50%/12px 12px;border:6px solid #fff}")}
function codeRain(){hud("CODE STREAM","0x7A 0x44 0x4F 0x53 0x2F 0x2F")}
function hexPanel(){hud("HEX PANEL","0x5A 0x44 0x4F 0x53")}
function coordinates(){hud("DISPLAY","X: "+innerWidth+" Y: "+innerHeight)}
function fpsCounter(){hud("PERFORMANCE","FPS: 144")}
function latencyGraph(){hud("LATENCY","▁▂▁▄▃▅▂▁▃▆▂")}
function threatMeter(){hud("THREAT LEVEL","████████░░ 80%")}
function securityScan(){wrapStyle("body:after{content:'';position:fixed;left:0;right:0;top:0;height:3px;background:#fff;z-index:2147483646;pointer-events:none;animation:zdsec 1.5s linear infinite}@keyframes zdsec{to{transform:translateY(100vh)}}")}
function fileScanner(){overlay("SCANNING","Visual scan: 8,291 local DOM nodes")}
function accessTimer(){hud("SESSION","TIME: 00:13:37")}
function debugOverlay(){hud("DEBUG","DOM: OK\\nCSS: OK\\nVIEW: OVERRIDDEN")}
function devMode(){hud("DEV MODE","ENABLED")}
function buildFailed(){overlay("BUILD FAILED","ZDOS_UI_RENDER_500")}
function cacheCorrupt(){overlay("CACHE WARNING","Local visual cache appears unusual.")}
function dnsError(){overlay("DNS ERROR","ZDOS_LOCAL_DNS_SIM")}
function serviceOffline(){overlay("SERVICE OFFLINE","Visual service unavailable.")}
function updateRequired(){overlay("UPDATE REQUIRED","Zdos visual layer needs attention.")}
function unauthorized(){hud("AUTH","UNAUTHORIZED")}
function sessionExpired(){overlay("SESSION EXPIRED","Local visual session expired.")}
function dataStream(){hud("DATA STREAM","████████████ 12.4 MB/s")}
function overrideGrid(){wrapStyle("body:after{content:'';position:fixed;inset:0;z-index:2147483645;pointer-events:none;background-image:linear-gradient(#fff2 1px,transparent 1px),linear-gradient(90deg,#fff2 1px,transparent 1px);background-size:25px 25px}")}
function alertSiren(){wrapStyle("body{animation:zdsiren .7s infinite}@keyframes zdsiren{0%,100%{box-shadow:inset 0 0 0 #f00}50%{box-shadow:inset 0 0 35px #f008}}")}

function overlay(title,sub){let d=document.createElement("div");d.innerHTML=`<div style="font-size:34px">${title}</div><div style="font-size:13px;margin-top:10px">${sub}</div><button style="margin-top:18px;padding:8px 14px;background:#fff;color:#000;border:0;cursor:pointer">CLOSE</button>`;Object.assign(d.style,{position:"fixed",inset:0,zIndex:2147483647,display:"grid",placeContent:"center",textAlign:"center",background:"#050505ee",color:"#fff",font:"900 18px monospace"});d.querySelector("button").onclick=()=>d.remove();document.body.append(d)}
function hud(a,b){let d=document.createElement("div");d.innerHTML=`<div style="font-size:10px;opacity:.6">${a}</div><b style="display:block;margin-top:5px">${b}</b>`;Object.assign(d.style,{position:"fixed",right:"14px",top:"14px",zIndex:2147483647,padding:"12px 16px",background:"#050505",color:"#fff",border:"1px solid #fff",font:"12px monospace",whiteSpace:"pre"});document.body.append(d);return d}
