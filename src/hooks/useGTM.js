import { useRouter } from 'next/router';
import { useEffect } from 'react';

function useGTM() {
  const router = useRouter();
  console.log("router value..",router);

  useEffect(() => {

    console.log("inside useEffect of useGTM");
    const handleRouteChange = (url) => {
      window.dataLayer.push({ event: 'pageview', page: url });
    };

    router.events.on('routeChangeComplete', handleRouteChange(router.asPath));
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange(router.asPath));
    };
  }, [router]);
}

export default useGTM;
