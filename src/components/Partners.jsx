const PARTNERS = [
  { abbr: 'V',  name: "Venky's India",  type: 'Poultry Brand',   bg: 'linear-gradient(135deg,#1a237e,#283593)', color: '#fff', delay: 100 },
  { abbr: 'S',  name: 'Suguna Foods',   type: 'Poultry Brand',   bg: 'linear-gradient(135deg,#e65100,#f57c00)', color: '#fff', delay: 150 },
  { abbr: 'B',  name: 'Baramati Agro',  type: 'Agro Partner',    bg: 'linear-gradient(135deg,#2A7A50,#3D9B68)', color: '#fff', delay: 200 },
  { abbr: 'A',  name: 'Aanand Agro',    type: 'Agro Partner',    bg: 'linear-gradient(135deg,#4a148c,#6a1b9a)', color: '#fff', delay: 250 },
  { abbr: 'BF', name: 'Biofeed Pvt Ltd',type: 'Feed Supplier',   bg: 'linear-gradient(135deg,#1b5e20,#2e7d32)', color: '#fff', delay: 300 },
  { abbr: 'SV', name: 'Siddhivinayak',  type: 'Supply Partner',  bg: 'linear-gradient(135deg,#B8960C,#D4AF37)', color: '#fff', delay: 350 },
]

export default function Partners() {
  return (
    <section id="partners" className="py-24" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <div className="section-tag mb-4 justify-center" data-aos="fade-up">Trusted Partners</div>
          <h2
            className="font-playfair text-4xl md:text-5xl font-bold mb-4"
            style={{ color: '#0F3B22' }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our Supplier &amp; Brand Network
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: '#3D6B52' }} data-aos="fade-up" data-aos-delay="150">
            We work with Maharashtra's most respected poultry brands and agro companies to ensure the finest quality live broiler birds.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {PARTNERS.map(({ abbr, name, type, bg, color, delay }) => (
            <div key={name} className="partner-card" data-aos="zoom-in" data-aos-delay={delay}>
              <div style={{ width: 48, height: 48, background: bg, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color, fontWeight: 800, fontSize: '.85rem', fontFamily: "'Playfair Display',serif" }}>{abbr}</span>
              </div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: '1.05rem', color: '#0F3B22', textAlign: 'center', lineHeight: 1.3 }}>
                {name}
              </div>
              <div style={{ fontSize: '.72rem', color: '#3D6B52', letterSpacing: '.06em' }}>{type}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10" data-aos="fade-up">
          <p style={{ color: '#6B9E7A', fontSize: '.875rem' }}>
            Collaborating with Maharashtra's leading poultry and agro businesses for quality supply
          </p>
        </div>

      </div>
    </section>
  )
}
