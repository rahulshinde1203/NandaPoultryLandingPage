export default function Loader({ loaded }) {
  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'linear-gradient(135deg, #EAF7EF 0%, #F6FDF8 100%)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        transition: 'opacity .6s ease, visibility .6s ease',
        opacity: loaded ? 0 : 1,
        visibility: loaded ? 'hidden' : 'visible',
      }}
    >
      <div className="loader-ring mb-5" />
      <div style={{
        fontFamily: "'Playfair Display',serif",
        color: '#2A7A50', fontSize: '1.5rem', fontWeight: 700, letterSpacing: '.05em',
      }}>
        Nanda Poultry Farm
      </div>
      <div style={{ color: 'rgba(42,122,80,.5)', fontSize: '.8rem', marginTop: 6, letterSpacing: '.12em' }}>
        LOADING…
      </div>
    </div>
  )
}
