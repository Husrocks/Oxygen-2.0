'use client'

import { motion } from 'framer-motion'
import { Award, ShieldCheck, Dumbbell, Sparkles } from 'lucide-react'

const trainers = [
  {
    name: 'Sarah Johnson',
    specialty: 'HIIT & Bootcamp Specialist',
    experience: '10+ Years Professional Experience',
    certification: 'NASM & FMS Certified Coach',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=800&q=80',
    quote: 'Your mind will quit a thousand times before your body does. Embrace the challenge.',
    glow: 'shadow-accent-green/10 border-accent-green/20',
  },
  {
    name: 'David Martinez',
    specialty: 'Elite Strength & Conditioning',
    experience: '12+ Years Professional Experience',
    certification: 'CSCS & USAW Level 1 Certified',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=800&q=80',
    quote: 'Consistency beats talent every single time. Show up, put in the work, repeat.',
    glow: 'shadow-accent-blue/10 border-accent-blue/20',
  },
  {
    name: 'Emma Wilson',
    specialty: 'CrossFit & Functional Fitness',
    experience: '9+ Years Professional Experience',
    certification: 'CrossFit Level 2 & Kettlebell Trainer',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80',
    quote: 'Find your limits, look them in the eye, and push right past them. You are stronger than you think.',
    glow: 'shadow-accent-green/10 border-accent-green/20',
  },
  {
    name: 'Carlos Rodriguez',
    specialty: 'Boxing & Combat Conditioning',
    experience: '15+ Years Professional Experience',
    certification: 'USA Boxing & Kickboxing Coach',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80',
    quote: 'Float like a butterfly, sting like a beast. Speed, power, and absolute focus.',
    glow: 'shadow-accent-blue/10 border-accent-blue/20',
  },
]

export default function TrainersSection() {
  return (
    <section
      id="trainers"
      className="py-28 px-4 sm:px-6 lg:px-8 bg-gray-950 relative overflow-hidden border-t border-gray-900"
      aria-labelledby="trainers-heading"
    >
      {/* Abstract futuristic accents */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-accent-green/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            id="trainers-heading"
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase text-center mb-4 font-display tracking-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            EXPERT <span className="text-accent-green drop-shadow-[0_0_20px_rgba(204,255,0,0.3)]">TRAINERS</span>
          </motion.h2>

          <motion.p
            className="text-center text-gray-400 text-lg max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Meet the certified industry legends focused entirely on sculpting your ultimate form.
          </motion.p>
        </div>

        {/* Dynamic Wipe/Unveil Card Container */}
        <div className="relative w-full max-w-5xl mx-auto pb-32">
          {trainers.map((trainer, index) => (
            <div
              key={trainer.name}
              className="relative w-full h-[90vh] sm:h-[100vh]"
              style={{
                zIndex: trainers.length - index,
              }}
            >
              <div className="sticky top-32 w-full group">
                {/* Wipe Card */}
                <motion.div
                  className={`bg-dark-bg border border-gray-800 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:border-white/10 transition-all duration-500 flex flex-col md:flex-row h-auto md:h-[480px] w-full p-3 ${trainer.glow}`}
                  initial={{ opacity: 0, y: 60, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, margin: '-60px' }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                  {/* Image Section */}
                  <div className="w-full md:w-1/2 h-72 md:h-full relative overflow-hidden rounded-2xl">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                      loading="lazy"
                    />
                    {/* Neon HUD laser marker */}
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-dark-bg via-transparent to-transparent z-10" />
                    
                    {/* Cyber Overlay coordinate stats */}
                    <div className="absolute bottom-4 left-4 z-20 font-mono text-[9px] text-white/30 tracking-widest pointer-events-none">
                      [OXYGEN_COACH_ID: {index + 1}09{index}]
                    </div>
                  </div>

                  {/* Content Details Section */}
                  <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between z-20 bg-dark-bg">
                    <div>
                      {/* Specialty pill badge */}
                      <div className="flex items-center gap-1.5 bg-accent-green/10 text-accent-green px-3 py-1 rounded-full text-xs font-bold w-max border border-accent-green/20 mb-6 font-mono uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5" />
                        {trainer.specialty.split(' ')[0]} Specialist
                      </div>

                      {/* Trainer Name */}
                      <h3 className="text-4xl md:text-5xl font-black uppercase text-white font-display mb-4 tracking-wide group-hover:text-accent-green transition-colors duration-300">
                        {trainer.name}
                      </h3>
                      
                      <p className="text-gray-400 text-sm md:text-base font-semibold mb-6 italic leading-relaxed">
                        "{trainer.quote}"
                      </p>
                    </div>

                    {/* Skills lists / specs */}
                    <div className="space-y-4 border-t border-gray-800 pt-6">
                      <div className="flex items-center gap-3 text-gray-200">
                        <div className="w-8 h-8 rounded-full bg-accent-green/10 flex items-center justify-center border border-accent-green/10">
                          <Award className="w-4 h-4 text-accent-green" />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest font-mono">Certification</p>
                          <p className="text-sm font-semibold">{trainer.certification}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-gray-200">
                        <div className="w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center border border-accent-blue/10">
                          <Dumbbell className="w-4 h-4 text-accent-blue" />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest font-mono">Field Experience</p>
                          <p className="text-sm font-semibold">{trainer.experience}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
