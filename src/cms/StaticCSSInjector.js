import React, { useEffect, useState } from 'react'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/core'

const StaticCSSInjector = React.memo(({ children }) => {

  var iframe = document.querySelector("#nc-root iframe")
  const iframeHead = iframe.contentDocument.head
  var cache = (createCache({ container: iframeHead }));

  return (
    <CacheProvider value={cache}>
      {children}
    </CacheProvider>    
  )
})

export default StaticCSSInjector;