/*
 * City positions are calibrated against the Maharashtra map image.
 * Formula (image padding: ~7% left, ~2% right, ~4% top, ~5% bottom):
 *   left% = 7 + (lon - 72.77) / 7.98 * 91
 *   top%  = 4 + (22.02 - lat) / 6.27 * 91
 *
 *   Mumbai  72.87°E 18.97°N → left=8.1%  top=46.8%
 *   Pune    73.85°E 18.52°N → left=19.3% top=52.9%
 *   Nashik  73.79°E 19.99°N → left=18.6% top=32.7%
 */

const CITIES = [
  {
    name: 'Pune',
    icon: 'fa-star',
    badge: 'Primary Hub',
    desc: 'Primary hub — fastest delivery. Serving all Pune districts including Pimpri-Chinchwad, Chakan, and Haveli taluka.',
    delay: 0,
  },
  {
    name: 'Mumbai',
    icon: 'fa-location-dot',
    badge: null,
    desc: 'Serving Greater Mumbai, Thane, Navi Mumbai, and surrounding market clusters with reliable bulk deliveries.',
    delay: 100,
  },
  {
    name: 'Nashik',
    icon: 'fa-location-dot',
    badge: null,
    desc: 'Strong presence in Nashik region covering wholesale markets and connecting supply chains across North Maharashtra.',
    delay: 200,
  },
]

const COVERAGE = [
  'Pune', 'Mumbai', 'Nashik', 'Aurangabad',
  'Nagpur', 'Solapur', 'Kolhapur', 'Amravati',
  'Satara', 'Sangli', 'Thane', '+ All Districts',
]

const DELIVERY_INFO = [
  { icon: 'fa-bolt',           title: 'Express Delivery',    sub: 'Pune, Mumbai, Nashik — same day available' },
  { icon: 'fa-calendar-check', title: 'Scheduled Supply',    sub: 'Regular weekly/monthly supply contracts' },
  { icon: 'fa-boxes-stacked',  title: 'Bulk Orders Welcome', sub: 'Special rates for large quantity orders' },
]

/* Absolutely-positioned city pin + label on the image */
function CityPin({ left, top, primary, name, sub }) {
  return (
    <div style={{
      position: 'absolute', left, top,
      transform: 'translate(-50%, -50%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
      zIndex: 10,
    }}>
      <div className={`map-pin ${primary ? 'map-pin-gold' : 'map-pin-green'}`} />
      <div style={{
        background: primary ? 'rgba(212,175,55,.95)' : 'rgba(255,255,255,.95)',
        color: primary ? '#0F3B22' : '#0F3B22',
        fontSize: '.6rem', fontWeight: 700,
        padding: '2px 7px', borderRadius: 100,
        boxShadow: '0 2px 10px rgba(0,0,0,.15)',
        whiteSpace: 'nowrap',
        border: primary ? '1px solid rgba(212,175,55,.6)' : '1px solid rgba(42,122,80,.2)',
        letterSpacing: '.04em',
      }}>
        {name}
        {sub && <span style={{ marginLeft: 4, opacity: .75, fontWeight: 600 }}>· {sub}</span>}
      </div>
    </div>
  )
}

function MapImage() {
  /* Route paths in a 0-100 percentage coordinate space.
   * SVG uses preserveAspectRatio="none" so x% = image width%, y% = image height%.
   * Pune(19.3, 52.9) → Mumbai(8.1, 46.8): slight NW curve
   * Pune(19.3, 52.9) → Nashik(18.6, 32.7): almost straight north
   */
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Maharashtra map image — user places at /public/maharashtra-map.png */}
      <img
        src="/maharashtra-map.png"
        alt="Maharashtra state delivery network map"
        style={{ width: '100%', display: 'block', borderRadius: 12 }}
      />

      {/* Animated delivery route lines (SVG overlay) */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
          position: 'absolute', top: 0, left: 0,
          width: '100%', height: '100%',
          pointerEvents: 'none', overflow: 'visible',
        }}
      >
        {/* Pune → Mumbai */}
        <path
          d="M 19.3,52.9 C 15,51 11,49 8.1,46.8"
          stroke="#D4AF37" strokeWidth="0.6" fill="none"
          strokeLinecap="round" strokeDasharray="28" strokeDashoffset="28"
        >
          <animate attributeName="stroke-dashoffset" from="28" to="0" dur="1.8s" begin="0.6s" fill="freeze" />
        </path>

        {/* Pune → Nashik */}
        <path
          d="M 19.3,52.9 C 19.1,44 18.9,38 18.6,32.7"
          stroke="#D4AF37" strokeWidth="0.6" fill="none"
          strokeLinecap="round" strokeDasharray="28" strokeDashoffset="28"
        >
          <animate attributeName="stroke-dashoffset" from="28" to="0" dur="1.8s" begin="1.0s" fill="freeze" />
        </path>
      </svg>

      {/* City pins */}
      <CityPin left="19.3%" top="52.9%" primary name="Pune"   sub="Primary Hub" />
      <CityPin left="8.1%"  top="46.8%"          name="Mumbai" />
      <CityPin left="18.6%" top="32.7%"           name="Nashik" />
    </div>
  )
}

export default function MapSection() {
  return (
    <section
      id="map"
      className="py-24"
      style={{ background: 'linear-gradient(160deg, #EAF7EF 0%, #F3FAF6 55%, #F6FDF8 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-tag mb-4 justify-center" data-aos="fade-up">
            Service Area
          </div>
          <h2
            className="font-playfair text-4xl md:text-5xl font-bold mb-4"
            style={{ color: '#0F3B22' }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our Delivery Network Across{' '}
            <span style={{
              background: 'linear-gradient(135deg, #2A7A50, #4CAF74)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Maharashtra
            </span>
          </h2>
          <p style={{ color: '#3D6B52' }} className="max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="150">
            With a strong delivery network, we reach every corner of Maharashtra — from the Konkan coast to the Vidarbha heartland.
          </p>
        </div>

        {/* 3-column grid — same layout as original */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">

          {/* Left: City highlight cards */}
          <div className="flex flex-col gap-5">
            {CITIES.map(({ name, icon, badge, desc, delay }) => (
              <div key={name} className="why-card" data-aos="fade-right" data-aos-delay={200 + delay}>
                <div className="why-icon">
                  <i className={`fa-solid ${icon}`} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="font-bold text-lg" style={{ color: '#0F3B22' }}>{name}</div>
                    {badge && (
                      <span style={{
                        background: 'rgba(212,175,55,.14)', color: '#9A7B10',
                        fontSize: '.62rem', fontWeight: 700, padding: '2px 8px',
                        borderRadius: 100, border: '1px solid rgba(212,175,55,.35)',
                      }}>
                        {badge}
                      </span>
                    )}
                  </div>
                  <div className="text-sm mt-1" style={{ color: '#3D6B52' }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Center: Maharashtra map image with city overlays */}
          <div className="map-card flex flex-col items-center" data-aos="zoom-in" data-aos-delay="300">
            <div style={{
              color: '#3D6B52', fontSize: '.75rem', fontWeight: 600,
              letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 16,
            }}>
              Maharashtra — Live Delivery Network
            </div>

            <MapImage />

            {/* Legend */}
            <div className="flex items-center gap-5 mt-5 flex-wrap justify-center">
              <div className="flex items-center gap-2">
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#D4AF37', boxShadow: '0 0 8px rgba(212,175,55,.5)' }} />
                <span style={{ color: '#3D6B52', fontSize: '.72rem', fontWeight: 600 }}>Primary Hub</span>
              </div>
              <div className="flex items-center gap-2">
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#2A7A50' }} />
                <span style={{ color: '#3D6B52', fontSize: '.72rem', fontWeight: 600 }}>Delivery Cities</span>
              </div>
              <div className="flex items-center gap-2">
                <div style={{ width: 24, height: 2, background: '#D4AF37', borderRadius: 1 }} />
                <span style={{ color: '#3D6B52', fontSize: '.72rem', fontWeight: 600 }}>Delivery Routes</span>
              </div>
            </div>
          </div>

          {/* Right: Coverage + Delivery info */}
          <div className="flex flex-col gap-4" data-aos="fade-left" data-aos-delay="200">

            {/* Coverage zones */}
            <div className="rounded-2xl p-5" style={{ background: '#fff', border: '1px solid rgba(42,122,80,.12)', boxShadow: '0 4px 20px rgba(42,122,80,.06)' }}>
              <h3 className="font-bold text-base mb-3 flex items-center gap-2" style={{ color: '#0F3B22' }}>
                <i className="fa-solid fa-circle-check" style={{ color: '#2A7A50' }} /> Coverage Zones
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {COVERAGE.map(c => (
                  <div key={c} className="flex items-center gap-1.5" style={{ color: '#3D6B52', fontSize: '.75rem', padding: '3px 0' }}>
                    <i className="fa-solid fa-angle-right" style={{ color: '#D4AF37', fontSize: '.65rem' }} /> {c}
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery info */}
            <div className="rounded-2xl p-5" style={{ background: '#fff', border: '1px solid rgba(42,122,80,.12)', boxShadow: '0 4px 20px rgba(42,122,80,.06)' }}>
              <h3 className="font-bold text-base mb-3 flex items-center gap-2" style={{ color: '#0F3B22' }}>
                <i className="fa-solid fa-truck-fast" style={{ color: '#2A7A50' }} /> Delivery Info
              </h3>
              <div className="flex flex-col gap-3">
                {DELIVERY_INFO.map(({ icon, title, sub }) => (
                  <div key={title} className="flex items-start gap-3">
                    <div style={{
                      width: 28, height: 28, borderRadius: '50%',
                      background: '#EAF7EF', border: '1px solid rgba(42,122,80,.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <i className={`fa-solid ${icon}`} style={{ color: '#2A7A50', fontSize: '.7rem' }} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold" style={{ color: '#0F3B22' }}>{title}</div>
                      <div style={{ color: '#3D6B52', fontSize: '.75rem' }}>{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-order-modal'))}
              className="btn-gold flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-sm w-full"
              style={{ border: 'none', cursor: 'pointer' }}
            >
              <i className="fa-brands fa-whatsapp text-lg" /> Book Delivery in Your Area
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
