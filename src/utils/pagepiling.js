import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const PagePiling = ({ children }) => {
  const pagePilingRef = useRef(null)
  const sectionsRef = useRef([])

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pagePilingRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sectionsRef.current.length - 1),
        start: 'top top',
        end: '+=5000',
      },
    })

    sectionsRef.current.forEach((section, index) => {
      tl.fromTo(
        section,
        { y: '100%' },
        { y: '0%', duration: 1 },
        index / (sectionsRef.current.length - 1)
      )
    })
  }, [])

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  return (
    <div id='pagepiling' ref={pagePilingRef}>
      {React.Children.map(children, (child, index) => (
        <div className='pp-section' ref={addToRefs}>
          {child}
        </div>
      ))}
    </div>
  )
}

export default PagePiling
