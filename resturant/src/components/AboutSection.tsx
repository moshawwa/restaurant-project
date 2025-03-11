import { Container, Row, Col, Image } from "react-bootstrap";
import restoImage from "../images/resto.png";

const AboutSection = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <Image src={restoImage} fluid />
        </Col>
        <Col md={6}>
          <h2>About Us</h2>
          <p>
            At Delicious Bites, we serve the freshest and most flavorful dishes,
            crafted with passion and love. Join us for an unforgettable dining
            experience!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;
