import React, { useEffect, useState } from 'react'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/core'

const CSSInjector = ({ children }) => {
  const [cache, setCache] = useState();
  const [flag, setFlag] = useState(-1);

  useEffect(() => {
    console.log("flag", flag);
    if (flag === -1) {
      const iframe = document.getElementsByTagName('iframe')[0]
      console.log(iframe);
      const iframeHead = iframe.contentDocument.head
      setCache(createCache({ container: iframeHead }));
    }
  }, [flag]);

  useEffect(() => {
    setTimeout(() => {
      setFlag(flag + 1);
    }, 1000);
  }, [])

  return (
    <>
    {cache && 
      (<CacheProvider value={cache}>
        {children}
      </CacheProvider>)}
    </>
    
  )
}

export default CSSInjector;