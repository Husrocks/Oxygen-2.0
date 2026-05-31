'use client'

import { motion } from 'framer-motion'
import { Trophy, Award } from 'lucide-react'

const brandLogos = [
  {
    name: 'Optimum Nutrition',
    src: 'https://www.optimumnutrition.com/_ui/vfd78baad78/responsive/common/images/on-logo-white.svg',
    alt: 'Optimum Nutrition',
  },
  {
    name: 'Jacked Nutrition',
    src: 'https://jackednutrition.pk/cdn/shop/files/JN_LOGO_website_00e6ad7b-38e4-4c25-b47b-29193de3f40b.png?v=1728474519&width=140',
    alt: 'Jacked Nutrition',
  },
  {
    name: 'MuscleTech',
    src: 'https://international.muscletech.com/wp-content/uploads/2021/11/muscletech-logo-black-1.png',
    alt: 'MuscleTech',
  },
  {
    name: 'BSN',
    src: 'https://www.gobsn.com/_ui/vfd78baad78/responsive/common/images/bsn-logo-white.svg',
    alt: 'BSN',
  },
  {
    name: 'Protinex',
    src: 'https://www.protinex.com/wp-content/themes/protinex/assets/images/logo.svg',
    alt: 'Protinex',
  },
]

const legends = [
  {
    name: 'Ronnie Coleman',
    achievement: '8x Mr. Olympia Champion',
    image: 'https://wallpapercave.com/wp/wp3006463.jpg',
  },
  {
    name: 'Dorian Yates',
    achievement: '6x Mr. Olympia Champion',
    image: 'https://wallpapercave.com/wp/wp3953256.jpg',
  },
  {
    name: 'Arnold Schwarzenegger',
    achievement: '7x Mr. Olympia Champion',
    image: 'https://wallpapercave.com/wp/wp2504209.jpg',
  },
  {
    name: 'Jay Cutler',
    achievement: '4x Mr. Olympia Champion',
    image: 'https://wallpapercave.com/wp/wp3197414.jpg',
  },
]

export default function GallerySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section
      id="gallery"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-dark-bg"
      aria-labelledby="gallery-heading"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          id="gallery-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-center mb-4 font-display tracking-wider"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-accent-green">Partners</span> &{' '}
          <span className="text-accent-blue">Legends</span>
        </motion.h2>

        {/* Brand Logos - Infinite Auto-Scrolling Marquee */}
        <div className="relative w-full overflow-hidden py-12 mb-16 border-b border-gray-800 mask-gradient">
          <div className="animate-marquee flex gap-12 md:gap-16 items-center">
            {/* Tripling the array to make the infinite loop perfectly seamless */}
            {[...brandLogos, ...brandLogos, ...brandLogos].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex items-center justify-center w-32 h-20 md:w-40 md:h-24 opacity-40 hover:opacity-100 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 cursor-pointer shrink-0"
              >
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="max-w-full max-h-full object-contain filter brightness-0 invert"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Legends Gallery */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {legends.map((legend, index) => (
            <motion.div
              key={legend.name}
              className="group relative overflow-hidden rounded-xl aspect-[4/5] cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0">
                <img
                  src={legend.image}
                  alt={legend.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-100 brightness-75 grayscale group-hover:grayscale-0"
                  loading="lazy"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="w-5 h-5 text-accent-green" />
                  <h3 className="text-2xl font-bold text-accent-green uppercase font-display">
                    {legend.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-accent-blue" />
                  <p className="text-white text-sm font-semibold">
                    {legend.achievement}
                  </p>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-green/50 rounded-xl transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-[0_0_30px_rgba(204,255,0,0.3)]" />
            </motion.div>
          ))}
        </motion.div>

        {/* Category Label */}
        <motion.p
          className="text-center text-gray-400 text-lg uppercase tracking-wider font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Legends of Bodybuilding
        </motion.p>
      </div>
    </section>
  )
}

