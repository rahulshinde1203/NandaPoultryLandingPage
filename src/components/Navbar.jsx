import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { id: 'about',    label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'map',      label: 'Service Area' },
  { id: 'why',      label: 'Why Us' },
  { id: 'order',    label: 'Order' },
  { id: 'contact',  label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      let current = ''
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 110) current = s.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: '#0F3B22',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,.08)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,.25)' : 'none',
        transition: 'box-shadow .3s, border-color .3s',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between" style={{ height: 68 }}>

          {/* Logo */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-3"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <img
              src="/logo.png"
              alt="Nanda Poultry Farm"
              style={{ height: 54, width: 'auto', display: 'block' }}
            />
            <div style={{ textAlign: 'left' }}>
              <div style={{
                fontFamily: "'Playfair Display',serif",
                color: '#fff', fontWeight: 700, fontSize: '1.05rem', lineHeight: 1.15,
              }}>
                Nanda Poultry Farm
              </div>
              <div style={{ color: '#6DC48A', fontSize: '.6rem', letterSpacing: '.12em', fontWeight: 600 }}>
                LIVE BROILER CHICKEN
              </div>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`nav-link${activeSection === id ? ' active' : ''}`}
                style={{ background: 'none', border: 'none' }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-order-modal'))}
              className="hidden sm:flex btn-gold items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold"
              style={{ boxShadow: '0 4px 14px rgba(212,175,55,.3)', border: 'none', cursor: 'pointer' }}
            >
              <i className="fa-brands fa-whatsapp" /> Order Now
            </button>
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(o => !o)}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <span style={{ display: 'block', width: 22, height: 2, background: '#fff', borderRadius: 2, transition: 'transform .3s', transform: menuOpen ? 'translateY(8px) rotate(45deg)' : 'none' }} />
              <span style={{ display: 'block', width: 22, height: 2, background: '#fff', borderRadius: 2, transition: 'opacity .3s', opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: 'block', width: 22, height: 2, background: '#fff', borderRadius: 2, transition: 'transform .3s', transform: menuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none' }} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
          <div className="pb-4 flex flex-col gap-1 border-t mt-1" style={{ borderColor: 'rgba(255,255,255,.12)' }}>
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="nav-link block text-left px-2 py-3 w-full"
                style={{ background: 'none', border: 'none' }}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-order-modal'))}
              className="btn-gold flex items-center justify-center gap-2 px-4 py-3 rounded-xl mt-2 text-sm font-bold w-full"
              style={{ border: 'none', cursor: 'pointer' }}
            >
              <i className="fa-brands fa-whatsapp" /> Order Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
