function Services() {
  return (
    <div className="container-fluid p-0">

      {/* Banner Section */}
      <div
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
          height: "400px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "40px",
          fontWeight: "bold"
        }}
      >

      </div>

    
      <div className="container" style={{ minHeight: "1000px" }}>

        
        <h2 className="mt-5 text-center">What We Offer</h2>

        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card p-3 shadow">
              <h4>✈️ Flight Booking</h4>
              <p>Get best deals on domestic and international flights.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3 shadow">
              <h4>🏨 Hotel Booking</h4>
              <p>Affordable and luxury hotels at best prices.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3 shadow">
              <h4>🧭 Tour Guide</h4>
              <p>Professional guides for a better travel experience.</p>
            </div>
          </div>
        </div>

        <h2 className="mt-5 text-center">Popular Packages</h2>

        <div className="row mt-4">

          <div className="col-md-4">
            <div className="card shadow">
              <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" className="card-img-top" />
              <div className="card-body">
                <h5>Goa Trip</h5>
                <p>3 Days / 2 Nights</p>
                <button className="btn btn-success">Book Now</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow">
              <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff" className="card-img-top" />
              <div className="card-body">
                <h5>Manali Tour</h5>
                <p>5 Days / 4 Nights</p>
                <button className="btn btn-success">Book Now</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow">
              <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" className="card-img-top" />
              <div className="card-body">
                <h5>Rajasthan Tour</h5>
                <p>6 Days / 5 Nights</p>
                <button className="btn btn-success">Book Now</button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Services