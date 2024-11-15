import React, { JSX, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

type TInView = {
  children: JSX.Element | JSX.Element[] | string | string[]
  animateName: string
  delay?: 0 | 1 | 2 | 3 | 4 | 5
}
function Index({ children, animateName, delay = 0 }: Readonly<TInView>) {
  const [visibility, setVisibility] = useState<React.CSSProperties['visibility']>('hidden')

  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  })

  useEffect(() => {
    if (entry && inView) {
      setVisibility('visible')
      inView && (entry.target.className = `animate__animated ${animateName} animate__delay-${delay}s`)
    }
  }, [entry, inView, animateName, delay])

  return (
    <div ref={ref} style={{ visibility }}>
      {children}
    </div>
  )
}

export default Index
