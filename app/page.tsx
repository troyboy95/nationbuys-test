import HeroSlider         from '@/components/HeroSlider'
import StatsSection       from '@/components/StatsSection'
import ServicesSection    from '@/components/ServicesSection'
import WhyChooseUs        from '@/components/WhyChooseUs'
import TestimonialsSection from '@/components/TestimonialsSection'

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
    </>
  )
}