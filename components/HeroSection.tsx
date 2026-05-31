'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useRef } from 'react'

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  const handleScrollToClasses = () => {
    const element = document.querySelector('#classes')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80)',
          y,
        }}
      >
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-overlay" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity }}
      >
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wider mb-6 font-display"
          variants={itemVariants}
        >
          FORGE YOUR{' '}
          <span className="text-accent-green drop-shadow-[0_0_20px_rgba(204,255,0,0.5)]">
            LEGACY
          </span>
          .
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Premium equipment. Expert trainers. Open 24/7. Join the elite fitness
          community.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <motion.a
            href="#membership"
            className="group relative px-8 py-4 bg-accent-green text-dark-bg font-bold uppercase tracking-wider rounded-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault()
              const element = document.querySelector('#membership')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            aria-label="Start Free Trial"
          >
            <div
              className="absolute inset-0 bg-dark-bg -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"
            />
            <span className="relative z-10 flex items-center gap-2 group-hover:text-accent-green transition-colors">
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.a>

          <motion.button
            onClick={handleScrollToClasses}
            className="group relative px-8 py-4 border-2 border-dark-text text-dark-text font-bold uppercase tracking-wider rounded-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="View Classes"
          >
            <div
              className="absolute inset-0 bg-dark-text -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"
            />
            <span className="relative z-10 group-hover:text-dark-bg transition-colors duration-300">
              View Classes
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, repeat: Infinity, repeatType: 'reverse', duration: 1 }}
      >
        <div className="w-6 h-10 border-2 border-dark-text rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-accent-green rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

