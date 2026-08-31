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
function fakeCamera(){overlay("CAMERA ACCESS","This is a harmless visual simulation. No camera is accessed.");}
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

function overlay(title,sub){let d=document.createElement("div");d.innerHTML=`<div style="font-size:34px">${title}</div><div style="font-size:13px;margin-top:10px">${sub}</div><button style="margin-top:18px;padding:8px 14px;background:#fff;color:#000;border:0;cursor:pointer">CLOSE</button>`;Object.assign(d.style,{position:"fixed",inset:0,zIndex:2147483647,display:"grid",placeContent:"center",textAlign:"center",background:"#050505ee",color:"#fff",font:"900 18px monospace"});d.querySelector("button").onclick=()=>d.remove();document.body.append(d)}
function hud(a,b){let d=document.createElement("div");d.innerHTML=`<div style="font-size:10px;opacity:.6">${a}</div><b style="display:block;margin-top:5px">${b}</b>`;Object.assign(d.style,{position:"fixed",right:"14px",top:"14px",zIndex:2147483647,padding:"12px 16px",background:"#050505",color:"#fff",border:"1px solid #fff",font:"12px monospace",whiteSpace:"pre"});document.body.append(d);return d}
