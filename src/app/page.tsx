"use client";
import { useState } from "react";

const C = { cyan: '#06b6d4', purple: '#8b5cf6', emerald: '#10b981' };

const glass = {
  background: 'rgba(9,9,11,0.7)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: '1px solid rgba(255,255,255,0.1)',
} as const;

const glassInput: React.CSSProperties = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  color: '#fff',
  width: '100%',
  padding: '12px 16px',
  borderRadius: '8px',
  fontFamily: 'Space Grotesk, sans-serif',
  fontSize: '14px',
  outline: 'none',
  transition: 'all .3s',
};

// ── HERO ──────────────────────────────────────────────
function HeroSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <section style={{ position:'relative', minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', paddingTop:80, overflow:'hidden', background:'#09090b' }}>
      {/* Orbital bg */}
      <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', pointerEvents:'none', opacity:.4, zIndex:0 }}>
        <div style={{ position:'relative', width:600, height:600, animation:'float 6s ease-in-out infinite' }}>
          <div style={{ position:'absolute', inset:0, borderRadius:'50%', border:`1px solid ${C.cyan}33`, animation:'slow-spin 120s linear infinite' }} />
          <div style={{ position:'absolute', inset:40, borderRadius:'50%', border:`1px solid ${C.purple}22`, animation:'slow-spin 120s linear infinite reverse' }}>
            <div style={{ width:'100%', height:'100%', borderRadius:'50%', background:`radial-gradient(circle, ${C.cyan}30, transparent 70%)`, animation:'pulse-slow 4s ease infinite' }} />
          </div>
          <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
            <div style={{ width:280, height:280, borderRadius:'50%', background:`radial-gradient(circle at 40% 40%, ${C.cyan}40, ${C.purple}20, transparent)`, filter:'blur(2px)', animation:'pulse-slow 4s ease infinite' }} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ position:'relative', zIndex:1, textAlign:'center', maxWidth:900, padding:'0 24px' }}>
        <h1 style={{ fontSize:'clamp(42px, 8vw, 96px)', fontWeight:700, letterSpacing:'-0.04em', lineHeight:1, marginBottom:24, background:'linear-gradient(180deg, #fff 0%, #52525b 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
          THE FUTURE OF<br />BUSINESS INTELLIGENCE
        </h1>
        <p style={{ color:'#a1a1aa', fontSize:18, maxWidth:600, margin:'0 auto 48px', lineHeight:1.6 }}>
          Leverage autonomous agents and predictive synthesis to dominate your market. Deploy intelligence at scale.
        </p>

        {/* Lead form */}
        <div style={{ maxWidth:520, margin:'0 auto', ...glass, padding:32, borderRadius:16, borderColor:`${C.cyan}33` }}>
          <p style={{ textAlign:'left', fontSize:12, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.15em', color:C.cyan, marginBottom:24 }}>Initialize Your Strategy</p>
          {sent ? (
            <div style={{ textAlign:'center', padding:'16px 0' }}>
              <div style={{ color:C.cyan, fontSize:32, marginBottom:8 }}>✓</div>
              <p style={{ color:'#fff', fontWeight:700 }}>Strategy Request Received</p>
              <p style={{ color:'#a1a1aa', fontSize:14, marginTop:4 }}>We'll deploy your briefing within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); if(name && email) setSent(true); }} style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
              <input style={glassInput} placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} />
              <input style={glassInput} type="email" placeholder="Work Email" value={email} onChange={e => setEmail(e.target.value)} />
              <button type="submit" style={{ gridColumn:'1/-1', background:C.cyan, color:'#000', fontWeight:700, padding:'16px', borderRadius:8, border:'none', cursor:'pointer', fontSize:14, textTransform:'uppercase', letterSpacing:'0.05em', boxShadow:`0 0 20px ${C.cyan}40`, fontFamily:'Space Grotesk, sans-serif' }}>
                REQUEST DEPLOYMENT
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// ── REVENUE COMMAND DASHBOARD ──────────────────────────
const TABS = ['Prospecting', 'Lead Pipeline', 'Customer Intel'] as const;
type Tab = typeof TABS[number];

const TAB_DATA = {
  Prospecting: { accounts:'12,402', highIntent:'842', outreach:'94%', feed:[
    { text:'[SIGNAL] TechCorp Inc. exploring Series B', time:'2s ago', green:true },
    { text:'[ACTION] Generated personalized deck for GlobalLogistics', time:'14s ago', green:false },
  ]},
  'Lead Pipeline': { accounts:'3,814', highIntent:'291', outreach:'87%', feed:[
    { text:'[SIGNAL] MedTech startup budgeting Q1 expansion', time:'5s ago', green:true },
    { text:'[ACTION] Sequenced follow-up for RetailCo', time:'22s ago', green:false },
  ]},
  'Customer Intel': { accounts:'648', highIntent:'112', outreach:'99%', feed:[
    { text:'[INSIGHT] FinCorp renewal probability: 91%', time:'1s ago', green:true },
    { text:'[ACTION] Renewal deck sent to FinCorp VP', time:'8s ago', green:false },
  ]},
} satisfies Record<Tab, { accounts:string; highIntent:string; outreach:string; feed:{text:string;time:string;green:boolean}[] }>;

function RevenueDashboard() {
  const [tab, setTab] = useState<Tab>('Prospecting');
  const d = TAB_DATA[tab];

  return (
    <div style={{ display:'flex', flexDirection:'column', gap:24 }}>
      <div style={{ display:'flex', alignItems:'center', gap:12 }}>
        <div style={{ width:40, height:40, borderRadius:'50%', background:`${C.cyan}1a`, display:'flex', alignItems:'center', justifyContent:'center', color:C.cyan }}>
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
        </div>
        <h2 style={{ fontSize:28, fontWeight:700, color:'#fff', margin:0 }}>Revenue Command</h2>
      </div>

      <div style={{ ...glass, borderRadius:12, overflow:'hidden', height:500, display:'flex', flexDirection:'column', borderColor:'#27272a' }}>
        {/* Browser bar */}
        <div style={{ background:'#18181b', padding:'12px 16px', display:'flex', alignItems:'center', justifyContent:'space-between', borderBottom:'1px solid #27272a' }}>
          <div style={{ display:'flex', gap:6 }}>
            {['#ef444480','#eab30880','#22c55e80'].map(c => <div key={c} style={{ width:12, height:12, borderRadius:'50%', background:c }} />)}
          </div>
          <div style={{ display:'flex', background:'rgba(0,0,0,0.4)', padding:'4px 12px', borderRadius:6, gap:20 }}>
            {TABS.map(t => (
              <button key={t} onClick={() => setTab(t)} style={{ background:'none', border:'none', cursor:'pointer', fontSize:10, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.1em', padding:0, color: t===tab ? C.cyan : '#71717a', borderBottom: t===tab ? `1px solid ${C.cyan}` : 'none', fontFamily:'Space Grotesk, sans-serif', transition:'color .2s' }}>
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* KPI row */}
        <div style={{ padding:24, background:'rgba(9,9,11,0.5)', flex:1, overflowY:'auto' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:12, marginBottom:24 }}>
            {[['Accounts Scanned', d.accounts, '#fff'], ['High-Intent', d.highIntent, C.cyan], ['Auto-Outreach', d.outreach, C.emerald]].map(([l,v,c]) => (
              <div key={l as string} style={{ background:'#18181b', border:'1px solid #27272a', borderRadius:8, padding:16 }}>
                <div style={{ fontSize:10, color:'#71717a', textTransform:'uppercase', marginBottom:4 }}>{l}</div>
                <div style={{ fontSize:24, fontWeight:700, color:c as string }}>{v}</div>
              </div>
            ))}
          </div>

          {/* Bar chart */}
          <div style={{ marginBottom:24 }}>
            <div style={{ fontSize:11, color:'#71717a', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:12 }}>Intent Spikes by Industry</div>
            <div style={{ display:'flex', alignItems:'flex-end', gap:6, height:100 }}>
              {[40,60,90,50,75].map((h,i) => (
                <div key={i} style={{ flex:1, height:`${h}%`, borderRadius:'3px 3px 0 0', background:`rgba(6,182,212,${0.2+(i*0.15)})`, transition:'height .3s' }} />
              ))}
            </div>
          </div>

          {/* Live feed */}
          <div>
            <div style={{ fontSize:10, color:'#71717a', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:8 }}>Live Data Feed</div>
            {d.feed.map((f,i) => (
              <div key={i} style={{ fontFamily:'monospace', fontSize:11, padding:'8px 10px', background:'#000', borderRadius:4, border:'1px solid #27272a', display:'flex', justifyContent:'space-between', marginBottom:4, opacity: i>0 ? 0.5 : 1 }}>
                <span style={{ color: f.green ? C.emerald : '#d4d4d8' }}>{f.text}</span>
                <span style={{ color:'#52525b' }}>{f.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── SYNTHESIZED DATA HUB ────────────────────────────────
function DataHub() {
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:24 }}>
      <div style={{ display:'flex', alignItems:'center', gap:12 }}>
        <div style={{ width:40, height:40, borderRadius:'50%', background:`${C.purple}1a`, display:'flex', alignItems:'center', justifyContent:'center', color:C.purple }}>
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
        </div>
        <h2 style={{ fontSize:28, fontWeight:700, color:'#fff', margin:0 }}>Synthesized Data Hub</h2>
      </div>

      <div style={{ ...glass, borderRadius:12, overflow:'hidden', height:500, display:'flex', flexDirection:'column', borderColor:'#27272a' }}>
        {/* Browser bar */}
        <div style={{ background:'#18181b', padding:'12px 16px', display:'flex', alignItems:'center', gap:8, borderBottom:'1px solid #27272a' }}>
          <div style={{ width:8, height:8, borderRadius:'50%', background:'#3f3f46' }} />
          <div style={{ width:160, height:8, borderRadius:4, background:'#27272a' }} />
        </div>

        {/* PDF → Video */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, padding:'20px 20px 12px', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
          {/* PDF card */}
          <div style={{ background:'#18181b', border:'1px solid #27272a', borderRadius:8, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:8, aspectRatio:'16/9' }}>
            <svg style={{ color:C.cyan }} width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
            <span style={{ fontSize:11, color:'#d4d4d8', fontWeight:500 }}>Annual Strategy 2024.pdf</span>
          </div>
          {/* Video card */}
          <div style={{ background:'#000', border:`1px solid ${C.purple}50`, borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center', aspectRatio:'16/9', position:'relative', overflow:'hidden' }}>
            <div style={{ position:'absolute', inset:0, background:`linear-gradient(135deg, ${C.purple}20 0%, transparent 60%)` }} />
            <div style={{ width:36, height:36, borderRadius:'50%', background:`${C.purple}cc`, display:'flex', alignItems:'center', justifyContent:'center', position:'relative' }}>
              <div style={{ width:0, height:0, borderTop:'6px solid transparent', borderBottom:'6px solid transparent', borderLeft:'10px solid #fff', marginLeft:2 }} />
            </div>
            <div style={{ position:'absolute', bottom:6, right:6, display:'flex', gap:3 }}>
              {['EN','ES','ZH'].map((l,i) => <span key={l} style={{ padding:'2px 5px', background:'rgba(0,0,0,0.8)', borderRadius:3, fontSize:9, border:'1px solid rgba(255,255,255,0.2)', opacity:i>0?.4:1, color:'#fff' }}>{l}</span>)}
            </div>
          </div>
        </div>

        {/* Omnichannel */}
        <div style={{ flex:1, padding:'16px 20px', background:'rgba(9,9,11,0.3)' }}>
          <div style={{ fontSize:10, color:'#52525b', textTransform:'uppercase', letterSpacing:'0.12em', marginBottom:12 }}>Omnichannel Data Projections</div>
          <div style={{ display:'flex', gap:10, height:88 }}>
            <div style={{ width:'25%', ...glass, borderRadius:8, padding:6, display:'flex', flexDirection:'column', gap:3 }}>
              <div style={{ width:'100%', height:3, borderRadius:9999, background:`${C.cyan}60` }} />
              <div style={{ width:'60%', height:3, borderRadius:9999, background:'#27272a' }} />
              <div style={{ flex:1, display:'flex', alignItems:'flex-end', gap:2, marginTop:2 }}>
                {[60,80,40].map((h,i) => <div key={i} style={{ flex:1, height:`${h}%`, background:'#27272a', borderRadius:'2px 2px 0 0' }} />)}
              </div>
              <div style={{ fontSize:8, textAlign:'center', color:'#52525b' }}>Feed Engagement</div>
            </div>
            <div style={{ flex:1, ...glass, borderRadius:8, overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center', borderColor:`${C.cyan}30` }}>
              <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
                <path d="M0 30 Q 25 10 50 30 T 100 30" fill="none" stroke={C.cyan} strokeWidth="0.5" opacity="0.5" />
                <path d="M0 30 Q 25 10 50 30 T 100 30 L 100 40 L 0 40 Z" fill={`${C.cyan}15`} />
              </svg>
            </div>
            <div style={{ width:'25%', ...glass, borderRadius:8, padding:4, display:'grid', gridTemplateColumns:'1fr 1fr', gap:3 }}>
              {[0,1,2,3].map(i => <div key={i} style={{ background:'#18181b', borderRadius:3 }} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── OFFER CARDS ────────────────────────────────────────
const CARDS = [
  { icon:'🖥️', title:'Website Design & Automation', desc:'Generative UI systems for scale.', color:C.cyan },
  { icon:'⚙️', title:'Custom Enterprise Dashboards', desc:'Custom LLM agents for your ops.', color:C.emerald },
  { icon:'🎬', title:'Multilingual PDF-to-Video', desc:'AI-driven outbound automation.', color:C.purple },
  { icon:'🎯', title:'1-1 Custom Consultations', desc:'Executive advisory for AI transition.', color:'#3b82f6' },
];

function OfferCards() {
  return (
    <section style={{ padding:'80px 0', background:'#000' }} id="solutions">
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', gap:20 }}>
          {CARDS.map(c => (
            <div key={c.title} style={{ ...glass, borderRadius:12, padding:24, border:`1px solid ${c.color}40`, transition:'transform .2s, border-color .2s', cursor:'pointer' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform='scale(1.03)'; (e.currentTarget as HTMLDivElement).style.borderColor=`${c.color}80`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform='scale(1)'; (e.currentTarget as HTMLDivElement).style.borderColor=`${c.color}40`; }}>
              <div style={{ fontSize:32, marginBottom:16 }}>{c.icon}</div>
              <h3 style={{ color:'#fff', fontWeight:700, fontSize:16, marginBottom:8, margin:'0 0 8px' }}>{c.title}</h3>
              <p style={{ color:'#71717a', fontSize:14, margin:0 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── ROBOT AGENT ────────────────────────────────────────
function RobotAgent() {
  const [open, setOpen] = useState(true);
  return (
    <aside style={{ position:'fixed', bottom:0, right:32, zIndex:100, animation:'slide-up 0.6s ease 0.5s both' }}>
      <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:16, paddingBottom:16 }}>
        {open && (
          <div style={{ width:300, ...glass, borderRadius:16, padding:20, boxShadow:'0 25px 50px rgba(0,0,0,0.5)', borderColor:`${C.cyan}40`, animation:'float 6s ease-in-out infinite' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16 }}>
              <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                <div style={{ width:8, height:8, borderRadius:'50%', background:C.cyan, boxShadow:`0 0 8px ${C.cyan}` }} />
                <span style={{ fontSize:10, fontWeight:700, color:C.cyan, textTransform:'uppercase', letterSpacing:'0.15em' }}>Live</span>
              </div>
              <button onClick={() => setOpen(false)} style={{ background:'none', border:'none', cursor:'pointer', color:'#71717a', padding:0, lineHeight:1 }}>✕</button>
            </div>
            <p style={{ fontSize:14, color:'#d4d4d8', marginBottom:24, lineHeight:1.6 }}>How can I assist you with our custom solutions today?</p>
            {/* Waveform */}
            <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:4, height:36, marginBottom:20 }}>
              {[0.1,0.3,0.2,0.5,0.4,0.6,0.15,0.35].map((delay, i) => (
                <div key={i} className="wave-bar" style={{ animationDelay:`${delay}s` }} />
              ))}
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
              {['View Solutions','Book Call'].map(label => (
                <button key={label} style={{ width:'100%', textAlign:'left', padding:'8px 16px', borderRadius:8, background:'#18181b', border:'1px solid #27272a', color:'#d4d4d8', fontSize:12, fontWeight:500, cursor:'pointer', fontFamily:'Space Grotesk, sans-serif', transition:'border-color .2s' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor=C.cyan)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor='#27272a')}>
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
        {/* Robot anchor */}
        <div onClick={() => setOpen(o => !o)} style={{ width:88, height:88, borderRadius:'50% 50% 0 0', background:'linear-gradient(to top, #27272a, transparent)', display:'flex', alignItems:'center', justifyContent:'center', borderTop:`2px solid ${C.cyan}60`, cursor:'pointer' }}>
          <div style={{ width:58, height:58, borderRadius:'50%', background:`radial-gradient(circle at 40% 35%, ${C.cyan}40, ${C.purple}20, transparent)`, display:'flex', alignItems:'center', justifyContent:'center', boxShadow:`0 0 20px ${C.cyan}40` }}>
            <svg width="28" height="28" fill="none" stroke={C.cyan} strokeWidth="1.5" viewBox="0 0 24 24">
              <rect x="3" y="8" width="18" height="12" rx="2"/>
              <path d="M8 8V6a4 4 0 0 1 8 0v2"/>
              <circle cx="9" cy="14" r="1.5" fill={C.cyan}/>
              <circle cx="15" cy="14" r="1.5" fill={C.cyan}/>
            </svg>
          </div>
        </div>
      </div>
    </aside>
  );
}

// ── PAGE ───────────────────────────────────────────────
export default function Home() {
  return (
    <div style={{ minHeight:'100vh', background:'#000', color:'#f1f5f9', fontFamily:'Space Grotesk, sans-serif' }}>
      {/* NAV */}
      <nav style={{ position:'fixed', top:0, width:'100%', zIndex:50, padding:'16px 24px', display:'flex', justifyContent:'space-between', alignItems:'center', ...glass, borderRadius:0, borderTop:'none', borderLeft:'none', borderRight:'none', borderBottom:'1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <div style={{ width:32, height:32, borderRadius:8, background:`linear-gradient(135deg, ${C.cyan}, ${C.purple})`, display:'flex', alignItems:'center', justifyContent:'center', color:'#000', fontWeight:700, fontSize:14 }}>B</div>
          <span style={{ fontSize:18, fontWeight:700, letterSpacing:'-0.02em' }}>BOWEN <span style={{ color:C.cyan }}>AI</span></span>
        </div>
        <div style={{ display:'flex', gap:32, fontSize:13, fontWeight:500, color:'#a1a1aa' }}>
          {['Solutions','Workflow','Strategy','About'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ color:'#a1a1aa', textDecoration:'none', transition:'color .2s' }}
              onMouseEnter={e => (e.currentTarget.style.color=C.cyan)}
              onMouseLeave={e => (e.currentTarget.style.color='#a1a1aa')}>{item}</a>
          ))}
        </div>
        <button style={{ padding:'8px 20px', background:'#f4f4f5', color:'#000', fontSize:13, fontWeight:700, borderRadius:9999, border:'none', cursor:'pointer', fontFamily:'Space Grotesk, sans-serif', transition:'background .2s' }}
          onMouseEnter={e => (e.currentTarget.style.background=C.cyan)}
          onMouseLeave={e => (e.currentTarget.style.background='#f4f4f5')}>
          Get Started
        </button>
      </nav>

      {/* HERO */}
      <HeroSection />

      {/* SHOWCASE */}
      <section style={{ padding:'80px 0', background:'#000' }} id="workflow">
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:40 }}>
          <RevenueDashboard />
          <DataHub />
        </div>
      </section>

      {/* CARDS */}
      <OfferCards />

      {/* FOOTER */}
      <footer style={{ padding:'40px 24px', background:'#09090b', borderTop:'1px solid #18181b' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:16 }}>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <div style={{ width:24, height:24, borderRadius:4, background:C.cyan, display:'flex', alignItems:'center', justifyContent:'center', color:'#000', fontWeight:700, fontSize:11 }}>B</div>
            <span style={{ fontSize:12, fontWeight:700, letterSpacing:'0.15em', color:'#52525b' }}>© 2025 BOWEN AI STRATEGY GROUP</span>
          </div>
          <div style={{ display:'flex', gap:24, fontSize:11, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.1em' }}>
            {['Privacy','Terms','API','Status'].map(l => (
              <a key={l} href="#" style={{ color:'#52525b', textDecoration:'none' }}
                onMouseEnter={e => (e.currentTarget.style.color='#fff')}
                onMouseLeave={e => (e.currentTarget.style.color='#52525b')}>{l}</a>
            ))}
          </div>
        </div>
      </footer>

      <RobotAgent />
    </div>
  );
}
