import React from 'react';
import image from "./images/Untitled design.png";

const Contact = () => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <div className="container py-5" style={{ minHeight: '85vh' }}>
        <div className="row align-items-center">
          {/* Illustration */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src= {image}
              alt="Contact Illustration"
              className="img-fluid"
              style={{ maxWidth: '80%' }}
            />
          </div>

          {/* Form */}
          <div className="col-md-6">
            <h2 className="mb-3">Contact Us</h2>
            <p className="text-muted mb-4">
              We'd love to hear your feedback, <em>suggestions</em>, or any issues you're facing with <strong>iNotebook</strong>.
            </p>

            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Your Name" required />
              </div>

              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email Address" required />
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary px-4 py-2">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;