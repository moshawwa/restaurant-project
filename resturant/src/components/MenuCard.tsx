const MenuCard = () => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="../src/images/side-view-fried-chicken-pieces-with-lemon-french-fries-sauce-wood-plate_176474-3075.avif" // You can replace this with a dynamic image URL
          className="card-img-top"
          alt="Card image"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default MenuCard;
