
import {  Row, Col, Card } from "react-bootstrap";
import grillImg from "../images/Steak.png";
import pastaImg from "../images/Chicken Parmesan.png";
import burgerImg from "../images/Fish and Chips.png";

const featuredDishes = [
  {
    id: 1,
    name: "Grilled Steak",
    img: grillImg,
    disk: "Grilled steak with mashed potatoes",
    price: "$25.69",
  },
  {
    id: 2,
    name: "Chicken Parmesan",
    img: pastaImg,
    disk: "chicken topped with marinara and cheese",
    price: "$12.99",
  },
  {
    id: 3,
    name: "Fish and Chips",
    img: burgerImg,
    disk: "Crispy battered fish with fries",
    price: "$13.99",
  },
];

const FeaturedDishes = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <div className="card shadow-sm p-4">
            <h2 className="text-center mb-4">Best Sellers</h2>
            <Row>
              {featuredDishes.map((dish) => (
                <Col key={dish.id} md={4}>
                  <Card className="h-100 shadow-sm">
                    <Card.Img
                      variant="top"
                      src={dish.img}
                      alt={dish.name}
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>{dish.name}</Card.Title>
                      <Card.Text className="flex-grow-1">{dish.disk}</Card.Text>
                      <Card.Text className="fw-bold text-danger">{dish.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDishes;
