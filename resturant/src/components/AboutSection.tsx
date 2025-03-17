
const AboutSection = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <div className="card shadow-sm p-4">
            <h2 className="text-center mb-4">About Us</h2>
            <div className="row align-items-center">
              <div className="col-md-6 mb-4 mb-md-0">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Restaurant Interior"
                  className="img-fluid rounded shadow-sm"
                  style={{ objectFit: 'cover', width: '100%', height: '400px' }}
                />
              </div>
              <div className="col-md-6">
                <div className="ps-md-4">
                  <p className="lead mb-4">
                    At Delicious Bites, we serve the freshest and most flavorful dishes,
                    crafted with passion and love. Our commitment to quality and exceptional
                    service makes every visit memorable.
                  </p>
                  <div className="d-flex align-items-center mb-3">
                    <i className="fas fa-utensils text-danger me-3 fa-lg"></i>
                    <span className="h6 mb-0">Authentic cuisine made with love</span>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <i className="fas fa-clock text-danger me-3 fa-lg"></i>
                    <span className="h6 mb-0">Open 7 days a week</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fas fa-heart text-danger me-3 fa-lg"></i>
                    <span className="h6 mb-0">Family-friendly atmosphere</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
