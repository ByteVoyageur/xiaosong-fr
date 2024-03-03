'use client'
import { useEffect, useRef } from 'react'
import { animationCreate } from '@/utils/utils'
import { throwableAnimation } from '@/utils/throwableAnimation'
import ScrollToTop from '@/components/common/ScrollToTop'
import { ToastContainer } from 'react-toastify'
import AnimatedCursor from 'react-animated-cursor'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'

import animationTitle from '@/utils/animationTitle'
import animationTitleChar from '@/utils/animationTitleChar'
import servicesPanel from '@/utils/servicesPanel'
import PortfolioPanel from '@/utils/PortfolioPanel'
import blogAnimation from '@/utils/blogAnimation'
import linesAnimation from '@/utils/linesAnimation'
import { buttonAnimation } from '@/utils/buttonAnimation'
import { scrollSmother } from '@/utils/scrollSmother'
import { scrollTextAnimation } from '@/utils/scrollTextAnimation'

import {
  ScrollSmoother,
  ScrollToPlugin,
  ScrollTrigger,
  SplitText,
} from '@/plugins'
gsap.registerPlugin(ScrollSmoother, ScrollTrigger, ScrollToPlugin, SplitText)

if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap')
}

const Wrapper = ({ children }: any) => {
  const pathname = usePathname()

  useEffect(() => {
    // animation
    const timer = setTimeout(() => {
      animationCreate()
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      ScrollSmoother.create({
        smooth: 1.35,
        effects: true,
        smoothTouch: false,
        normalizeScroll: false,
        ignoreMobileResize: true,
      })
    }
  }, [])

  useEffect(() => {
    throwableAnimation()
    servicesPanel()
    PortfolioPanel()
    animationTitle()
    animationTitleChar()
    blogAnimation()
    linesAnimation()
    buttonAnimation()
    scrollSmother()
    scrollTextAnimation()
  }, [pathname])

  return (
    <>
      {children}

      <ToastContainer position='top-right' />
      <AnimatedCursor
        innerSize={0}
        outerSize={15}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          cursor: 'pointer',
        }}
        showSystemCursor={true}
      />
      <ScrollToTop />
    </>
  )
}

export default Wrapper
