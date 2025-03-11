// src/components/Menu.tsx

const Menu = () => {
  return (
    <section className="menu py-5">
      <div className="container">
        <h2 className="text-center">Our Menu</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src="/images/dish1.jpg"
                className="card-img-top"
                alt="Dish 1"
              />
              <div className="card-body">
                <h5 className="card-title">Dish 1</h5>
                <p className="card-text">
                  A delicious meal with fresh ingredients
                </p>
                <p className="card-text">$12.99</p>
              </div>
            </div>
          </div>
          {/* Add more dishes as needed */}
        </div>
      </div>
    </section>
  );
};

export default Menu;
