import { Container, Row, Col, Card, Button } from "react-bootstrap";
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
    <Container className="my-5">
      <h2 className="text-center mb-4">Best Sellers</h2>
      <Row>
        {featuredDishes.map((dish) => (
          <Col key={dish.id} md={4}>
            <Card className="h-100 shadow-sm">
              {" "}
              {/* Ensure cards have the same height */}
              <Card.Img
                variant="top"
                src={dish.img}
                alt={dish.name}
                style={{ height: "250px", objectFit: "cover" }} // Fixed height for images
              />
              <Card.Body className="d-flex flex-column">
                {" "}
                {/* Flexbox for consistent card body */}
                <Card.Title>{dish.name}</Card.Title>
                <Card.Text className="flex-grow-1">{dish.disk}</Card.Text>{" "}
                {/* Flex-grow for description */}
                <Card.Text className="fw-bold">{dish.price}</Card.Text>
                <Button variant="primary" className="w-100">
                  Order Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedDishes;
