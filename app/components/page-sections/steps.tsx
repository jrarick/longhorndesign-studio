import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useRef, useState } from 'react'
import cowboyPolishingRevolver from '~/assets/cowboy-polishing-revolver.webp'
import cowboyRanching from '~/assets/cowboy-ranching.webp'
import cowboySaddlingHorse from '~/assets/cowboy-saddling-horse.webp'
import cowboysPlanning from '~/assets/cowboys-planning.webp'
import { cn } from '~/lib/utils'

type Blurb = {
  id: number
  title: string
  content: string
  image: string
}

const blurbs: Blurb[] = [
  {
    id: 1,
    title: 'First: Plan',
    content:
      "We'll have discussions to understand business goals, target audience, brand identity, and specific requirements. We conduct research, define project scope, and develop a project roadmap that will guide the next steps of the design process.",
    image: cowboysPlanning,
  },
  {
    id: 2,
    title: 'Second: Prepare',
    content:
      "This involves procuring digital assets, creating mockups, curating color palettes and typography, and developing a cohesive design system. We'll also lock down technology choices that we'll build with in the upcoming phase.",
    image: cowboySaddlingHorse,
  },
  {
    id: 3,
    title: 'Third: Execute',
    content:
      "We'll convert static mockups into dynamic, responsive web interfaces. We build a live prototype of the website and ensure cross-browser and cross-device compatibility. This stage involves meticulous attention to both visual design and technical performance.",
    image: cowboyRanching,
  },
  {
    id: 4,
    title: 'Fourth: Refine',
    content:
      "We perform testing for accessibility and browser and device compatibility as well as making changes based on feedback and revisions. Once we're confident your website is free of any critical bugs that could affect usability it's time to send it live.",
    image: cowboyPolishingRevolver,
  },
]

function BlurbSection({ blurb }: { blurb: Blurb }) {
  return (
    <div className="max-w-xl p-8">
      <div className="max-w-max">
        <h2 className="mb-6 text-5xl font-semibold text-stone-200">
          {blurb.title}
        </h2>
        <div
          className="my-8 flex h-0.5 w-full items-center justify-center bg-stone-200"
          aria-hidden={true}
        >
          <motion.span
            initial={{
              rotate: 0,
            }}
            animate={{
              rotate: 360,
              transition: {
                duration: 4,
                ease: 'linear',
                repeat: Infinity,
              },
            }}
            className="bg-stone-925 rounded-full p-2 text-3xl leading-[25px] text-stone-200"
          >
            {`✯`}
          </motion.span>
        </div>
      </div>
      <p className="text-base font-medium leading-loose text-stone-400">
        {blurb.content}
      </p>
    </div>
  )
}

export default function Steps() {
  const [activeBlurb, setActiveBlurb] = useState(blurbs[0])
  const blurbContainerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: blurbContainerRef,
    offset: ['start end', 'end start'],
  })

  useMotionValueEvent(scrollYProgress, 'change', () => {
    let progress = scrollYProgress.get()
    function index() {
      if (progress < 0.28) return 0
      if (progress < 0.5) return 1
      if (progress < 0.72) return 2
      return 3
    }

    setActiveBlurb(blurbs[index()])
  })

  return (
    <div className="bg-stone-925 border-y border-stone-800">
      <div className="flex w-full flex-col items-center">
        <h2 className="mt-20 font-display text-8xl uppercase text-marzipan-200">
          Our Process
        </h2>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex items-center justify-center p-8 md:sticky md:top-0 md:h-screen md:w-1/2">
          <div className="text-stone-925 relative inline-block aspect-square overflow-hidden after:absolute after:left-0 after:top-0 after:block after:h-full after:w-full after:border-separate after:content-[''] after:[box-shadow:inset_0_0_10px_10px]">
            {blurbs.map((blurb, i) => (
              <motion.img
                key={blurb.id}
                src={blurb.image}
                alt={blurb.title}
                className={cn(
                  'h-auto w-full max-w-md rounded-3xl shadow-xl transition-opacity',
                  i == activeBlurb.id - 1 ? 'opacity-100' : 'size-0 opacity-0'
                )}
              />
            ))}
          </div>
        </div>
        <div
          className="space-y-[100dvh] px-8 py-72 md:w-1/2"
          ref={blurbContainerRef}
        >
          {blurbs.map((blurb) => (
            <BlurbSection key={blurb.id} blurb={blurb} />
          ))}
        </div>
      </div>
    </div>
  )
}
