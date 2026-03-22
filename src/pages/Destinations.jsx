function Destinations() {
  return (
    <div className="container-fluid p-0">

     
      <div
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
          height: "600px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "40px",
          fontWeight: "bold",
        }}
      >
        </div>

      
      <div className="container" style={{ minHeight: "1000px" }}>

        <h2 className="text-center mt-5 mb-4">Explore Top Places</h2>

        <div className="row">

         
          <div className="col-12 col-md-4 mb-4">
            <div className="card shadow h-100">
              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h5>Paris</h5>
                <p>City of love and beautiful architecture.</p>
                <button className="btn btn-success mt-2">
                  Explore
                </button>
              </div>
            </div>
          </div>

          
          <div className="col-12 col-md-4 mb-4">
            <div className="card shadow h-100">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h5>Maldives</h5>
                <p>Crystal clear water and luxury resorts.</p>
                <button className="btn btn-success mt-2">
                  Explore
                </button>
              </div>
            </div>
          </div>

          
          <div className="col-12 col-md-4 mb-4">
            <div className="card shadow h-100">
              <img
                src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad"
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h5>Dubai</h5>
                <p>Luxury lifestyle and modern city.</p>
                <button className="btn btn-success mt-2">
                  Explore
                </button>
              </div>
            </div>
          </div>

        </div>

        
        <h2 className="text-center mt-5 mb-4">More Destinations</h2>

        <div className="row">

          
          <div className="col-12 col-md-4 mb-4">
            <div className="card shadow h-100">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h5>Goa</h5>
                <p>Best beaches and nightlife in India.</p>
                <button className="btn btn-success mt-2">
                  Explore
                </button>
              </div>
            </div>
          </div>

        <div className="col-12 col-md-4 mb-4">
            <div className="card shadow h-100">
              <img
                src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda"
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h5>Mountains</h5>
                <p>Peaceful nature and adventure trips.</p>
                <button className="btn btn-success mt-2">
                  Explore
                </button>
              </div>
            </div>
          </div>

          
          <div className="col-12 col-md-4 mb-4">
            <div className="card shadow h-100">
              <img
                src="https://images.unsplash.com/photo-1493558103817-58b2924bce98"
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h5>Beach</h5>
                <p>Relax and enjoy beautiful sunsets.</p>
                <button className="btn btn-success mt-2">
                  Explore
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Destinations