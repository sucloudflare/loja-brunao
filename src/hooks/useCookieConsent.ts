import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export function useCookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookie-consent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set('cookie-consent', 'accepted', { expires: 365 });
    setShowConsent(false);
  };

  return { showConsent, acceptCookies };
}