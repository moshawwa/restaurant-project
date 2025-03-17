import React, { useState } from 'react';

const Contact = () => {
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  });

  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
    form?: 'booking' | 'contact';
  }>({ type: null, message: '' });

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBookingData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setSubmitStatus({ type: null, message: '' });
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setSubmitStatus({ type: null, message: '' });
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log('Booking submitted:', bookingData);
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your reservation! We will confirm your booking shortly.',
        form: 'booking'
      });
      
      setBookingData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'There was an error processing your reservation. Please try again.',
        form: 'booking'
      });
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log('Contact form submitted:', contactData);
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.',
        form: 'contact'
      });
      
      setContactData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'There was an error sending your message. Please try again.',
        form: 'contact'
      });
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <h2 className="text-center mb-4">Book a Table</h2>
          
          {/* Restaurant Information */}
          <div className="card shadow-sm mb-4">
            <div className="row g-0">
              <div className="col-md-6">
                <div className="card-body">
                  <h4 className="card-title mb-4">Restaurant Details</h4>
                  <div className="d-flex mb-3">
                    <i className="fas fa-map-marker-alt text-danger me-3 fa-lg"></i>
                    <div>
                      <h5 className="mb-1">Location</h5>
                      <p className="mb-0">alrashed Street, Gaza</p>
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <i className="fas fa-clock text-danger me-3 fa-lg"></i>
                    <div>
                      <h5 className="mb-1">Opening Hours</h5>
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
                        Phone: +972597802445<br />
                        Email: shawwaresto@gmail.com
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

          {/* Booking Form */}
          <div className="card shadow-sm p-4 mb-5">
            <h4 className="mb-4">Make a Reservation</h4>
            {submitStatus.type && submitStatus.form === 'booking' && (
              <div className={`alert alert-${submitStatus.type === 'success' ? 'success' : 'danger'} mb-4`}>
                {submitStatus.message}
              </div>
            )}
            <form onSubmit={handleBookingSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="booking-name" className="form-label">Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="booking-name"
                    name="name"
                    value={bookingData.name}
                    onChange={handleBookingChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="booking-email" className="form-label">Email *</label>
                  <input
                    type="email"
                    className="form-control"
                    id="booking-email"
                    name="email"
                    value={bookingData.email}
                    onChange={handleBookingChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={bookingData.phone}
                    onChange={handleBookingChange}
                    required
                    placeholder="Your phone number"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="guests" className="form-label">Number of Guests *</label>
                  <select
                    className="form-select"
                    id="guests"
                    name="guests"
                    value={bookingData.guests}
                    onChange={handleBookingChange}
                    required
                  >
                    <option value="">Select number of guests</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6 People</option>
                    <option value="7+">7+ People</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="date" className="form-label">Date *</label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    name="date"
                    value={bookingData.date}
                    onChange={handleBookingChange}
                    min={today}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="time" className="form-label">Time *</label>
                  <select
                    className="form-select"
                    id="time"
                    name="time"
                    value={bookingData.time}
                    onChange={handleBookingChange}
                    required
                  >
                    <option value="">Select time</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="11:30">11:30 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="12:30">12:30 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="13:30">1:30 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="14:30">2:30 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="15:30">3:30 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="16:30">4:30 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="17:30">5:30 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="booking-message" className="form-label">Special Requests</label>
                <textarea
                  className="form-control"
                  id="booking-message"
                  name="message"
                  rows={3}
                  value={bookingData.message}
                  onChange={handleBookingChange}
                  placeholder="Any special requests or preferences?"
                />
              </div>

              <button type="submit" className="btn btn-danger btn-lg w-100">
                <i className="fas fa-calendar-check me-2"></i>
                Book Table
              </button>
            </form>
          </div>

          {/* Contact Form */}
          <div className="card shadow-sm p-4">
            <h4 className="mb-4">Contact Us</h4>
            {submitStatus.type && submitStatus.form === 'contact' && (
              <div className={`alert alert-${submitStatus.type === 'success' ? 'success' : 'danger'} mb-4`}>
                {submitStatus.message}
              </div>
            )}
            <form onSubmit={handleContactSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="contact-name" className="form-label">Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="contact-name"
                    name="name"
                    value={contactData.name}
                    onChange={handleContactChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="contact-email" className="form-label">Email *</label>
                  <input
                    type="email"
                    className="form-control"
                    id="contact-email"
                    name="email"
                    value={contactData.email}
                    onChange={handleContactChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject *</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  value={contactData.subject}
                  onChange={handleContactChange}
                  required
                  placeholder="What is this regarding?"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="contact-message" className="form-label">Message *</label>
                <textarea
                  className="form-control"
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={contactData.message}
                  onChange={handleContactChange}
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