function Footer() {
  return (
    <footer className="footer">

      <div className="container">
        <div className="row">

          {/* Logo + About */}
          <div className="col-md-4">
            <h3 className="logo">🌍 TravelX</h3>
            <p>
              Explore the world with us. We provide best travel packages 
              and unforgettable experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li>Home</li>
              <li>About</li>
              <li>Destinations</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>📍 Huzurganj, India</p>
            <p>📧 travelx@gmail.com</p>
            <p>📞 +91 9876543210</p>

            {/* Social Icons */}
            <div className="social-icons">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-youtube"></i>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom text-center">
          <p>© 2026 TravelX | All Rights Reserved</p>
        </div>
      </div>

    </footer>
  )
}

export default Footer