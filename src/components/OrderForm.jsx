import { useState } from 'react'
import { saveToSheet } from './orderSheet'

const INFO_ITEMS = [
  { icon: 'fa-brands fa-whatsapp',  title: 'Instant WhatsApp Confirmation', sub: 'Your order details auto-filled in WhatsApp' },
  { icon: 'fa-solid fa-clock',      title: 'Quick Response Time',           sub: 'We respond within minutes during business hours' },
  { icon: 'fa-solid fa-shield-halved', title: 'Secure & Reliable',          sub: 'Trusted by hundreds of customers across Maharashtra' },
]

export default function OrderForm() {
  const [form, setForm] = useState({ name: '', phone: '', location: '', qty: '', msg: '' })

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, phone, location, qty, msg } = form
    if (!name || !phone || !location || !qty) return
    saveToSheet({ name, phone, location, qty, msg: msg || '' })
    const message =
      `Hello, I want to order live broiler chicken:\n\n` +
      `Name: ${name}\nPhone: ${phone}\nLocation: ${location}\n` +
      `Quantity: ${qty} birds\nMessage: ${msg || 'No additional message'}`
    window.open(`https://wa.me/919623230636?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section
      id="order"
      className="py-24"
      style={{ background: 'linear-gradient(180deg, #F6FDF8 0%, #EAF7EF 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Info */}
          <div data-aos="fade-right">
            <div className="section-tag mb-4">Book Your Order</div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0F3B22' }}>
              Order Fresh Live<br />
              <span style={{
                background: 'linear-gradient(135deg, #2A7A50, #4CAF74)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                Broiler Chicken
              </span>{' '}Now
            </h2>
            <p className="mb-8 leading-relaxed" style={{ color: '#3D6B52' }}>
              Fill the form and we'll redirect you to WhatsApp with your order details pre-filled. Our team will confirm your order and delivery time within minutes.
            </p>
            <div className="flex flex-col gap-4">
              {INFO_ITEMS.map(({ icon, title, sub }) => (
                <div key={title} className="flex items-center gap-3">
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                    background: '#fff', border: '1px solid rgba(42,122,80,.2)',
                    boxShadow: '0 4px 12px rgba(42,122,80,.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <i className={icon} style={{ color: '#2A7A50', fontSize: '1rem' }} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: '#0F3B22' }}>{title}</div>
                    <div style={{ color: '#3D6B52', fontSize: '.75rem' }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <div data-aos="fade-left" data-aos-delay="200">
            <div
              className="rounded-3xl p-8"
              style={{
                background: '#fff',
                border: '1px solid rgba(42,122,80,.12)',
                boxShadow: '0 20px 60px rgba(42,122,80,.1)',
              }}
            >
              <h3 className="font-bold text-xl mb-6 flex items-center gap-2" style={{ color: '#0F3B22' }}>
                <i className="fa-solid fa-basket-shopping" style={{ color: '#2A7A50' }} />
                Place Your Order
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label" htmlFor="name">Your Name *</label>
                    <input id="name" name="name" type="text" className="form-input"
                      placeholder="Full Name" value={form.name} onChange={handleChange} required />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="phone">Phone Number *</label>
                    <input id="phone" name="phone" type="tel" className="form-input"
                      placeholder="9XXXXXXXXX" value={form.phone} onChange={handleChange} required />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label" htmlFor="location">Location / City *</label>
                    <input id="location" name="location" type="text" className="form-input"
                      placeholder="Pune / Mumbai..." value={form.location} onChange={handleChange} required />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="qty">Quantity (Birds) *</label>
                    <input id="qty" name="qty" type="number" className="form-input"
                      placeholder="e.g. 50" min="1" value={form.qty} onChange={handleChange} required />
                  </div>
                </div>

                <div>
                  <label className="form-label" htmlFor="msg">Additional Message</label>
                  <textarea id="msg" name="msg" className="form-input" rows={3}
                    placeholder="Any specific requirements, delivery date, etc."
                    value={form.msg} onChange={handleChange} />
                </div>

                <button
                  type="submit"
                  className="btn-gold flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-base mt-1"
                  style={{ boxShadow: '0 8px 24px rgba(212,175,55,.3)' }}
                >
                  <i className="fa-brands fa-whatsapp text-xl" />
                  Send Order via WhatsApp
                </button>

                <p style={{ color: 'rgba(42,122,80,.5)', fontSize: '.75rem', textAlign: 'center' }}>
                  Clicking the button will open WhatsApp with your order details pre-filled.
                </p>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
