const QUICK_LINKS = [
  { id: 'about',    label: 'About Us' },
  { id: 'services', label: 'Our Services' },
  { id: 'map',      label: 'Service Area' },
  { id: 'partners', label: 'Our Partners' },
  { id: 'why',      label: 'Why Choose Us' },
  { id: 'order',    label: 'Book Order' },
]

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{ background: 'linear-gradient(180deg, #1E5C3A 0%, #0F3B22 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <div style={{
                display: 'inline-block',
                background: '#fff',
                borderRadius: 14,
                padding: '6px 10px',
                boxShadow: '0 4px 16px rgba(0,0,0,.18)',
              }}>
                <img
                  src="/logo.png"
                  alt="Nanda Poultry Farm"
                  style={{ height: 60, width: 'auto', display: 'block' }}
                />
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-6" style={{ color: 'rgba(255,255,255,.55)' }}>
              Maharashtra's trusted supplier of fresh live broiler chicken birds. Serving Pune, Mumbai, Nashik and all districts with fast, reliable delivery.
            </p>
            <div className="flex gap-3">
              <button onClick={() => window.dispatchEvent(new CustomEvent('open-order-modal'))}
                 style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(37,211,102,.15)', color: '#25D366', border: '1px solid rgba(37,211,102,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .25s', cursor: 'pointer' }}>
                <i className="fa-brands fa-whatsapp text-sm" />
              </button>
              <a href="tel:+919623230636"
                 style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(212,175,55,.15)', color: '#D4AF37', border: '1px solid rgba(212,175,55,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="fa-solid fa-phone text-sm" />
              </a>
              <a href="mailto:nandapoultryfarm1@gmail.com"
                 style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(255,255,255,.08)', color: 'rgba(255,255,255,.6)', border: '1px solid rgba(255,255,255,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="fa-solid fa-envelope text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#6DC48A', fontWeight: 700, fontSize: '.85rem', letterSpacing: '.08em', marginBottom: 16 }}>
              QUICK LINKS
            </h4>
            <div className="flex flex-col gap-2.5">
              {QUICK_LINKS.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="footer-link text-left"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#6DC48A', fontWeight: 700, fontSize: '.85rem', letterSpacing: '.08em', marginBottom: 16 }}>
              CONTACT
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <i className="fa-solid fa-phone text-xs mt-1" style={{ color: '#6DC48A' }} />
                <div>
                  <a href="tel:+919623230636" className="footer-link block">9623230636</a>
                  <a href="tel:+917498964729" className="footer-link block">7498964729</a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <i className="fa-solid fa-envelope text-xs mt-1" style={{ color: '#6DC48A' }} />
                <a href="mailto:nandapoultryfarm1@gmail.com" className="footer-link break-all text-xs">
                  nandapoultryfarm1@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <i className="fa-solid fa-location-dot text-xs mt-1" style={{ color: '#6DC48A', flexShrink: 0 }} />
                <span style={{ color: 'rgba(255,255,255,.45)', fontSize: '.75rem', lineHeight: 1.6 }}>
                  Gat No. 1638, Office No. 232,<br />
                  The Grand Central, Chakan<br />
                  Pune-Nashik Highway, MH — 410501
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(109,196,138,.25), transparent)', marginBottom: 24 }} />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p style={{ color: 'rgba(255,255,255,.3)', fontSize: '.75rem', textAlign: 'center' }}>
            &copy; {new Date().getFullYear()} Nanda Poultry Farm. All rights reserved.
          </p>
          <p style={{ color: 'rgba(255,255,255,.2)', fontSize: '.75rem' }}>
            Live Broiler Chicken Supply | Maharashtra | Pune | Mumbai | Nashik
          </p>
        </div>

      </div>
    </footer>
  )
}
