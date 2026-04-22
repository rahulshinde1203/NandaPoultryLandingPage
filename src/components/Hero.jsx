const STATS = [
  { value: '3+',   label: 'Major Cities' },
  { value: '36',   label: 'Districts Served' },
  { value: '100%', label: 'Live & Fresh Birds' },
  { value: '24/7', label: 'Order Support' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #DBF2E5 0%, #EAF7EF 45%, #F6FDF8 100%)',
        position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        paddingTop: 80,
      }}
    >
      <div className="hero-grid-bg" />
      <div className="hero-orb orb-1" />
      <div className="hero-orb orb-2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative text-center" style={{ zIndex: 10 }}>

        {/* Badge */}
        <div className="hero-badge mb-6 mx-auto" style={{ width: 'fit-content' }} data-aos="fade-down">
          <span className="badge-dot" />
          Maharashtra's Trusted Poultry Supplier
        </div>

        {/* Headline */}
        <h1
          className="font-playfair font-bold leading-tight mb-6"
          style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', color: '#0F3B22' }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Fresh Live Broiler<br />
          <span style={{
            background: 'linear-gradient(135deg, #2A7A50 0%, #4CAF74 60%, #D4AF37 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Chicken Supply
          </span><br />
          <span style={{ color: '#0F3B22' }}>Across Maharashtra</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: '#3D6B52' }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Serving{' '}
          <span style={{ color: '#2A7A50', fontWeight: 700 }}>Pune, Mumbai, Nashik</span>
          {' '}&amp; all districts of Maharashtra with reliable farm-to-market delivery of quality broiler birds.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="300">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-order-modal'))}
            className="btn-gold flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold"
            style={{ boxShadow: '0 12px 32px rgba(212,175,55,.3)', border: 'none', cursor: 'pointer' }}
          >
            <i className="fa-brands fa-whatsapp text-xl" /> Order Now
          </button>
          <a
            href="tel:+919623230636"
            className="btn-outline-green flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold"
          >
            <i className="fa-solid fa-phone text-lg" /> Call Now
          </a>
        </div>

        {/* Floating leaf accents */}
        <div style={{
          position: 'absolute', top: '10%', left: '5%', opacity: .15,
          fontSize: '3rem', color: '#2A7A50', transform: 'rotate(-20deg)',
          pointerEvents: 'none',
        }}>
          <i className="fa-solid fa-leaf" />
        </div>
        <div style={{
          position: 'absolute', bottom: '15%', right: '6%', opacity: .12,
          fontSize: '2.5rem', color: '#2A7A50', transform: 'rotate(30deg)',
          pointerEvents: 'none',
        }}>
          <i className="fa-solid fa-seedling" />
        </div>

        {/* Stats Strip */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-4xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="rounded-2xl py-5 px-4 text-center"
              style={{
                background: '#fff',
                border: '1px solid rgba(42,122,80,.12)',
                boxShadow: '0 4px 20px rgba(42,122,80,.08)',
              }}
            >
              <div style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: '2rem', fontWeight: 700, color: '#2A7A50',
              }}>
                {value}
              </div>
              <div style={{ color: '#3D6B52', fontSize: '.75rem', fontWeight: 500, marginTop: 4 }}>
                {label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
