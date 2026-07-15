import { AnimatedCard, SectionHeader } from '../components/UI/button'
import { InfoPanel } from '../components/UI/card'
import { SectionShell, InputField, EmptyState, LoadingState } from '../components/UI/advanced'

function VisitPage() {
  return (
    <div className="space-y-10">
      <SectionShell
        eyebrow="Private appointment"
        title="Book a personal styling session at the studio."
        description="Discover the collection in person, guided by a dedicated stylist and tailored to your wardrobe needs."
        tone="dark"
        className="p-8 text-[#ffffff]"
      >

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.85fr] items-center">
          <div className="space-y-6">
            <AnimatedCard className="rounded-[1.7rem] border border-[#ffffff]/10 bg-white/5 p-7 shadow-[0_18px_40px_rgba(255,255,255,0.07)]">
              <InfoPanel
                eyebrow="Studio hours"
                title="Monday to Saturday · 10:00 to 19:00"
                tone="dark"
                className="border-0 bg-transparent p-0 shadow-none"
              />
            </AnimatedCard>

            <AnimatedCard className="rounded-[1.7rem] border border-[#e4e2e2] bg-[#ffffff] p-7 shadow-sm">
              <InfoPanel
                eyebrow="Reservation"
                title="Reserve your appointment via email or through our private concierge."
                description="Email"
                className="border-0 bg-transparent p-0 shadow-none"
              >
                <p className="mt-2 text-lg font-medium text-[#000000]">bookings@eleganceatelier.com</p>
              </InfoPanel>
            </AnimatedCard>
          </div>

          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#e4e2e2] bg-[#f5f3f3]">
              <img src="/photo7.jpg" alt="Studio interior" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-[1.4rem] bg-[#ffffff]/90 p-5 text-[#1b1c1c] shadow-lg backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-[#735c00]">Studio</p>
                <p className="mt-2 text-lg font-semibold">A calm space to explore texture, proportion, and quiet details.</p>
              </div>
            </div>
            <div className="rounded-[1.6rem] border border-[#e4e2e2] bg-[#ffffff] p-6 shadow-sm">
              <InputField label="Name" placeholder="Your name" />
              <InputField label="Email" placeholder="you@example.com" type="email" className="mt-4" />
              <InputField label="Notes" placeholder="Tell us what you are looking for" textarea className="mt-4" />
            </div>
          </div>
        </div>
      </SectionShell>
    </div>
  )
}

export default VisitPage
