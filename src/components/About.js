import React from "react";

const About = () => {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="row align-items-center d-flex" style={{minHeight: "84vh"}}>
        <div className="col-md-6">
          <h1 className="display-4 fw-bold">Welcome to iNotebook</h1>
          <p className="lead">
            iNotebook is a powerful and secure cloud-based note-taking
            application that helps you organize your thoughts, ideas, and tasks
            effortlessly.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1250/1250615.png"
            alt="Notebook Illustration"
            className="img-fluid"
            style={{ maxHeight: "300px" }}
          />
        </div>
      </div>

      {/* Features Section */}
      <h2 className="text-center mb-4">Features of iNotebook</h2>
      <div className="row text-center mb-5">
        <div className="col-md-4 mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828911.png"
            alt="Secure Notes"
            className="mb-3"
            style={{ width: "60px" }}
          />
          <h5>Secure & Private</h5>
          <p>
            Your notes are protected using modern authentication and encryption.
            Only you can access your data.
          </p>
        </div>
        <div className="col-md-4 mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828961.png"
            alt="Access Anywhere"
            className="mb-3"
            style={{ width: "60px" }}
          />
          <h5>Cloud-Based Access</h5>
          <p>
            Access your notes anytime, anywhere — all your content is safely
            stored in the cloud.
          </p>
        </div>
        <div className="col-md-4 mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3649/3649460.png"
            alt="User Friendly"
            className="mb-3"
            style={{ width: "60px" }}
          />
          <h5>User-Friendly Interface</h5>
          <p>
            Simple and clean UI built with React and Bootstrap makes note-taking
            fast and enjoyable.
          </p>
        </div>
      </div>

      <div className="row text-center mb-5">
        <div className="col-md-4 mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
            alt="Edit Notes"
            className="mb-3"
            style={{ width: "60px" }}
          />
          <h5>Edit & Organize</h5>
          <p>
            Create, update, and delete notes easily. Keep everything organized
            in one place.
          </p>
        </div>
        <div className="col-md-4 mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1170/1170627.png"
            alt="Responsive"
            className="mb-3"
            style={{ width: "60px" }}
          />
          <h5>Fully Responsive</h5>
          <p>
            Works great on desktop, tablet, and mobile devices with a responsive
            layout.
          </p>
        </div>
        <div className="col-md-4 mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828940.png"
            alt="Fast Performance"
            className="mb-3"
            style={{ width: "60px" }}
          />
          <h5>Fast & Lightweight</h5>
          <p>
            Built with performance in mind — quick load times and smooth user
            experience.
          </p>
        </div>
      </div>

      {/* Testimonials */}
      <h2 className="text-center mb-4">What Users Say</h2>
      <div className="row text-center mb-5">
        <div className="col-md-4">
          <blockquote className="blockquote">
            <p>
              “iNotebook changed the way I take notes. It’s simple, fast, and
              secure!”
            </p>
            <footer className="blockquote-footer">Amit Sharma, Student</footer>
          </blockquote>
        </div>
        <div className="col-md-4">
          <blockquote className="blockquote">
            <p>
              “The best note app I've used. Everything syncs across my devices.”
            </p>
            <footer className="blockquote-footer">
              Priya Kapoor, Developer
            </footer>
          </blockquote>
        </div>
        <div className="col-md-4">
          <blockquote className="blockquote">
            <p>
              “I love the clean UI and how fast it loads. Highly recommended!”
            </p>
            <footer className="blockquote-footer">
              Ravi Mehta, Entrepreneur
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Final Call-to-Action */}
      <div className="text-center mt-5">
        <h4>
          Start organizing your thoughts today with{" "}
          <span className="text-primary">iNotebook</span>.
        </h4>
        <p className="text-muted">
          No more paper clutter. All your notes, just a click away.
        </p>
      </div>
    </div>
  );
};

export default About;
