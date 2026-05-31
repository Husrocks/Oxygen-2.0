'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, User } from 'lucide-react'
import { scheduleData, daysOfWeek } from '@/data/scheduleData'

const classImages: Record<string, string> = {
  'HIIT': 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&q=80',
  'Yoga': 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
  'Strength Training': 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
  'Cardio Blast': 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80',
  'CrossFit': 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=600&q=80',
  'Pilates': 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80',
  'Bootcamp': 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&q=80',
  'Spin Class': 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&q=80',
  'Yoga Flow': 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
  'Boxing': 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&q=80',
  'Zumba': 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80',
  'Meditation': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80',
}

export default function ClassSchedule() {
  const [selectedDay, setSelectedDay] = useState<string>('Monday')

  const filteredClasses = scheduleData.filter(
    (item) => item.day === selectedDay
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      scale: 0.95,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <section
      id="classes"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-bg relative overflow-hidden"
      aria-labelledby="schedule-heading"
    >
      {/* Background visual details */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-green/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            id="schedule-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-center mb-4 font-display tracking-wider"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            Class <span className="text-accent-green">Schedule</span>
          </motion.h2>

          <motion.p
            className="text-center text-gray-400 text-lg max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Pick a day to discover high-intensity workouts and expert-guided training sessions.
          </motion.p>
        </div>

        {/* Day Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-16 max-w-4xl mx-auto">
          {daysOfWeek.map((day) => (
            <motion.button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-5 py-3 rounded-full font-bold uppercase tracking-wider text-xs md:text-sm transition-all duration-300 border ${
                selectedDay === day
                  ? 'bg-accent-green text-dark-bg border-accent-green shadow-[0_4px_15px_rgba(204,255,0,0.35)]'
                  : 'bg-gray-900 text-gray-400 border-gray-800 hover:text-white hover:border-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-pressed={selectedDay === day}
              aria-label={`Filter classes for ${day}`}
            >
              {day}
            </motion.button>
          ))}
        </div>

        {/* Class Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDay}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredClasses.length > 0 ? (
              filteredClasses.map((classItem) => (
                <motion.div
                  key={classItem.id}
                  className="group relative bg-gray-900 border border-gray-800/80 rounded-2xl overflow-hidden hover:border-accent-green/45 transition-all duration-500 hover:shadow-[0_15px_30px_rgba(204,255,0,0.15)] flex flex-col h-full"
                  variants={cardVariants}
                  whileHover={{ y: -6 }}
                >
                  {/* Card Image Header */}
                  <div className="relative h-52 w-full overflow-hidden">
                    <img
                      src={classImages[classItem.classType] || 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&q=80'}
                      alt={classItem.classType}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                      loading="lazy"
                    />
                    {/* Shadow overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
                    
                    {/* Time Badge */}
                    <span className="absolute top-4 right-4 bg-black/85 backdrop-blur-md text-accent-green px-3 py-1.5 rounded-full text-xs font-bold font-mono tracking-wider border border-accent-green/20">
                      {classItem.time}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-2xl font-black text-white uppercase tracking-wide font-display group-hover:text-accent-green transition-colors duration-300 mb-4">
                        {classItem.classType}
                      </h3>

                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-9 h-9 rounded-full bg-accent-green/10 border border-accent-green/20 flex items-center justify-center">
                          <User className="w-4 h-4 text-accent-green" />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">Instructor</p>
                          <p className="text-sm font-bold text-gray-200">{classItem.trainer}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-800 flex items-center justify-between text-gray-400 text-xs uppercase tracking-widest font-mono">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-accent-green" />
                        <span>{classItem.day}</span>
                      </div>
                      <span className="text-[10px] bg-gray-800 text-gray-400 px-2 py-0.5 rounded border border-gray-700">
                        Active
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                className="col-span-full text-center py-16 text-gray-400 text-lg border border-dashed border-gray-800 rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                No classes scheduled for {selectedDay}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
