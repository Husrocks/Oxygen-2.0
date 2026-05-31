import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import StorySection from '@/components/StorySection'
import ClassSchedule from '@/components/ClassSchedule'
import TrainersSection from '@/components/TrainersSection'
import GallerySection from '@/components/GallerySection'
import PricingSection from '@/components/PricingSection'
import Footer from '@/components/Footer'
import RevealOnScroll from '@/components/RevealOnScroll'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <RevealOnScroll>
        <HeroSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <StorySection />
      </RevealOnScroll>
      <RevealOnScroll>
        <ClassSchedule />
      </RevealOnScroll>
      <RevealOnScroll>
        <TrainersSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <GallerySection />
      </RevealOnScroll>
      <RevealOnScroll>
        <PricingSection />
      </RevealOnScroll>
      <Footer />
    </main>
  )
}

