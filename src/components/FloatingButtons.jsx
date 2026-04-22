export default function FloatingButtons() {
  return (
    <>
      <button
        onClick={() => window.dispatchEvent(new CustomEvent('open-order-modal'))}
        className="float-btn float-wa"
        title="Place Order"
        style={{ border: 'none', cursor: 'pointer' }}
      >
        <i className="fa-brands fa-whatsapp" />
      </button>
      <a
        href="tel:+919623230636"
        className="float-btn float-call"
        title="Call Now"
      >
        <i className="fa-solid fa-phone" />
      </a>
    </>
  )
}
