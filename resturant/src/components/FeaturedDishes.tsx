import { Container, Row, Col, Card, Button } from "react-bootstrap";
import grillImg from "../images/grill.png";
import pastaImg from "../images/pasta.png";
import burgerImg from "../images/burger.png";

const featuredDishes = [
  { id: 1, name: "Grilled Steak", img: grillImg, price: "$25" },
  { id: 2, name: "Pasta Carbonara", img: pastaImg, price: "$18" },
  { id: 3, name: "Cheeseburger", img: burgerImg, price: "$12" },
];

const FeaturedDishes = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Best Sellers</h2>
      <Row>
        {featuredDishes.map((dish) => (
          <Col key={dish.id} md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={dish.img} alt={dish.name} />
              <Card.Body>
                <Card.Title>{dish.name}</Card.Title>
                <Card.Text>{dish.price}</Card.Text>
                <Button variant="primary">Order Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedDishes;
