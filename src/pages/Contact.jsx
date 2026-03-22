import React from "react";

function Contact() {
  return (
    <div className="container-fluid p-0">

      {/* Banner */}
      <div

      >

      </div>


      <div className="container" style={{ minHeight: "1000px" }}>

        <div className="row mt-5">

          <div className="col-md-6">

            
            <input className="form-control mb-3" placeholder="Your Name" />
            <input className="form-control mb-3" placeholder="Your Email" />
            <textarea
              className="form-control mb-3"
              placeholder="Your Message"
            ></textarea>

            <button className="btn btn-primary mb-3">
              Send Message
            </button>


            <a
              href="https://wa.me/919329872768?text=Hello%20I%20want%20to%20plan%20a%20trip"
              className="btn btn-warning d-block " style={{ borderRadius: "7px" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now on WhatsApp
            </a>
          </div>


          <div className="col-md-6">


            <div className="card p-3 mb-3 shadow">
              <h5>📍 Address</h5>
              <p>Gwalior, Madhya Pradesh, India</p>
            </div>

            <div className="card p-3 mb-3 shadow">
              <h5>📞 Phone</h5>
              <p>+91 9329872768</p>
            </div>

            <div className="card p-3 mb-3 shadow">
              <h5>✉️ Email</h5>
              <p>travel@gmail.com</p>
            </div>
          </div>

        </div>


        <div className="mt-5">
          <h2 className="text-center mb-3">Our Location</h2>

          <iframe
            title="map"
            src="https://maps.google.com/maps?q=bhopal&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </div>
  );
}

export default Contact;