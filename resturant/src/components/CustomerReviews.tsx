
import { Card, Row, Col } from "react-bootstrap";

const reviews = [
  { name: "Ossama", text: "Amazing food and great service!" },
  { name: "Jana", text: "Best restaurant experience ever!" },
  { name: "Wael", text: "I love their pasta dishes!" },
];

const CustomerReviews = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <div className="card shadow-sm p-4">
            <h2 className="text-center mb-4">What Our Customers Say</h2>
            <Row className="g-4">
              {reviews.map((review, index) => (
                <Col key={index} md={4}>
                  <Card className="h-100 shadow-sm">
                    <Card.Body className="text-center">
                      <i className="fas fa-quote-left fa-2x text-danger mb-3"></i>
                      <Card.Text className="lead mb-3">"{review.text}"</Card.Text>
                      <Card.Subtitle className="text-muted">
                        - {review.name}
                      </Card.Subtitle>
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

export default CustomerReviews;
