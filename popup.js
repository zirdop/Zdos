
const MODS = [["whitetout", "Whiteout", "Turns the page completely white with a centered Zdos screen."], ["replace", "Get Hacked Text", "Changes visible text to \u201cGet hacked by Zdos\u201d."], ["invert", "Invert World", "Inverts page colors."], ["redalert", "Red Alert", "Adds a red emergency tint and warning scanlines."], ["greenmatrix", "Matrix", "Green terminal-style overlay."], ["bluescreen", "Blue Screen", "Turns the page into a dramatic blue system screen."], ["glitch", "Glitch", "Animated RGB split / glitch effect."], ["scanlines", "Scanlines", "Retro CRT scanlines."], ["terminal", "Terminal", "Dark terminal styling."], ["noimages", "Image Purge", "Hides images and videos."], ["tiny", "Tiny Mode", "Makes the entire page comically tiny."], ["huge", "Huge Mode", "Makes page elements comically huge."], ["rotate", "Tilt", "Rotates the whole page a little."], ["upside", "Upside Down", "Flips the page vertically."], ["mirror", "Mirror", "Mirrors the page horizontally."], ["spin", "Spin", "Slowly spins the page."], ["shake", "Shake", "Shakes the page."], ["wobble", "Wobble", "Wobbles the page."], ["blur", "Blur", "Blurs the entire page."], ["pixel", "Pixel Vision", "Adds a chunky pixelated look."], ["sepia", "Old Web", "Sepia-toned vintage look."], ["mono", "Monochrome", "Black-and-white styling."], ["neon", "Neon", "Glowing neon text and borders."], ["comic", "Comic", "Comic-book-ish shadows and skew."], ["nocturne", "Nocturne", "Very dark night-mode styling."], ["snow", "Snow", "Adds a drifting snow overlay."], ["rain", "Rain", "Adds a rain-like overlay."], ["static", "Static", "Animated TV static texture."], ["vignette", "Vignette", "Darkens the edges."], ["spotlight", "Spotlight", "Focuses attention toward the center."], ["giantcursor", "Giant Cursor", "Makes the cursor enormous."], ["crosshair", "Crosshair", "Adds a crosshair cursor."], ["hidecursor", "Ghost Cursor", "Hides the cursor."], ["rainbow", "Rainbow", "Animated rainbow hue shift."], ["danger", "Danger Stripes", "Adds warning stripes around the viewport."], ["grid", "Grid", "Cyber grid overlay."], ["gridwarp", "Grid Warp", "Adds a perspective grid feel."], ["lowgravity", "Low Gravity", "Makes content drift slowly."], ["bouncy", "Bouncy", "Adds a bouncy feel to blocks."], ["squish", "Squish", "Compresses the page horizontally."], ["stretch", "Stretch", "Stretches the page vertically."], ["portal", "Portal", "Adds a swirling portal-like vignette."], ["radar", "Radar", "Adds a scanning radar overlay."], ["target", "Target Lock", "Adds targeting corners."], ["warning", "Warning", "Adds repeated warning banners."], ["classified", "Classified", "Applies redacted-bar styling."], ["corrupt", "Corrupt UI", "Adds broken-looking shadows and jitter."], ["ghost", "Ghost Mode", "Fades content and adds ghost trails."], ["echo", "Echo", "Adds subtle duplicated text shadows."], ["outline", "Outline", "Outlines major elements."], ["wireframe", "Wireframe", "Makes boxes look like a wireframe."], ["flat", "Flatland", "Removes most shadows and depth."], ["chaos", "Chaos", "Combines several dramatic effects."], ["ddos", "DDOS Screen", "White screen with centered \u201cDDOSed by Zdos\u201d."], ["admin", "Admin Override", "Adds an admin-style green status bar."]];
const groups = {
  Info: [],
  Main: ["whitetout","replace","invert","redalert","greenmatrix","bluescreen","glitch","scanlines","terminal","noimages","tiny","huge","rotate","upside","mirror","spin","shake","wobble","blur","pixel","sepia","mono"],
  FullDestroyer: ["neon","comic","nocturne","snow","rain","static","vignette","spotlight","giantcursor","crosshair","hidecursor","rainbow","danger","grid","gridwarp","lowgravity","bouncy","squish","stretch","portal","radar","target","warning","classified","corrupt","ghost","echo","outline","wireframe","flatland","chaos"],
  DDOS: ["ddos"],
  Admin: ["admin"]
};

const byId = Object.fromEntries(MODS.map(m=>[m[0],m]));

function render(tab="Info"){
  document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));
  const main=document.getElementById("mods"); main.innerHTML="";
  if(tab==="Info"){
    main.innerHTML=`<section class="panel active info">
      <h2>Zdos</h2>
      <p>A browser-side visual chaos toolkit.</p>
      <p>Pick a tab, flip mods on, and watch the current page change instantly.</p>
      <p>Use <b>Reset</b> to clear every Zdos effect from the active tab.</p>
      <p><b>55 mods loaded.</b></p>
      <p>Made by Zirdop.</p>
    </section>`;
    return;
  }
  const panel=document.createElement("section"); panel.className="panel active";
  for(const id of groups[tab]){
    const [mid,name,desc]=byId[id];
    const card=document.createElement("div"); card.className="card";
    card.innerHTML=`<div><div class="name">${name}</div><div class="desc">${desc}</div></div>
      <button class="toggle" data-id="${mid}" aria-label="${name}"></button>`;
    panel.appendChild(card);
  }
  main.appendChild(panel);
  panel.querySelectorAll(".toggle").forEach(btn=>btn.addEventListener("click",async()=>{
    const on=!btn.classList.contains("on");
    btn.classList.toggle("on",on);
    await runMod(btn.dataset.id,on);
  }));
}

async function runMod(id,on){
  try{
    const [tab]=await chrome.tabs.query({active:true,currentWindow:true});
    if(!tab?.id) return;
    await chrome.scripting.executeScript({
      target:{tabId:tab.id},
      func:applyZdosMod,
      args:[id,on]
    });
  }catch(e){
    console.warn("Zdos:",e);
  }
}

async function reset(){
  try{
    const [tab]=await chrome.tabs.query({active:true,currentWindow:true});
    if(tab?.id) await chrome.scripting.executeScript({target:{tabId:tab.id},func:resetZdos});
  }catch(e){console.warn(e)}
  document.querySelectorAll(".toggle").forEach(b=>b.classList.remove("on"));
}

document.querySelectorAll(".tab").forEach(b=>b.addEventListener("click",()=>render(b.dataset.tab)));
document.getElementById("reset").addEventListener("click",reset);
render();

function applyZdosMod(id,on){
  const S=window.__ZDOS__||(window.__ZDOS__={classes:new Set(), style:null, originals:[] , observer:null});
  if(!S.style){
    const st=document.createElement("style"); st.id="__zdos_style";
    st.textContent=`
      html.zd-invert{filter:invert(1)!important} html.zd-red{filter:saturate(1.8) hue-rotate(300deg)!important}
      html.zd-matrix{background:#020702!important;color:#32ff6a!important} html.zd-matrix *{color:#32ff6a!important;border-color:#185d28!important}
      html.zd-blue{background:#063b9c!important;color:#fff!important} html.zd-blue *{color:#fff!important}
      html.zd-glitch *{text-shadow:2px 0 #f00,-2px 0 #0ff!important;animation:zdgl .12s infinite alternate!important}
      @keyframes zdgl{to{transform:translateX(2px)}}
      html.zd-scan{background-image:repeating-linear-gradient(0deg,rgba(0,0,0,.18) 0 1px,transparent 1px 4px)!important}
      html.zd-terminal{background:#050505!important;color:#ddd!important} html.zd-terminal *{font-family:monospace!important}
      html.zd-noimages img,html.zd-noimages video,html.zd-noimages canvas{visibility:hidden!important}
      html.zd-tiny{zoom:.55!important} html.zd-huge{zoom:1.55!important}
      html.zd-rotate{transform:rotate(2deg)!important} html.zd-upside{transform:scaleY(-1)!important}
      html.zd-mirror{transform:scaleX(-1)!important} html.zd-spin{animation:zdspin 18s linear infinite!important}
      @keyframes zdspin{to{transform:rotate(360deg)}}
      html.zd-shake{animation:zdshake .13s infinite!important} @keyframes zdshake{25%{transform:translate(2px,-1px)}50%{transform:translate(-2px,2px)}75%{transform:translate(1px,1px)}}
      html.zd-wobble{animation:zdwob .6s infinite alternate ease-in-out!important} @keyframes zdwob{to{transform:skewX(2deg) translateY(3px)}}
      html.zd-blur{filter:blur(3px)!important} html.zd-pixel{image-rendering:pixelated!important}
      html.zd-sepia{filter:sepia(1)!important} html.zd-mono{filter:grayscale(1)!important}
      html.zd-neon *{text-shadow:0 0 7px currentColor!important;box-shadow:0 0 7px currentColor!important}
      html.zd-comic *{text-shadow:2px 2px 0 #000!important;transform:rotate(-.4deg)}
      html.zd-nocturne{background:#080808!important;color:#ddd!important} html.zd-nocturne *{background-color:rgba(0,0,0,.5)!important;color:#ddd!important}
      html.zd-vignette:after{content:"";position:fixed;inset:0;pointer-events:none;z-index:2147483646;box-shadow:inset 0 0 180px #000!important}
      html.zd-spot:after{content:"";position:fixed;inset:0;pointer-events:none;z-index:2147483646;background:radial-gradient(circle,transparent 0 25%,rgba(0,0,0,.8) 70%)!important}
      html.zd-giantcursor,html.zd-giantcursor *{cursor:crosshair!important}
      html.zd-crosshair,html.zd-crosshair *{cursor:crosshair!important}
      html.zd-hidecursor,html.zd-hidecursor *{cursor:none!important}
      html.zd-rainbow{animation:zdrainbow 3s linear infinite!important} @keyframes zdrainbow{to{filter:hue-rotate(360deg)}}
      html.zd-danger{outline:14px repeating-linear-gradient(45deg,#000 0 10px,#fff 10px 20px) solid!important}
      html.zd-grid:after{content:"";position:fixed;inset:0;pointer-events:none;z-index:2147483645;background-image:linear-gradient(#0f0 1px,transparent 1px),linear-gradient(90deg,#0f0 1px,transparent 1px);background-size:45px 45px;opacity:.12}
      html.zd-gridwarp:after{content:"";position:fixed;inset:50% 0 0;pointer-events:none;z-index:2147483645;background:linear-gradient(transparent 95%,#fff 96%) 0 0/100% 35px,linear-gradient(90deg,transparent 95%,#fff 96%) 0 0/35px 100%;opacity:.15;transform:perspective(250px) rotateX(35deg)}
      html.zd-lowgravity *{animation:zdfloat 5s ease-in-out infinite alternate!important} @keyframes zdfloat{to{transform:translateY(10px)}}
      html.zd-bouncy *{animation:zdbounce .8s ease-in-out infinite alternate!important} @keyframes zdbounce{to{transform:translateY(-4px)}}
      html.zd-squish{transform:scaleX(.72)!important} html.zd-stretch{transform:scaleY(1.25)!important}
      html.zd-portal:after{content:"";position:fixed;inset:0;pointer-events:none;z-index:2147483645;background:radial-gradient(ellipse,transparent 15%,rgba(100,0,255,.18) 35%,rgba(0,0,0,.75) 80%)}
      html.zd-radar:after{content:"";position:fixed;inset:0;pointer-events:none;z-index:2147483645;background:conic-gradient(from 0deg,transparent 0 85%,rgba(0,255,0,.35) 90%,transparent 95%);animation:zdradar 2s linear infinite} @keyframes zdradar{to{transform:rotate(360deg)}}
      html.zd-target:after{content:"[ + ]";position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);font:40px monospace;color:#f00;z-index:2147483647;pointer-events:none}
      html.zd-warning:before{content:"⚠ ZDOS OVERRIDE ⚠";position:fixed;left:0;right:0;top:0;z-index:2147483647;background:#111;color:#fff;text-align:center;padding:8px;font:bold 14px monospace;letter-spacing:3px}
      html.zd-classified *{text-shadow:0 0 0 #000!important} html.zd-classified *::selection{background:#000;color:#000}
      html.zd-corrupt *{filter:contrast(1.3)!important;box-shadow:3px 0 0 #f00,-3px 0 0 #0ff!important}
      html.zd-ghost{opacity:.62!important} html.zd-echo *{text-shadow:5px 0 rgba(255,0,0,.2),-5px 0 rgba(0,255,255,.2)!important}
      html.zd-outline *{outline:1px solid rgba(255,255,255,.2)!important} html.zd-wire *{border:1px dashed rgba(255,255,255,.35)!important;background:transparent!important}
      html.zd-flat *{box-shadow:none!important;border-radius:0!important}
      html.zd-chaos{filter:contrast(1.35) saturate(1.4) hue-rotate(20deg)!important;animation:zdshake .18s infinite!important}
      html.zd-admin:before{content:"ZDOS ADMIN // CONSOLE ACTIVE";position:fixed;left:10px;bottom:10px;z-index:2147483647;background:#111;color:#0f0;border:1px solid #0f0;padding:7px 10px;font:11px monospace;box-shadow:0 0 12px #0f0}
      html.zd-snow:after,html.zd-rain:after,html.zd-static:after{content:"";position:fixed;inset:0;pointer-events:none;z-index:2147483645}
      html.zd-snow:after{background-image:radial-gradient(#fff 1px,transparent 1px);background-size:17px 17px;opacity:.35;animation:zdsnow 3s linear infinite} @keyframes zdsnow{to{background-position:0 80px}}
      html.zd-rain:after{background:repeating-linear-gradient(110deg,transparent 0 18px,rgba(100,180,255,.22) 19px 20px);animation:zdrain 1s linear infinite} @keyframes zdrain{to{background-position:0 120px}}
      html.zd-static:after{opacity:.15;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.7'/%3E%3C/svg%3E");animation:zdstatic .15s steps(2) infinite} @keyframes zdstatic{to{transform:translate(5px,-3px)}}
    `;
    document.documentElement.appendChild(st); S.style=st;
  }
  const special=["whitetout","replace","ddos"];
  if(id==="whitetout"||id==="ddos"){
    let ov=document.getElementById("__zdos_overlay");
    if(on){
      if(!ov){ov=document.createElement("div");ov.id="__zdos_overlay";Object.assign(ov.style,{position:"fixed",inset:"0",background:"#fff",zIndex:"2147483647",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Arial,sans-serif",color:"#000",fontSize:"34px",fontWeight:"800",textAlign:"center"});document.documentElement.appendChild(ov)}
      ov.textContent=id==="ddos"?"DDOSed by Zdos":"ZDOS";
    }else if(ov) ov.remove();
    return;
  }
  if(id==="replace"){
    if(on){
      if(!S.originals.length){
        const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
        while(walker.nextNode()){
          const n=walker.currentNode;
          if(n.nodeValue.trim() && !n.parentElement.closest("script,style,textarea,input,select")) S.originals.push([n,n.nodeValue]);
        }
      }
      for(const [n] of S.originals) n.nodeValue="Get hacked by Zdos";
    }else{
      for(const [n,v] of S.originals) if(n.isConnected) n.nodeValue=v;
      S.originals=[];
    }
    return;
  }
  const map={redalert:"red",greenmatrix:"matrix",bluescreen:"blue",glitch:"glitch",scanlines:"scan",terminal:"terminal",noimages:"noimages",tiny:"tiny",huge:"huge",rotate:"rotate",upside:"upside",mirror:"mirror",spin:"spin",shake:"shake",wobble:"wobble",blur:"blur",pixel:"pixel",sepia:"sepia",mono:"mono",neon:"neon",comic:"comic",nocturne:"nocturne",snow:"snow",rain:"rain",static:"static",vignette:"vignette",spotlight:"spot",giantcursor:"giantcursor",crosshair:"crosshair",hidecursor:"hidecursor",rainbow:"rainbow",danger:"danger",grid:"grid",gridwarp:"gridwarp",lowgravity:"lowgravity",bouncy:"bouncy",squish:"squish",stretch:"stretch",portal:"portal",radar:"radar",target:"target",warning:"warning",classified:"classified",corrupt:"corrupt",ghost:"ghost",echo:"echo",outline:"outline",wireframe:"wire",flat:"flat",chaos:"chaos",admin:"admin"};
  const c=map[id]; if(!c)return;
  document.documentElement.classList.toggle("zd-"+c,on);
}
function resetZdos(){
  const S=window.__ZDOS__;
  if(!S)return;
  document.documentElement.className=document.documentElement.className.split(/\s+/).filter(x=>!x.startsWith("zd-")).join(" ");
  document.getElementById("__zdos_overlay")?.remove();
  for(const [n,v] of (S.originals||[])) if(n.isConnected) n.nodeValue=v;
  S.originals=[];
}
