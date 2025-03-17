type MenuItemProps = {
  name: string;
  description: string;
  price: number;
  image: string;
};

const MenuItem = ({ name, description, price, image }: MenuItemProps) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm">
        <img src={image} alt={name} className="card-img-top" />
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="text-danger fw-bold">${price.toFixed(2)}</p>
          <button className="btn btn-danger w-100">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
