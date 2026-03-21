function Home() {
  return (
    <div>

      {/* Banner */}
      <div className="bg-dark text-white text-center p-5">
        <h1>Explore The World 🌍</h1>
        <p>Travel with comfort and happiness</p>
      </div>

      {/* Image Section */}
    <div className="container mt-4">
  <div className="row g-4">

    {/* Card 1 */}
    <div className="col-md-4 col-sm-6">
      <div className="card">
        <img 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800" 
          className="card-img-top rounded"
        />
        <div className="card-body">
          <h5 className="card-title">Sunny Beach</h5>
          <p className="card-text">Relax on golden sands and enjoy the sunset.</p>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="col-md-4 col-sm-6">
      <div className="card">
        <img 
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800"
          className="card-img-top rounded"
        />
        <div className="card-body">
          <h5 className="card-title">Majestic Mountains</h5>
          <p className="card-text">Explore breathtaking peaks and serene valleys.</p>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="col-md-4 col-sm-6">
      <div className="card">
        <img 
          src="https://images.unsplash.com/photo-1443890923422-7819ed4101c0?w=800" 
          className="card-img-top rounded"
        />
        <div className="card-body">
          <h5 className="card-title">City Lights</h5>
          <p className="card-text">Experience the vibrant nightlife of the city.</p>
        </div>
      </div>
    </div>

  </div>

  {/* Second Row */}
  <div className="row g-4 mt-2">

    {/* Card 4 */}
    <div className="col-md-4 col-sm-6">
      <div className="card">
        <img 
          src="https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800" 
          className="card-img-top rounded"
        />
        <div className="card-body">
          <h5 className="card-title">Historic Streets</h5>
          <p className="card-text">Walk through charming old streets with history.</p>
        </div>
      </div>
    </div>

    {/* Card 5 */}
    <div className="col-md-4 col-sm-6">
      <div className="card">
        <img 
          src="https://images.unsplash.com/photo-1468436139062-f60a71c5c892?w=800" 
          className="card-img-top rounded"
        />
        <div className="card-body">
          <h5 className="card-title">Adventure Trails</h5>
          <p className="card-text">Hike and explore hidden nature trails.</p>
        </div>
      </div>
    </div>

    {/* Card 6 */}
    <div className="col-md-4 col-sm-6">
      <div className="card">
        <img 
          src="https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?w=800" 
          className="card-img-top rounded"
        />
        <div className="card-body">
          <h5 className="card-title">Iconic Landmarks</h5>
          <p className="card-text">Visit world-famous landmarks and monuments.</p>
        </div>
      </div>
    </div>

  </div>
</div>
      <br />
      <br />

    </div>
  )
}

export default Home