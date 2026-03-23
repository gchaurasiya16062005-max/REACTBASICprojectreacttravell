import React, { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message Sent Successfully 🚀");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong ❌");
      }
    } catch (error) {
      console.log(error);
      alert("Server error ❌");
    }
  };

  return (
    <div className="container-fluid p-0">

      
      <div></div>

      <div className="container" style={{ minHeight: "1000px" }}>

        <div className="row mt-5">

         
          <div className="col-md-6">

            <form onSubmit={handleSubmit}>

              <input
                className="form-control mb-3"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                className="form-control mb-3"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <textarea
                className="form-control mb-3"
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button className="btn btn-primary mb-3" type="submit">
                Send Message
              </button>

            </form>

           
            <a
              href="https://wa.me/919329872768?text=Hello%20I%20want%20to%20plan%20a%20trip"
              className="btn btn-warning d-block"
              style={{ borderRadius: "7px" }}
              target="_blank"
              rel="noopener noreferrer"
            >
             🚀 Book Your Trip Now
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