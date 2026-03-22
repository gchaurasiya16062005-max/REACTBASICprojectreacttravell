import React from "react";

function About() {
  return (
    <div>

     
      <div
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://q-xx.bstatic.com/xdata/images/city/270x200/989794.jpg?k=dd01fe39cd97cb6064d9b0a0c8ab29bfaeb11f65dcb1b08571bf8e33e5bba4aa&o=')",
          height: "400px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "50px", fontWeight: "bold" }}>About Us</h1>
        <p style={{ fontSize: "20px" }}>Discover who we are</p>
      </div>

     
      <div className="container" style={{ minHeight: "1000px" }}>

        
        <div className="row mt-5 align-items-center">

          <div className="col-md-6">
            <h2>Welcome to TravelX 🌍</h2>
            <p className="mt-3">
              TravelX is your trusted travel partner. We help you explore the
              most beautiful destinations around the world with comfort and safety.
            </p>

            <p>
              Our mission is to provide unforgettable experiences with the best
              services, affordable prices, and top destinations.
            </p>
          </div>

          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
              className="img-fluid rounded shadow"
              style={{ height: "300px", objectFit: "cover", width: "100%" }}
            />
          </div>

        </div>

        <div className="row mt-5">

          <div className="col-md-4 mb-4">
            <div className="card p-3 shadow h-100 text-center">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                className="img-fluid rounded mb-3"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <h5>Best Destinations</h5>
              <p>Explore top places around the world.</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card p-3 shadow h-100 text-center">
              <img
                src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad"
                className="img-fluid rounded mb-3"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <h5>Affordable Prices</h5>
              <p>Budget-friendly travel packages.</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card p-3 shadow h-100 text-center">
              <img
                src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda"
                className="img-fluid rounded mb-3"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <h5>24/7 Support</h5>
              <p>Always here to help you anytime.</p>
            </div>
          </div>

        </div>

        
        <div className="mt-5 text-center">
          <h2>Why Choose Us?</h2>
          <p className="mt-3">
            We focus on customer satisfaction, quality services, and memorable
            travel experiences.
          </p>
        </div>

      </div>

    </div>
  );
}

export default About;