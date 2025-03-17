
import {  Row, Col, Button } from "react-bootstrap";

const ContactSection = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <div className="card shadow-sm p-4">
            <h2 className="text-center mb-4">Contact Us</h2>
            <Row className="justify-content-center">
              <Col md={8} className="text-center">
                <div className="d-flex align-items-center justify-content-center mb-3">
                  <i className="fas fa-envelope text-danger me-3 fa-lg"></i>
                  <p className="mb-0">Email: shawwaresto@gmail.com</p>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-3">
                  <i className="fas fa-phone text-danger me-3 fa-lg"></i>
                  <p className="mb-0">Phone: +972597802445</p>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-4">
                  <i className="fas fa-map-marker-alt text-danger me-3 fa-lg"></i>
                  <p className="mb-0">Location: alrashed Street, Gaza</p>
                </div>
                <Button
                  variant="danger"
                  href="https://maps.google.com"
                  target="_blank"
                  className="px-4"
                >
                  <i className="fas fa-map-marked-alt me-2"></i>
                  Find Us on Google Maps
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
