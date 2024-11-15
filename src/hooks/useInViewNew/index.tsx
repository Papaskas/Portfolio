import React, { RefObject, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

function Index(animationName: string, forwardedRef: RefObject<Element>, delay: 0 | 1 | 2 | 3 | 4 | 5 = 0) {
  const [visibility, setVisibility] = useState<React.CSSProperties['visibility']>('hidden')

  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  })

  useEffect(() => {
    console.log(forwardedRef)
    if (entry && inView) {
      // setVisibility('visible')
      entry.target.className += ` animate__animated ${animationName} animate__delay-${delay}s`
    }
  }, [forwardedRef, visibility, entry, inView, animationName, delay])

  return 'd'
}

export default Index
