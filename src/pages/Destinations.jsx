function Destinations() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Top Destinations</h2>

      <div className="row">

        <div className="col-md-4">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" className="card-img-top"/>
            <div className="card-body">
              <h5>Paris</h5>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" className="card-img-top"/>
            <div className="card-body">
              <h5>Maldives</h5>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" className="card-img-top"/>
            <div className="card-body">
              <h5>Dubai</h5>
            
            </div>
          </div>
        </div>

      </div>
      <br />
    </div>
    
    
  )
}

export default Destinations