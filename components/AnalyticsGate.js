
import { useEffect } from 'react';

export default function AnalyticsGate(){
  useEffect(() => {
    try {
      const consent = typeof window !== 'undefined' ? window.localStorage.getItem('cookie-consent') : null;
      const gaId = process.env.NEXT_PUBLIC_GA_ID;
      if (consent === 'accept' && gaId && typeof window !== 'undefined') {
        // Inject GA
        const s1 = document.createElement('script');
        s1.async = true;
        s1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
        document.head.appendChild(s1);

        const s2 = document.createElement('script');
        s2.innerHTML = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}');`;
        document.head.appendChild(s2);
      }
    } catch(e){}
  }, []);

  return null;
}
