import { Container, Card, Row, Col } from "react-bootstrap";

const reviews = [
  { name: "Ossama", text: "Amazing food and great service!" },
  { name: "Jana", text: "Best restaurant experience ever!" },
  { name: "Wael", text: "I love their pasta dishes!" },
];

const CustomerReviews = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">What Our Customers Say</h2>
      <Row>
        {reviews.map((review, index) => (
          <Col key={index} md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Text>"{review.text}"</Card.Text>
                <Card.Subtitle className="text-muted">
                  - {review.name}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CustomerReviews;
