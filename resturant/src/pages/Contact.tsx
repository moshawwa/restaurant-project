import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear status when user starts typing again
    setSubmitStatus({ type: null, message: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Here you would typically make an API call to your backend
      console.log('Form submitted:', formData);
      
      // Simulate successful submission
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'There was an error sending your message. Please try again.'
      });
    }
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <h2 className="text-center mb-4">Contact Us</h2>
          
          {/* Contact Information */}
          <div className="card shadow-sm mb-4">
            <div className="row g-0">
              <div className="col-md-6">
                <div className="card-body">
                  <h4 className="card-title mb-4">Visit Us</h4>
                  <div className="d-flex mb-3">
                    <i className="fas fa-map-marker-alt text-danger me-3 fa-lg"></i>
                    <div>
                      <h5 className="mb-1">Location</h5>
                      <p className="mb-0">123 Restaurant Street<br />City, State 12345</p>
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <i className="fas fa-clock text-danger me-3 fa-lg"></i>
                    <div>
                      <h5 className="mb-1">Hours</h5>
                      <p className="mb-0">
                        Monday - Friday: 11:00 AM - 10:00 PM<br />
                        Saturday - Sunday: 10:00 AM - 11:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <i className="fas fa-phone text-danger me-3 fa-lg"></i>
                    <div>
                      <h5 className="mb-1">Contact</h5>
                      <p className="mb-0">
                        Phone: (555) 123-4567<br />
                        Email: info@restaurant.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="h-100" style={{ minHeight: '300px' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1234!2d-73.935242!3d40.730610!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM0LCsDQzJzUwLjIiTiA3M8KwNTYnMDYuOSJX!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card shadow-sm p-4">
            <h4 className="mb-4">Send us a Message</h4>
            {submitStatus.type && (
              <div className={`alert alert-${submitStatus.type === 'success' ? 'success' : 'danger'} mb-4`}>
                {submitStatus.message}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this regarding?"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message here..."
                />
              </div>
              <button type="submit" className="btn btn-danger btn-lg w-100">
                <i className="fas fa-paper-plane me-2"></i>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 