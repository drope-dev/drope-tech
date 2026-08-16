'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function ScrollReveal({ children, className, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const el = ref.current
    if (!el) return

    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
        },
      }
    )
  }, [delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
