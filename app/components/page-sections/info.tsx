import { motion } from 'framer-motion'
import { SpinningText } from '../animations/spinning-text'

export default function Info() {
  return (
    <div className="my-24 py-24 sm:py-40">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          amount: 0.5,
          once: true,
        }}
        className="mx-auto flex max-w-6xl flex-col-reverse items-center px-10 md:flex-row md:space-x-12 lg:px-16"
      >
        <motion.p
          variants={{
            hidden: {
              opacity: 0,
              filter: 'blur(4px)',
              rotateY: 15,
              scale: 0.97,
            },
            visible: {
              opacity: 1,
              filter: 'blur(0px)',
              rotateY: 0,
              scale: 1,
              transition: {
                duration: 1,
              },
            },
          }}
          className="text-xl leading-normal text-stone-200 sm:text-2xl sm:leading-normal md:text-3xl md:leading-relaxed"
        >
          Based in Austin Texas, Longhorn Design Studio offers web design and
          development services to take your digital presence to the next level.
          We specialize in high-quality, bespoke designs curated for your
          brand's specific needs.
        </motion.p>
        <div className="relative hidden min-w-64 bg-stone-200 md:block">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width={40}
            height={40}
            viewBox="0 0 256 256"
            className="absolute -top-5 left-28 fill-stone-200 text-stone-200"
            variants={{
              hidden: {
                opacity: 0,
                filter: 'blur(4px)',
              },
              visible: {
                opacity: 1,
                filter: 'blur(0px)',
                transition: {
                  duration: 0.5,
                  delay: 1,
                },
              },
            }}
          >
            <path d="M216,120a8,8,0,0,0-6.78,3.76A179.9,179.9,0,0,1,195.41,143L178.32,53.07a16,16,0,0,0-25.72-9.55l-.13.1L128,64,103.53,43.62l-.13-.1a16,16,0,0,0-25.72,9.53L60.59,143a179.27,179.27,0,0,1-13.81-19.25A8,8,0,0,0,40,120a40,40,0,0,0,0,80H216a40,40,0,0,0,0-80ZM93.41,56,117.88,76.4l.12.1a15.92,15.92,0,0,0,20,0l.12-.1L162.59,56l13.68,72H79.73ZM40,184a24,24,0,0,1-4.14-47.64C51.28,159.83,67.73,174.65,82.4,184Zm88,0c-.33,0-25.49-.4-53.86-26.6L76.68,144H179.31l2.54,13.35a113.28,113.28,0,0,1-27.35,19C139.1,183.77,128.06,184,128,184Zm88,0H173.6c14.67-9.35,31.12-24.17,46.54-47.64A24,24,0,0,1,216,184Z"></path>
          </motion.svg>
          <SpinningText
            className="font-semibold uppercase text-stone-200"
            fontSize={1.2}
            radius={8}
            variants={{
              container: {
                hidden: {
                  opacity: 1,
                },
                visible: {
                  opacity: 1,
                  rotate: 270,
                  transition: {
                    type: 'spring',
                    bounce: 0,
                    duration: 8,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    staggerChildren: 0.03,
                  },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  filter: 'blur(4px)',
                },
                visible: {
                  opacity: 1,
                  filter: 'blur(0px)',
                },
              },
            }}
          >{`Longhorn ✯ Design ✯ Studio ✯ `}</SpinningText>
        </div>
      </motion.div>
    </div>
  )
}
