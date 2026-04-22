const BADGES = [
  'Live Broiler Birds',
  'Pan-Maharashtra Delivery',
  'Bulk Order Ready',
  'Trusted Partner Network',
]

const STATS = [
  { icon: 'fa-map-location-dot', value: '36',    label: 'Districts in Maharashtra', dark: false },
  { icon: 'fa-truck-fast',       value: 'Fast',  label: 'Delivery Every Time',       dark: false },
  { icon: 'fa-handshake',        value: '100%',  label: 'Client Satisfaction',       dark: false },
  { icon: 'fa-wheat-awn',        value: 'Farm',  label: 'Direct to Market Supply',   dark: true  },
]

export default function About() {
  return (
    <section id="about" className="py-24" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <div className="section-tag mb-4" data-aos="fade-right">About Us</div>
            <h2
              className="font-playfair text-4xl md:text-5xl font-bold mb-6 gold-underline"
              style={{ color: '#0F3B22' }}
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Maharashtra's Premier Live Broiler Chicken Supplier
            </h2>
            <p className="leading-relaxed mb-6" style={{ color: '#3D6B52' }} data-aos="fade-right" data-aos-delay="150">
              Nanda Poultry Farm is a specialized supplier of <strong style={{ color: '#2A7A50' }}>live broiler chicken birds</strong>, connecting farms directly to markets, restaurants, wholesalers, and retailers across Maharashtra. Our commitment is to quality birds delivered fast — every single time.
            </p>
            <p className="leading-relaxed mb-8" style={{ color: '#3D6B52' }} data-aos="fade-right" data-aos-delay="200">
              Operating a strong delivery network across all 36 districts of Maharashtra, we ensure your order reaches you on time, with healthy, fresh, farm-raised broiler birds sourced from trusted partner farms. Whether you need bulk quantities or regular scheduled supply, we have the infrastructure and experience to serve you.
            </p>
            <div className="flex flex-wrap gap-3" data-aos="fade-right" data-aos-delay="250">
              {BADGES.map(b => (
                <span
                  key={b}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                  style={{ background: '#EAF7EF', color: '#2A7A50', border: '1px solid rgba(42,122,80,.2)' }}
                >
                  <i className="fa-solid fa-check-circle" style={{ color: '#D4AF37' }} /> {b}
                </span>
              ))}
            </div>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-2 gap-5" data-aos="fade-left" data-aos-delay="200">
            {STATS.map(({ icon, value, label, dark }) => (
              <div key={label} className={dark ? 'stat-card-dark' : 'stat-card'}>
                <div className="text-3xl mb-2">
                  <i className={`fa-solid ${icon}`} style={{ color: dark ? '#fff' : '#D4AF37' }} />
                </div>
                <div
                  className="stat-number"
                  style={{ color: dark ? '#fff' : '#2A7A50' }}
                >
                  {value}
                </div>
                <div
                  className="text-sm font-medium mt-1"
                  style={{ color: dark ? 'rgba(255,255,255,.75)' : '#3D6B52' }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
