import React, { useEffect, useRef } from 'react'
import anime from 'animejs'
import css from './style.module.scss'

function Index() {
  const refLeftPong = useRef(null)
  const refRightPong = useRef(null)
  const refBall = useRef(null)

  useEffect(() => {
    const loop = true
    const easing = 'linear'
    const direction = 'alternate'

    anime({
      targets: refBall.current,
      translateX: 470,
      translateY: 100,
      easing,
      loop,
      direction,
      background: [{ value: '#573796' }, { value: '#FB89FB' }, { value: '#FBF38C' }, { value: '#18FF92' }, { value: '#5A87FF' }],
    })
    const ballTimeline = anime.timeline({
      loop,
      direction,
    })
    const rightPongTimeline = anime.timeline({
      loop,
      direction,
    })
    const leftPongTimeline = anime.timeline({
      loop,
      direction,
    })
    ballTimeline
      .add({
        targets: refBall.current,
        translateY: 100,
        translateX: 470,
        easing,
      })
      .add({
        targets: refBall.current,
        translateY: 0,
        translateX: 0,
        easing,
      })
      .add({
        targets: refBall.current,
        translateY: '-80',
        translateX: 470,
        easing,
      })
    rightPongTimeline
      .add({
        targets: refRightPong.current,
        translateY: 100,
        easing,
        background: '#573796',
      })
      .add({
        targets: refRightPong.current,
        translateY: 0,
        easing,
        background: '#FB89FB',
      })
      .add({
        targets: refRightPong.current,
        translateY: '-100',
        easing,
        background: '#FBF38C',
      })
    leftPongTimeline
      .add({
        targets: refLeftPong.current,
        translateY: '-80',
        easing,
        background: '#18FF92',
      })
      .add({
        targets: refLeftPong.current,
        translateY: 10,
        easing,
        background: '#5A87FF',
      })
      .add({
        targets: refLeftPong.current,
        translateY: 60,
        easing,
        background: '#FF1461',
      })
  })

  return (
    <div className={css.container}>
      <div className={css.pong + ' ' + css.leftPong} ref={refLeftPong}></div>
      <div className={css.ball} ref={refBall}></div>
      <div className={css.pong + ' ' + css.rightPong} ref={refRightPong}></div>
    </div>
  )
}

export default Index
