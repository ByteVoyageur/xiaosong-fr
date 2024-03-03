import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

export function animatedHeadline() {
  if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function () {
      const headlines = document.querySelectorAll('.cd-headline')

      headlines.forEach((headline) => {
        const words = new SplitText(headline, { type: 'words,chars' }).chars
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 })

        words.forEach((word, i) => {
          tl.from(
            word,
            { duration: 0.6, y: '100%', ease: 'power2.out', delay: i * 0.1 },
            0
          ).to(
            word,
            {
              duration: 0.6,
              y: '-100%',
              ease: 'power2.in',
              delay: (i + 1) * 0.1 + 1,
            },
            0
          )
        })
      })
    })
  }
}
