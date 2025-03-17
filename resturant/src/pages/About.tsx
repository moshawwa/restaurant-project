

const About = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <h2 className="text-center mb-4">About Our Restaurant</h2>
          
          {/* Hero Section */}
          <div className="card shadow-sm p-4 mb-5">
            <div className="row align-items-center">
              <div className="col-md-6">
                <p className="lead mb-4">
                  Welcome to our restaurant, where culinary excellence meets warm hospitality. 
                  We take pride in serving delicious meals made with the finest ingredients.
                </p>
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-star text-warning me-2"></i>
                  <span className="h5 mb-0">Award-winning cuisine</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-users text-warning me-2"></i>
                  <span className="h5 mb-0">Family-friendly atmosphere</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fas fa-leaf text-warning me-2"></i>
                  <span className="h5 mb-0">Fresh, local ingredients</span>
                </div>
              </div>
              <div className="col-md-6">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Restaurant Interior" 
                  className="img-fluid rounded shadow-sm"
                  style={{ objectFit: 'cover', height: '300px', width: '100%' }}
                />
              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h4 className="card-title mb-3">Our Story</h4>
                  <p className="card-text">
                    Founded in 2024, our restaurant has been committed to providing an exceptional 
                    dining experience. Our chefs combine traditional recipes with modern culinary 
                    techniques to create unforgettable dishes that celebrate both innovation and tradition.
                  </p>
                  <p className="card-text">
                    What started as a small family kitchen has grown into one of the city's most 
                    beloved dining destinations, thanks to our dedication to quality and service.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h4 className="card-title mb-3">Our Mission</h4>
                  <p className="card-text">
                    We strive to create a welcoming atmosphere where friends and family can gather 
                    to enjoy exceptional food and create lasting memories. Our commitment to quality 
                    and service is unwavering.
                  </p>
                  <p className="card-text">
                    Every dish we serve is crafted with passion, using time-honored recipes and 
                    techniques that bring out the best flavors in our carefully selected ingredients.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm p-4">
            <h4 className="text-center mb-4">Quality Commitment</h4>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="text-center">
                  <i className="fas fa-leaf fa-2x text-success mb-3"></i>
                  <h5>Fresh Ingredients</h5>
                  <p>Locally sourced, seasonal produce and ingredients</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center">
                  <i className="fas fa-utensils fa-2x text-danger mb-3"></i>
                  <h5>Expert Chefs</h5>
                  <p>Professionally trained culinary team</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center">
                  <i className="fas fa-heart fa-2x text-primary mb-3"></i>
                  <h5>Made with Love</h5>
                  <p>Every dish crafted with care and attention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 