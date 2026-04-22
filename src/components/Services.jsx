const SERVICES = [
  {
    icon: 'fa-drumstick-bite',
    title: 'Live Broiler Chicken Supply',
    desc: 'Premium quality live broiler birds sourced from certified partner farms, ensuring health, freshness, and consistent supply.',
    cta: 'Order Now',
    delay: 100,
  },
  {
    icon: 'fa-boxes-stacked',
    title: 'Bulk Orders',
    desc: 'Scalable bulk supply for wholesalers, markets, restaurants, and processing units. Competitive pricing for large volume orders.',
    cta: 'Get Quote',
    delay: 200,
  },
  {
    icon: 'fa-truck-fast',
    title: 'Fast Delivery Service',
    desc: 'Reliable and timely delivery across Pune, Mumbai, Nashik, and all 36 Maharashtra districts. Our logistics network ensures on-time arrival.',
    cta: 'Check Area',
    delay: 300,
  },
  {
    icon: 'fa-store',
    title: 'Farm-to-Market Supply',
    desc: 'Direct supply chain from farms to your market stall or processing facility, eliminating middlemen and ensuring maximum freshness.',
    cta: 'Learn More',
    delay: 400,
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-24"
      style={{ background: 'linear-gradient(180deg, #F6FDF8 0%, #fff 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <div className="section-tag mb-4 justify-center" data-aos="fade-up">Our Services</div>
          <h2
            className="font-playfair text-4xl md:text-5xl font-bold mb-4"
            style={{ color: '#0F3B22' }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            What We Offer
          </h2>
          <p style={{ color: '#3D6B52' }} className="max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="150">
            Comprehensive live broiler chicken supply solutions for businesses, traders, and retailers across Maharashtra.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map(({ icon, title, desc, cta, delay }) => (
            <div key={title} className="service-card" data-aos="fade-up" data-aos-delay={delay}>
              <div className="service-icon">
                <i className={`fa-solid ${icon}`} />
              </div>
              <h3 className="text-lg font-bold mb-3" style={{ color: '#0F3B22' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#3D6B52' }}>{desc}</p>
              <div className="mt-5 flex items-center gap-2 text-sm font-semibold" style={{ color: '#2A7A50' }}>
                {cta} <i className="fa-solid fa-arrow-right" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
