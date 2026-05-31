'use client'

import { motion } from 'framer-motion'
import { Zap, Flame, ShieldAlert } from 'lucide-react'

const storySteps = [
  {
    num: '01',
    title: 'THE SPARK',
    subtitle: 'Decide Your Path',
    desc: 'Every greatness starts with a single decision. Break free from your comfort zone, leave excuses behind, and ignite the fire within.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80',
    icon: <Zap className="w-8 h-8 text-accent-green" />,
    color: 'text-accent-green',
    glow: 'shadow-accent-green/20 border-accent-green/30 hover:border-accent-green/80',
    hudBorder: 'border-accent-green',
    laserColor: 'from-transparent via-accent-green to-transparent',
    techReadout: 'TRANSFORMATION_TARGET: ACQUIRED // BEAST_MODE: ARMED',
    coords: 'SYS_SPK.REC: LAT.51.7 / LONG.0.12',
    textColor: 'text-accent-green',
    badgeGlow: 'bg-accent-green/10 text-accent-green border-accent-green/30',
  },
  {
    num: '02',
    title: 'THE GRIND',
    subtitle: 'Push Your Limits',
    desc: 'Sweat. Discipline. Repeat. True strength is forged in the silence of early mornings and the fire of raw effort. You do not get what you wish for; you get what you work for.',
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=800&q=80',
    icon: <Flame className="w-8 h-8 text-accent-blue" />,
    color: 'text-accent-blue',
    glow: 'shadow-accent-blue/20 border-accent-blue/30 hover:border-accent-blue/80',
    hudBorder: 'border-accent-blue',
    laserColor: 'from-transparent via-accent-blue to-transparent',
    techReadout: 'LIMITS: BYPASSED // POWER_LEVEL: 98% // ANABOLIC: STABLE',
    coords: 'SYS_GRND.REC: RATIO_LIMIT: 99.4%',
    textColor: 'text-accent-blue',
    badgeGlow: 'bg-accent-blue/10 text-accent-blue border-accent-blue/30',
  },
  {
    num: '03',
    title: 'THE LEGACY',
    subtitle: 'Become Elite',
    desc: 'You are the sculptor of your own future. Forge your body, build your mind, and make your legacy permanent. Welcome to the elite.',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80',
    icon: <ShieldAlert className="w-8 h-8 text-accent-green" />,
    color: 'text-accent-green',
    glow: 'shadow-accent-green/20 border-accent-green/30 hover:border-accent-green/80',
    hudBorder: 'border-accent-green',
    laserColor: 'from-transparent via-accent-green to-transparent',
    techReadout: 'LEGACY_CORE: ACTIVE // STATUS: IMMORTAL // LEVEL: 99',
    coords: 'SYS_LGCY.REC: ELITE_CONFIRMED',
    textColor: 'text-accent-green',
    badgeGlow: 'bg-accent-green/10 text-accent-green border-accent-green/30',
  },
]

export default function StorySection() {
  return (
    <section className="relative py-28 bg-dark-bg overflow-hidden border-t border-gray-900">
      {/* Ambient Pulsing Glow Backgrounds */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-accent-green/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-32">
          <motion.p
            className="text-xs md:text-sm font-bold tracking-widest text-accent-green uppercase mb-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The Transformation Journey
          </motion.p>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase font-display tracking-tight text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            HOW WE BUILD <span className="text-accent-green drop-shadow-[0_0_20px_rgba(204,255,0,0.3)]">LEGENDS</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-accent-green mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        {/* Storytelling Timeline */}
        <div className="relative">
          {/* Vertical Timeline Center Line (Desktop Only) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-accent-green via-accent-blue to-accent-green hidden lg:block opacity-20" />

          <div className="flex flex-col gap-28 lg:gap-48">
            {storySteps.map((step, index) => {
              const isEven = index % 2 === 0
              return (
                <div
                  key={step.num}
                  className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
                >
                  {/* Left Column (Text) */}
                  <motion.div
                    className={`w-full lg:w-1/2 flex flex-col justify-center ${
                      isEven ? 'lg:order-1' : 'lg:order-2 lg:items-end lg:text-right'
                    }`}
                    initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  >
                    {/* Number Overlay */}
                    <span className="text-8xl md:text-9xl font-black font-display text-gray-800/10 select-none leading-none mb-4 tracking-tighter">
                      {step.num}
                    </span>

                    {/* Step Icon and Subtitle */}
                    <div className={`flex items-center gap-3 mb-4 ${!isEven && 'lg:flex-row-reverse'}`}>
                      {step.icon}
                      <span className="text-lg font-bold text-gray-400 tracking-wider">
                        {step.subtitle}
                      </span>
                    </div>

                    {/* Heading */}
                    <h3 className={`text-4xl md:text-6xl font-black uppercase font-display tracking-wide mb-6 ${step.color} drop-shadow-[0_2px_15px_rgba(0,0,0,0.5)]`}>
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl">
                      {step.desc}
                    </p>
                  </motion.div>

                  {/* Right Column (Futuristic Image Card) */}
                  <motion.div
                    className={`w-full lg:w-1/2 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                    initial={{ opacity: 0, scale: 0.95, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  >
                    {/* Perspective card wrapper for 3D hover tilt */}
                    <div className="[perspective:1000px] w-full">
                      <div className={`group relative rounded-3xl overflow-hidden border-2 bg-gray-950 p-2 shadow-[0_0_30px_rgba(0,0,0,0.8)] transition-all duration-700 ease-out hover:shadow-[0_0_50px_rgba(0,0,0,0.9)] hover:[transform:rotateX(3deg)_rotateY(5deg)] [transform-style:preserve-3d] ${step.glow}`}>
                        
                        {/* Image container */}
                        <div className="relative rounded-2xl overflow-hidden aspect-video lg:aspect-[4/3] w-full">
                          
                          {/* Image */}
                          <img
                            src={step.image}
                            alt={step.title}
                            className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-105 filter brightness-75 grayscale group-hover:grayscale-0 group-hover:brightness-95"
                            loading="lazy"
                          />
                          
                          {/* Ambient Scanning Laser Overlay */}
                          <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${step.laserColor} opacity-0 group-hover:opacity-100 animate-sweep pointer-events-none z-30`} />

                          {/* Tech Scanlines grid */}
                          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] opacity-20 pointer-events-none" />

                          {/* Futuristic Dark Shadow gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-500 z-10" />

                          {/* Dynamic HUD corners overlay (activates on hover) */}
                          <div className={`absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 ${step.hudBorder} opacity-0 group-hover:opacity-100 transition-all duration-500 scale-125 group-hover:scale-100 z-20`} />
                          <div className={`absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 ${step.hudBorder} opacity-0 group-hover:opacity-100 transition-all duration-500 scale-125 group-hover:scale-100 z-20`} />
                          <div className={`absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 ${step.hudBorder} opacity-0 group-hover:opacity-100 transition-all duration-500 scale-125 group-hover:scale-100 z-20`} />
                          <div className={`absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 ${step.hudBorder} opacity-0 group-hover:opacity-100 transition-all duration-500 scale-125 group-hover:scale-100 z-20`} />

                          {/* Telemetry data readouts (bottom-left) */}
                          <div className={`absolute bottom-4 left-6 z-20 font-mono text-[9px] tracking-widest bg-black/80 px-3 py-1.5 rounded-md border backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0 ${step.textColor} border-white/10`}>
                            {step.techReadout}
                          </div>

                          {/* Tech Coordinates (top-right) */}
                          <div className="absolute top-4 right-6 z-20 font-mono text-[8px] tracking-widest text-white/40 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                            [{step.coords}]
                          </div>
                        </div>

                        {/* Outer Glowing Border HUD Highlight */}
                        <div className="absolute inset-0 rounded-3xl border border-white/0 group-hover:border-white/5 transition-colors pointer-events-none" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
