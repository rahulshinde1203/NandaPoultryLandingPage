import { useState, useEffect } from 'react'
import { saveToSheet } from './orderSheet'

export default function OrderModal() {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', location: '', qty: '', msg: '' })

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('open-order-modal', handler)
    return () => window.removeEventListener('open-order-modal', handler)
  }, [])

  useEffect(() => {
    if (!open) return
    const handler = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open])

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
    setOpen(false)
    setForm({ name: '', phone: '', location: '', qty: '', msg: '' })
  }

  if (!open) return null

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'rgba(0,0,0,.6)', backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 16,
      }}
      onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
    >
      <div style={{
        background: '#fff', borderRadius: 24, width: '100%', maxWidth: 520,
        maxHeight: '90vh', overflowY: 'auto',
        padding: 32, position: 'relative',
        boxShadow: '0 24px 80px rgba(0,0,0,.3)',
        animation: 'modalSlideIn .3s ease-out',
      }}>

        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          style={{
            position: 'absolute', top: 16, right: 16,
            width: 32, height: 32, borderRadius: '50%',
            background: 'rgba(15,59,34,.08)', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#0F3B22', fontSize: '1rem',
          }}
        >
          <i className="fa-solid fa-xmark" />
        </button>

        <h3 className="font-bold text-xl mb-1 flex items-center gap-2" style={{ color: '#0F3B22' }}>
          <i className="fa-solid fa-basket-shopping" style={{ color: '#2A7A50' }} />
          Place Your Order
        </h3>
        <p style={{ color: '#3D6B52', fontSize: '.82rem', marginBottom: 24 }}>
          Fill the details and we'll open WhatsApp with your order pre-filled.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="form-label" htmlFor="m-name">Your Name *</label>
              <input id="m-name" name="name" type="text" className="form-input"
                placeholder="Full Name" value={form.name} onChange={handleChange} required />
            </div>
            <div>
              <label className="form-label" htmlFor="m-phone">Phone Number *</label>
              <input id="m-phone" name="phone" type="tel" className="form-input"
                placeholder="9XXXXXXXXX" value={form.phone} onChange={handleChange} required />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="form-label" htmlFor="m-location">Location / City *</label>
              <input id="m-location" name="location" type="text" className="form-input"
                placeholder="Pune / Mumbai..." value={form.location} onChange={handleChange} required />
            </div>
            <div>
              <label className="form-label" htmlFor="m-qty">Quantity (Birds) *</label>
              <input id="m-qty" name="qty" type="number" className="form-input"
                placeholder="e.g. 50" min="1" value={form.qty} onChange={handleChange} required />
            </div>
          </div>

          <div>
            <label className="form-label" htmlFor="m-msg">Additional Message</label>
            <textarea id="m-msg" name="msg" className="form-input" rows={3}
              placeholder="Any specific requirements, delivery date, etc."
              value={form.msg} onChange={handleChange} />
          </div>

          <button
            type="submit"
            className="btn-gold flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-base"
            style={{ boxShadow: '0 8px 24px rgba(212,175,55,.3)' }}
          >
            <i className="fa-brands fa-whatsapp text-xl" />
            Send Order via WhatsApp
          </button>

          <p style={{ color: 'rgba(42,122,80,.5)', fontSize: '.72rem', textAlign: 'center' }}>
            Clicking above opens WhatsApp with your order details pre-filled.
          </p>

        </form>
      </div>
    </div>
  )
}
