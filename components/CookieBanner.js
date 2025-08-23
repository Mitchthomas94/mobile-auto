
import { useEffect, useState } from 'react';

export default function CookieBanner(){
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const accepted = window.localStorage.getItem('cookie-consent');
      if (!accepted) setVisible(true);
    } catch (e) {}
  }, []);

  if (!visible) return null;

  return (
    <div style={{position:'fixed', bottom:16, left:16, right:16, zIndex:100, display:'flex', gap:12, alignItems:'center', justifyContent:'space-between', background:'#0f172a', color:'#fff', padding:'12px 16px', borderRadius:12}}>
      <div style={{maxWidth:800}}>
        We use basic analytics to improve our site. See our <a href="/privacy" style={{color:'#93c5fd', textDecoration:'underline'}}>Privacy Policy</a>.
      </div>
      <div style={{display:'flex', gap:8}}>
        <button className="btn" onClick={() => { try { window.localStorage.setItem('cookie-consent','accept'); } catch(e) {} ; setVisible(false); }}>
          Accept
        </button>
        <button className="btn-outline" onClick={() => { try { window.localStorage.setItem('cookie-consent','decline'); } catch(e) {} ; setVisible(false); }}>
          Decline
        </button>
      </div>
    </div>
  )
}
