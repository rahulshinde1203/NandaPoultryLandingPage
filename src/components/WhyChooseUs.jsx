const REASONS = [
  {
    icon: 'fa-leaf',
    title: 'Fresh & Healthy Birds',
    desc: 'Every broiler bird we supply is fresh, live, and healthy — sourced from partner farms that maintain the highest hygiene standards.',
    delay: 100,
  },
  {
    icon: 'fa-truck-fast',
    title: 'Fast Delivery Network',
    desc: 'Our logistics infrastructure covers all 36 districts of Maharashtra, ensuring your order is delivered on time, every time.',
    delay: 200,
  },
  {
    icon: 'fa-handshake',
    title: 'Trusted Supplier Network',
    desc: "Backed by established poultry brands like Venky's and Suguna Foods, we provide birds you can trust for your business and customers.",
    delay: 300,
  },
  {
    icon: 'fa-tag',
    title: 'Competitive Pricing',
    desc: 'Best market rates for both individual and bulk orders. Direct farm supply means no unnecessary middlemen, maximizing your value.',
    delay: 400,
  },
]

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="py-24"
      style={{ background: 'linear-gradient(160deg, #EAF7EF 0%, #F3FAF6 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <div className="section-tag mb-4 justify-center" data-aos="fade-up">
            Why Choose Us
          </div>
          <h2
            className="font-playfair text-4xl md:text-5xl font-bold mb-4"
            style={{ color: '#0F3B22' }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            The Nanda Poultry{' '}
            <span style={{
              background: 'linear-gradient(135deg, #2A7A50, #4CAF74)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Difference
            </span>
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: '#3D6B52' }} data-aos="fade-up" data-aos-delay="150">
            We don't just supply chicken — we deliver trust, quality, and reliability every single time.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map(({ icon, title, desc, delay }) => (
            <div
              key={title}
              className="why-card why-card-centered"
              data-aos="fade-up"
              data-aos-delay={delay}
            >
              <div className="why-icon">
                <i className={`fa-solid ${icon}`} />
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#0F3B22' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#3D6B52' }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          className="mt-14 rounded-3xl p-8 md:p-12 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
          style={{
            background: 'linear-gradient(135deg, #2A7A50 0%, #3D9B68 100%)',
            boxShadow: '0 20px 60px rgba(42,122,80,.25)',
          }}
        >
          <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Place a{' '}
            <span style={{ color: '#E8CB5A' }}>Bulk Order?</span>
          </h3>
          <p className="mb-8 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,.8)' }}>
            Contact us now for fresh live broiler chicken supply with fast delivery anywhere in Maharashtra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919623230636"
              target="_blank"
              rel="noreferrer"
              className="btn-gold flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold"
            >
              <i className="fa-brands fa-whatsapp text-lg" /> WhatsApp Us
            </a>
            <a
              href="tel:+919623230636"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold"
              style={{ border: '2px solid rgba(255,255,255,.6)', color: '#fff', transition: 'background .25s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.1)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <i className="fa-solid fa-phone" /> Call: 9623230636
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
