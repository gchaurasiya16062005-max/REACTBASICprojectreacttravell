function Contact() {
  return (
    <div className="container mt-4">
      <h2>Contact Us</h2>
      <form>
        <input className="form-control mb-2" placeholder="Name" />
        <input className="form-control mb-2" placeholder="Email" />
        <textarea className="form-control mb-2" placeholder="Message"></textarea>
        <button className="btn btn-primary">Send</button>
      </form>
      <a
        href="https://wa.me/919329872768?text=Hello%20I%20want%20to%20order"
        className="btn btn-warning mt-3 mb-3 "style={{borderRadius:"7px"}}
        target="_blank"
        rel="noopener noreferrer"
      >
      Book Now on WhatsApp
      </a>
    </div>
  )
}
export default Contact