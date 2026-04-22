const CARDS = [
  {
    icon: 'fa-phone',
    title: 'Phone',
    content: (
      <>
        <a href="tel:+919623230636" className="block text-sm font-medium transition-colors" style={{ color: '#3D6B52' }}>+91 9623230636</a>
        <a href="tel:+917498964729" className="block text-sm font-medium transition-colors mt-1" style={{ color: '#3D6B52' }}>+91 7498964729</a>
      </>
    ),
    delay: 100,
  },
  {
    icon: 'fa-brands fa-whatsapp',
    title: 'WhatsApp',
    content: (
      <>
        <span className="block text-sm font-medium" style={{ color: '#3D6B52' }}>9623230636</span>
        <div className="mt-2">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-order-modal'))}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(37,211,102,.1)', color: '#128C7E', border: 'none', cursor: 'pointer' }}
          >
            <i className="fa-solid fa-circle-dot text-xs" style={{ color: '#25D366' }} /> Order Now
          </button>
        </div>
      </>
    ),
    delay: 150,
  },
  {
    icon: 'fa-envelope',
    title: 'Email',
    content: (
      <a href="mailto:nandapoultryfarm1@gmail.com" className="block text-sm break-all" style={{ color: '#3D6B52' }}>
        nandapoultryfarm1<br />@gmail.com
      </a>
    ),
    delay: 200,
  },
  {
    icon: 'fa-location-dot',
    title: 'Address',
    content: (
      <p className="text-sm leading-relaxed" style={{ color: '#3D6B52' }}>
        Gat No. 1638, Office No. 232,<br />
        The Grand Central,<br />
        Chakan Pune-Nashik Highway,<br />
        Maharashtra — 410501
      </p>
    ),
    delay: 250,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <div className="section-tag mb-4 justify-center" data-aos="fade-up">Contact Us</div>
          <h2
            className="font-playfair text-4xl md:text-5xl font-bold mb-4"
            style={{ color: '#0F3B22' }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Get In Touch
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: '#3D6B52' }} data-aos="fade-up" data-aos-delay="150">
            Reach us directly for orders, bulk inquiries, or any queries about our live broiler chicken supply.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {CARDS.map(({ icon, title, content, delay }) => (
            <div key={title} className="contact-card" data-aos="fade-up" data-aos-delay={delay}>
              <div className="contact-icon-wrap">
                <i className={`fa-solid ${icon}`} />
              </div>
              <h3 className="font-bold text-base mb-2" style={{ color: '#0F3B22' }}>{title}</h3>
              {content}
            </div>
          ))}
        </div>

        {/* Map Embed */}
        <div
          className="rounded-3xl overflow-hidden border"
          style={{ height: 360, borderColor: 'rgba(42,122,80,.1)', boxShadow: '0 12px 40px rgba(42,122,80,.08)' }}
          data-aos="fade-up"
        >
          <iframe
            title="Nanda Poultry Farm Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.8938281826!2d73.8583!3d18.7604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9f4a7c5d7b1%3A0x0!2sChakan%2C%20Pune-Nashik%20Highway%2C%20Maharashtra%20410501!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%" height="100%"
            style={{ border: 0 }} allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  )
}
