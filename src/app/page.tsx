"use client";
import { useState } from "react";

/* ── CONSTANTS ──────────────────────────────────── */
const BG = '#080c14';
const CYAN = '#06b6d4';
const GLASS = { background: 'rgba(9,14,22,0.75)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,0.08)' } as const;

const ALIEN = "https://lh3.googleusercontent.com/aida-public/AB6AXuAhieouVbI8W15-8GH9DAWpn-M-w5JRc8nZBzUmh8j4uEWfTW2635y_M0LzJTmQbM2jZ4LuLAVishbX6VRKkI4pOVmkJhKUPY6qHRuf09-vi3k6JVYEvzK2CWrDxXfb4FvTNYouPvy-Pb-8-3tWv9Y5m-brh-bcvQOmLFWOo3ANLbLWQgCQJ-9EvR27P8LSWhcfpOWTV2aDSnRjL3csRShhh8P5h9qGudIB_j7AD-t2K9TBEhN-I3aopMzgJoKRtXK--48YMUEk2420";
const BRAIN = "https://lh3.googleusercontent.com/aida-public/AB6AXuAj3cAp4PzaQ6clVn4Z-CtGhFJeu6ivr05SKJXdy6nOFG0_NJyMDe68Bw1Yrh-VvwMtQ39JRqOGu2ib8G-ubmcbFs9L6cv7vecgv-GDGD8TKmBh2nTv3BY0NfJ67-KLlg2D4m0flto8MLjzeBURQ-nizgLtktQXAXOKvqyfr1LXtGl1bsrYhS8EvDJWTwipOClRohCsHlcbi2wTXfKHWXBaGiUL_QIG9ttSKA7pBzru5q6XFs_qPHkKKrjHIi8lR8-Vx06GaWLuwhOf";
const DASHBOARD_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDhpa7PFHO-clngiNVPzK27GGSlJNNIHpr2P8C198PheYq2fE_QkCytVn4-yvPpb-3nY5jO7ApSpv2lJEFrDW2J3H-wkTHSyqyqx6nlGUwkjuI6KtqiZTKL7J5Zi4Z7kPs3h0BNmfzzlc4oeFFSvKUPSnZs-RWYcWUxcxB1x96FEv2P69-rwamfDXdJbsC-oDWoeW-mfesLHFJNs77Wdv6hOQwR42a52B-h9L5HOWm_SgbB53MZsInZxCWHCPwFBv8h_EHh0cdVdfBL";
const AD1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuCt-ZLRC6rA_6wnKeuF6lCHQF68B-AWYA0XEbQOtrMsM5HbTftugwz2BhDRIY1XT9pWYId1JfSZv-mUM_cn-SYYyz9rMer78BUlxpEmT6Q_Q5LrzVzECiuu-qzv5bM037FvBGxgMXMzd6ZtdCX-Hm8lwralA9ibvTNT0w1LFdUdZXEP2hgXLMFvBXI1YEhAGvONh3gvtThNamkIIC73Q5LI7LW-It5VH31VciphAFCGs0HlhC_SiIVF72WUVzSJ7VQcQBBKqLseAw8m";
const AD2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuAWNrpN54pQ88DIvUodQYMEKej38YFKM2BDXucYSbqmCn-IV4liovTBKIqUALPviBM1K8__2bDZWrGCe47rTTawGNoD7LeqtyGYc8EhquDWOBVfqtI_h2hXBfawHC_8sEuEY7dn1ZS8B_tx2QxrW2TvkV5ZEmbcrjYiVTFpEUjXJvAeHn9Qi53QZe5FnQdaeZkVhKDrsPBpd3gOghREt4xSe4LzxqZSxSUjBEE5_BIq9CYqIteGUEBZ8vjg46Af2KnH92KN6gDRVsp6";
const ROBOT = "https://lh3.googleusercontent.com/aida-public/AB6AXuAxmGb5_qajhzZ71zoXBtesFHcGDjWaeR3Ws60X5e23xHWPjdLzJ_q7Lc5AFU5oWCt8EGsiCnModz090aiRzi6C-5sxPoLMLR747abvG86O6hhKIQdaDAMJsflbHNcz_rEFIlLLUacNuPpaMSsgFJ40YCPlG0qmQZkHbPzOi3717-bpHmIZlfM9v0haN-NrDHSv5s08XG9H4OrWGSBlMvUKK6OaDqJQpw4KgIH4z-w7RY4f5fOBRTDR8Y33ek-Y4Q9YAsxtnBq8gkpj";

function Divider() {
  return <div style={{ width:'100%', height:1, background:'linear-gradient(90deg, transparent, rgba(6,182,212,0.25), transparent)' }} />;
}

function LearnBtn() {
  return (
    <button style={{ marginTop:20, padding:'10px 28px', borderRadius:8, background:'rgba(6,182,212,0.1)', border:'1px solid rgba(6,182,212,0.3)', color:CYAN, fontSize:12, fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase', cursor:'pointer' }}>
      Learn More
    </button>
  );
}

/* ── HERO ──────────────────────────────────────── */
function Hero() {
  const [name, setName] = useState('');
  const [needs, setNeeds] = useState('');
  const SERVICES = [
    { label: 'AI Consulting', badge: '→1', alien: true },
    { label: 'Custom AI Powered Websites', badge: null, alien: true },
    { label: 'Custom Dashboards', badge: null, alien: false },
    { label: 'PDF to Video', badge: null, alien: false },
    { label: 'Custom Photo & Video Ads', badge: null, alien: true },
  ];
  const [active, setActive] = useState(0);

  return (
    <section style={{ position:'relative', minHeight:'100vh', paddingTop:80, overflow:'hidden', background:`linear-gradient(180deg, ${BG} 0%, #0a1020 50%, ${BG} 100%)` }}>
      {/* Background glows */}
      <div style={{ position:'absolute', top:'10%', left:'25%', width:700, height:700, borderRadius:'50%', background:'radial-gradient(circle, rgba(6,60,180,0.15), transparent 70%)', filter:'blur(60px)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', top:'20%', left:'40%', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle, rgba(100,40,200,0.1), transparent 70%)', filter:'blur(40px)', pointerEvents:'none' }} />

      <div style={{ position:'relative', zIndex:1, maxWidth:1280, margin:'0 auto', padding:'40px 24px 60px', display:'grid', gridTemplateColumns:'300px 1fr 240px', gap:24, alignItems:'start', minHeight:'calc(100vh - 80px)' }}>

        {/* LEFT — Branding + Form + Chat */}
        <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
          <div>
            <h1 style={{ fontSize:40, fontWeight:900, lineHeight:1.05, color:'#fff', textTransform:'uppercase' }}>
              BOWEN <span style={{ color:CYAN }}>AI</span><br/>STRATEGY<br/>GROUP
            </h1>
            <p style={{ color:'#94a3b8', fontSize:14, marginTop:8 }}>How can we help your business?</p>
          </div>

          {/* Form card */}
          <div style={{ ...GLASS, borderRadius:12, padding:16 }}>
            <p style={{ fontSize:11, fontWeight:700, color:CYAN, marginBottom:8, textTransform:'uppercase', letterSpacing:'0.1em' }}>Next Gen AI Project</p>
            <p style={{ fontSize:11, color:'#64748b', marginBottom:12 }}>Describe your project needs</p>
            <input style={{ width:'100%', padding:'8px 12px', borderRadius:6, background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', color:'#fff', fontSize:13, outline:'none', marginBottom:8 }} placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            <input style={{ width:'100%', padding:'8px 12px', borderRadius:6, background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', color:'#fff', fontSize:13, outline:'none', marginBottom:12 }} placeholder="Project needs..." value={needs} onChange={e => setNeeds(e.target.value)} />
            <button style={{ width:'100%', padding:'10px', borderRadius:6, background:CYAN, color:'#000', fontWeight:700, fontSize:13, border:'none', cursor:'pointer' }}>Submit</button>
          </div>

          {/* Chat messages */}
          <div style={{ ...GLASS, borderRadius:12, padding:12 }}>
            <div style={{ display:'flex', gap:8, alignItems:'flex-start', marginBottom:10 }}>
              <div style={{ width:24, height:24, borderRadius:'50%', background:'rgba(6,182,212,0.2)', flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
                <div style={{ width:8, height:8, borderRadius:'50%', background:CYAN }} />
              </div>
              <p style={{ fontSize:12, color:'#cbd5e1', lineHeight:1.5 }}>We've confirmed that your AI consultation is ready. Let's explore the options.</p>
            </div>
            <div style={{ display:'flex', gap:8, alignItems:'flex-start' }}>
              <img src={ALIEN} alt="" style={{ width:24, height:24, borderRadius:'50%', objectFit:'cover' }} />
              <p style={{ fontSize:12, color:'#94a3b8', lineHeight:1.5 }}>Let me show you what we can build for your industry.</p>
            </div>
          </div>
        </div>

        {/* CENTER — Brain / Globe */}
        <div style={{ position:'relative', display:'flex', alignItems:'center', justifyContent:'center', minHeight:520 }}>
          <img src={BRAIN} alt="Neural brain network" className="float" style={{ width:'100%', maxWidth:560, objectFit:'contain', filter:'drop-shadow(0 0 80px rgba(6,182,212,0.2))', zIndex:1 }} />
          <div style={{ position:'absolute', bottom:80, left:20, zIndex:2 }}>
            <p style={{ fontSize:56, fontWeight:900, color:'rgba(255,255,255,0.7)', lineHeight:1 }}>...possible</p>
            <p style={{ fontSize:13, color:'#64748b', marginTop:8, maxWidth:340 }}>AI-powered neural network visualization bridging the intuition gap for modern enterprises.</p>
          </div>
          <img src={ALIEN} alt="AI mascot" className="float" style={{ position:'absolute', bottom:40, right:30, width:100, objectFit:'contain', filter:'drop-shadow(0 0 20px rgba(0,255,100,0.3))', zIndex:2, animationDelay:'1s' }} />
        </div>

        {/* RIGHT — Service Menu */}
        <div style={{ display:'flex', flexDirection:'column', gap:8, paddingTop:20 }}>
          {SERVICES.map((s, i) => (
            <button key={i} onClick={() => setActive(i)} style={{ display:'flex', alignItems:'center', gap:10, textAlign:'left', width:'100%', padding:'10px 14px', borderRadius:10, cursor:'pointer', border: i === active ? '1px solid rgba(6,182,212,0.4)' : '1px solid rgba(255,255,255,0.06)', background: i === active ? 'rgba(6,182,212,0.1)' : 'rgba(255,255,255,0.03)', color: i === active ? CYAN : '#94a3b8', fontSize:13, fontWeight:500, transition:'all .2s' }}>
              {s.alien && <img src={ALIEN} alt="" style={{ width:28, height:28, objectFit:'contain', borderRadius:'50%' }} />}
              <span style={{ flex:1 }}>{s.label}</span>
              {s.badge && <span style={{ fontSize:11, fontWeight:700, color:CYAN }}>{s.badge}</span>}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SERVICE ROW COMPONENT ───────────────────────── */
function ServiceRow({ id, title, desc, sub, children }: { id?: string; title: string; desc: string; sub?: string; children: React.ReactNode }) {
  return (
    <section id={id} style={{ padding:'60px 24px', maxWidth:1280, margin:'0 auto' }}>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'center' }}>
        <div>
          <h2 style={{ fontSize:32, fontWeight:900, color:'#fff', marginBottom:12, fontStyle:'italic' }}>{title}</h2>
          <p style={{ color:'#94a3b8', lineHeight:1.7, marginBottom:4 }}>{desc}</p>
          {sub && <p style={{ color:'#64748b', fontSize:13, marginTop:4 }}>{sub}</p>}
          <LearnBtn />
        </div>
        <div style={{ position:'relative' }}>{children}</div>
      </div>
    </section>
  );
}

/* ── SHOWCASE: 3D Digital ─────────────────────────── */
function DigitalShowcase() {
  const niches = [
    { label:'Food', img:'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&q=80' },
    { label:'Roofing', img:'https://images.unsplash.com/photo-1632759145351-1d592919f522?w=300&q=80' },
    { label:'Real Estate', img:'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=300&q=80' },
  ];
  return (
    <ServiceRow title="3D Digital Showcase" desc="Interactive Immersive 3D scene cards that showcase what Bowen AI builds for niche verticals — Food, Roofing, Real Estate, and more." sub="Hover elements rotate and interact in real-time.">
      <div style={{ display:'flex', gap:12, alignItems:'flex-end' }}>
        {niches.map(n => (
          <div key={n.label} style={{ flex:1, borderRadius:12, overflow:'hidden', border:'1px solid rgba(255,255,255,0.1)', background:BG }}>
            <img src={n.img} alt={n.label} style={{ width:'100%', height:120, objectFit:'cover' }} />
            <div style={{ padding:'10px 12px', textAlign:'center' }}>
              <p style={{ fontSize:13, fontWeight:700, color:'#fff' }}>{n.label}</p>
            </div>
            {/* Holographic base */}
            <div style={{ height:4, background:`linear-gradient(90deg, transparent, ${CYAN}40, transparent)` }} />
          </div>
        ))}
        <img src={ALIEN} alt="mascot" className="float" style={{ width:80, objectFit:'contain', flexShrink:0, filter:'drop-shadow(0 0 16px rgba(0,255,100,0.25))' }} />
      </div>
    </ServiceRow>
  );
}

/* ── SHOWCASE: Neural Analytics ───────────────────── */
function NeuralAnalytics() {
  return (
    <ServiceRow title="Neural Analytics" desc="Interactive real-time 3D Neural Analytics, Sales Metrics, and track real-time data, and real-time data flow." sub="Integrates with 200+ data sources.">
      <div style={{ display:'flex', gap:16, alignItems:'flex-end' }}>
        <div style={{ flex:1, ...GLASS, borderRadius:16, padding:20, overflow:'hidden' }}>
          {/* Bar chart */}
          <div style={{ display:'flex', alignItems:'flex-end', gap:8, height:120, marginBottom:16 }}>
            {[50, 80, 40, 95, 65, 55, 85, 45].map((h, i) => (
              <div key={i} style={{ flex:1, height:`${h}%`, borderRadius:'4px 4px 0 0', background:`linear-gradient(180deg, ${CYAN} 0%, rgba(6,182,212,0.2) 100%)`, opacity: 0.4 + (i * 0.08) }} />
            ))}
          </div>
          {/* Mini waveform row */}
          <div style={{ display:'flex', gap:2, height:20, marginBottom:16 }}>
            {[30, 60, 45, 80, 50, 70, 35, 65, 40, 55, 75, 45].map((h, i) => (
              <div key={i} style={{ flex:1, height:`${h}%`, borderRadius:2, background:`rgba(234,179,8,${0.3 + (i * 0.05)})` }} />
            ))}
          </div>
          {/* World map placeholder */}
          <div style={{ height:50, borderRadius:8, border:'1px solid rgba(255,255,255,0.05)', background:'rgba(6,182,212,0.03)', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <span style={{ fontSize:10, color:'#475569', fontFamily:'monospace' }}>[ GLOBAL DATA NODES ]</span>
          </div>
        </div>
        <img src={ALIEN} alt="mascot" className="float" style={{ width:90, objectFit:'contain', flexShrink:0, filter:'drop-shadow(0 0 16px rgba(0,255,100,0.25))', animationDelay:'0.5s' }} />
      </div>
    </ServiceRow>
  );
}

/* ── SHOWCASE: Polyglot PDF ──────────────────────── */
function PolyglotPDF() {
  return (
    <ServiceRow title="Polyglot PDF" desc="Get real-time contract analysis with multi-lingual legal, contract, video, captions, ROC, and marketing content summarizations." sub="">
      <div style={{ display:'flex', gap:12, alignItems:'stretch' }}>
        {/* Contract doc */}
        <div style={{ width:160, ...GLASS, borderRadius:12, padding:16, flexShrink:0 }}>
          <p style={{ fontSize:10, fontWeight:700, color:'#64748b', textTransform:'uppercase', marginBottom:12 }}>Contract.pdf</p>
          {[100,75,100,60,90,70,100,50].map((w, i) => (
            <div key={i} style={{ width:`${w}%`, height:3, borderRadius:99, background:'rgba(255,255,255,0.1)', marginBottom:5 }} />
          ))}
          <div style={{ marginTop:12, height:36, borderRadius:4, background:'rgba(6,182,212,0.05)', border:'1px solid rgba(255,255,255,0.05)' }} />
        </div>

        <div style={{ display:'flex', alignItems:'center', color:'#475569', fontSize:20, flexShrink:0 }}>→</div>

        {/* Video + languages */}
        <div style={{ flex:1, display:'flex', flexDirection:'column', gap:8 }}>
          <div style={{ position:'relative', borderRadius:12, overflow:'hidden', border:'1px solid rgba(255,255,255,0.1)', background:'#0a0f1a' }}>
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" alt="Video" style={{ width:'100%', height:140, objectFit:'cover', opacity:0.5 }} />
            <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
              <div style={{ width:40, height:40, borderRadius:'50%', background:`${CYAN}cc`, display:'flex', alignItems:'center', justifyContent:'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </div>
            </div>
          </div>
          <div style={{ display:'flex', gap:6 }}>
            {['English','Spanish','Mandarin'].map((l, i) => (
              <button key={l} style={{ flex:1, padding:'6px 0', borderRadius:6, fontSize:10, fontWeight:700, cursor:'pointer', border: i===0 ? `1px solid ${CYAN}60` : '1px solid rgba(255,255,255,0.06)', background: i===0 ? 'rgba(6,182,212,0.15)' : 'rgba(255,255,255,0.03)', color: i===0 ? CYAN : '#64748b' }}>{l}</button>
            ))}
          </div>
        </div>

        <img src={ALIEN} alt="" className="float" style={{ width:70, objectFit:'contain', flexShrink:0, alignSelf:'flex-end', filter:'drop-shadow(0 0 16px rgba(0,255,100,0.2))', animationDelay:'0.8s' }} />
      </div>
    </ServiceRow>
  );
}

/* ── SHOWCASE: Cinematic Ad Lab ──────────────────── */
function CinematicAdLab() {
  return (
    <ServiceRow title="Cinematic Ad Lab" desc="Hyper-realistic mock-up gallery featuring luxury, automotive, culinary, real estate, and premium brand tradeshow imagery." sub="Custom photo & video ad production at scale.">
      <div style={{ display:'flex', gap:12, alignItems:'flex-end' }}>
        <div style={{ flex:1, display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:8 }}>
          {[AD1, AD2, 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300&q=80'].map((img, i) => (
            <div key={i} style={{ borderRadius:10, overflow:'hidden', border:'1px solid rgba(255,255,255,0.08)', position:'relative', cursor:'pointer' }}>
              <img src={img} alt="Ad" style={{ width:'100%', height:120, objectFit:'cover' }} />
            </div>
          ))}
        </div>
        <img src={ALIEN} alt="mascot" className="float" style={{ width:80, objectFit:'contain', flexShrink:0, filter:'drop-shadow(0 0 16px rgba(0,255,100,0.25))', animationDelay:'1.2s' }} />
      </div>
    </ServiceRow>
  );
}

/* ── FLOATING ROBOT AGENT ───────────────────────── */
function RobotAgent() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position:'fixed', bottom:24, right:24, zIndex:100 }}>
      {open && (
        <div style={{ position:'absolute', bottom:80, right:0, width:280, ...GLASS, borderRadius:16, padding:16, marginBottom:8, boxShadow:'0 20px 60px rgba(0,0,0,0.6)' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12 }}>
            <div style={{ display:'flex', alignItems:'center', gap:6 }}>
              <div style={{ width:6, height:6, borderRadius:'50%', background:'#22c55e' }} />
              <span style={{ fontSize:10, fontWeight:700, color:CYAN, textTransform:'uppercase', letterSpacing:'0.12em' }}>Agent Online</span>
            </div>
            <button onClick={() => setOpen(false)} style={{ background:'none', border:'none', color:'#64748b', cursor:'pointer', fontSize:14 }}>✕</button>
          </div>
          <p style={{ fontSize:13, color:'#cbd5e1', marginBottom:16, lineHeight:1.5 }}>How can I help you navigate the World Node today?</p>
          <div style={{ display:'flex', gap:3, height:24, marginBottom:16, alignItems:'flex-end' }}>
            {[20,60,100,50,30].map((h, i) => (
              <div key={i} className="wave-bar" style={{ flex:1, height:`${h}%` }} />
            ))}
          </div>
          <button style={{ width:'100%', padding:'8px', borderRadius:8, background:CYAN, color:'#000', fontSize:11, fontWeight:700, border:'none', cursor:'pointer', textTransform:'uppercase', letterSpacing:'0.08em' }}>Start Voice Chat</button>
        </div>
      )}
      <div onClick={() => setOpen(o => !o)} style={{ width:64, height:64, borderRadius:'50%', border:`2px solid ${CYAN}`, overflow:'hidden', cursor:'pointer', boxShadow:`0 0 30px rgba(6,182,212,0.3)`, position:'relative', background:BG }}>
        <img src={ROBOT} alt="AI agent" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
        <div style={{ position:'absolute', top:2, right:2, width:10, height:10, borderRadius:'50%', background:'#22c55e', border:'2px solid #000' }} />
      </div>
    </div>
  );
}

/* ── PAGE ───────────────────────────────────────── */
export default function Home() {
  return (
    <div style={{ minHeight:'100vh', background:BG, color:'#f1f5f9', fontFamily:"'Space Grotesk', sans-serif" }}>
      {/* NAV */}
      <nav style={{ position:'fixed', top:0, width:'100%', zIndex:50, ...GLASS, borderRadius:0, borderTop:'none', borderLeft:'none', borderRight:'none' }}>
        <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 24px', height:64, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <span style={{ fontSize:18, fontWeight:900, letterSpacing:'-0.02em' }}>BOWEN <span style={{ color:CYAN }}>AI</span></span>
          <div style={{ display:'flex', gap:28, fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.12em', color:'#94a3b8' }}>
            <a href="#specifications" style={{ transition:'color .2s' }}>Specifications</a>
            <a href="#architecture" style={{ transition:'color .2s' }}>Architecture</a>
            <a href="#security" style={{ transition:'color .2s' }}>Security</a>
          </div>
          <button style={{ padding:'8px 20px', borderRadius:8, background:CYAN, color:'#000', fontSize:12, fontWeight:700, border:'none', cursor:'pointer', textTransform:'uppercase', letterSpacing:'0.06em' }}>Pre-Order</button>
        </div>
      </nav>

      <Hero />
      <Divider />
      <DigitalShowcase />
      <Divider />
      <NeuralAnalytics />
      <Divider />
      <PolyglotPDF />
      <Divider />
      <CinematicAdLab />
      <Divider />

      {/* FOOTER */}
      <footer style={{ padding:'40px 24px', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth:1280, margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:16 }}>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <span style={{ fontSize:14, fontWeight:900 }}>BOWEN <span style={{ color:CYAN }}>AI</span></span>
            <span style={{ fontSize:11, color:'#475569' }}>© 2026 Bowen AI Strategy Group</span>
          </div>
          <div style={{ display:'flex', gap:20, fontSize:11, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.1em', color:'#475569' }}>
            {['Privacy','Terms','Contact'].map(l => <a key={l} href="#">{l}</a>)}
          </div>
        </div>
      </footer>

      <RobotAgent />
    </div>
  );
}
