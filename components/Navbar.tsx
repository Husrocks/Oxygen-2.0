'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Classes', href: '#classes' },
  { name: 'Trainers', href: '#trainers' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Membership', href: '#membership' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Dynamic Active Section Tracking (Scrollspy)
      const sections = ['home', 'classes', 'trainers', 'gallery', 'membership']
      const scrollPosition = window.scrollY + 150

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Trigger once on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] sm:w-[90%] md:w-full ${
        scrolled
          ? 'top-4 max-w-5xl rounded-full border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] shadow-accent-green/5 bg-black/85 backdrop-blur-lg py-3 px-6 md:px-8'
          : 'top-0 max-w-full bg-transparent py-6 px-8'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          className="text-2xl font-bold uppercase tracking-wider text-accent-green font-display"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#home')
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Oxygen Gym Home"
        >
          Oxygen
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1)
            return (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 relative group py-1.5 ${
                  isActive ? 'text-accent-green' : 'text-dark-text hover:text-accent-green'
                }`}
                whileHover={{ y: -1 }}
                aria-label={`Navigate to ${link.name}`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-accent-green transition-all duration-300 ${
                    isActive ? 'w-full shadow-[0_0_8px_#ccff00]' : 'w-0 group-hover:w-full'
                  }`}
                />
              </motion.a>
            )
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-dark-text hover:text-accent-green transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] glass z-50 md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xl font-bold uppercase tracking-wider text-accent-green font-display">
                    Oxygen
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-dark-text hover:text-accent-green transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="flex flex-col gap-6" role="navigation">
                  {navLinks.map((link, index) => {
                    const isActive = activeSection === link.href.substring(1)
                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault()
                          handleNavClick(link.href)
                        }}
                        className={`text-lg font-semibold uppercase tracking-wider transition-colors py-2 ${
                          isActive ? 'text-accent-green' : 'text-dark-text hover:text-accent-green'
                        }`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        aria-label={`Navigate to ${link.name}`}
                      >
                        {link.name}
                      </motion.a>
                    )
                  })}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}


