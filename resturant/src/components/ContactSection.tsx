import { Container, Row, Col, Button } from "react-bootstrap";

const ContactSection = () => {
  return (
    <Container className="my-5 text-center">
      <h2>Contact Us</h2>
      <Row>
        <Col>
          <p>Email: shawwaresto@gmail.com</p>
          <p>Phone: +972597802445</p>
          <p>Location: alrashed Street, Gaza</p>
          <Button
            variant="primary"
            href="https://maps.google.com"
            target="_blank"
          >
            Find Us on Google Maps
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactSection;
