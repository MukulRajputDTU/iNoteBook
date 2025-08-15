import React, { useEffect, useState } from "react";

const images = [
  "https://png.pngtree.com/thumb_back/fh260/background/20210912/pngtree-girl-taking-notes-on-windowsill-image_863560.jpg",
  "https://www.shutterstock.com/image-vector/team-work-table-view-working-260nw-2375662029.jpg",
  "https://www.shutterstock.com/image-vector/woman-taking-notes-making-list-260nw-2432669291.jpg",
  "https://cdn.dribbble.com/userupload/36072265/file/original-fe1999fb62e29a755d18d039e1f67e0e.png",
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [prevImage, setPrevImage] = useState(null);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevImage(currentImage);
      setCurrentImage((prev) => (prev + 1) % images.length);
      setIsSliding(true);
      setTimeout(() => setIsSliding(false), 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="pb-3">
      <div
        className="position-relative overflow-hidden"
        style={{ height: "91.9vh" }}
      >
        {prevImage !== null && isSliding && (
          <div
            className="bg-slide"
            style={{
              backgroundImage: `url(${images[prevImage]})`,
              animation: "slideOut 1s forwards",
            }}
          ></div>
        )}

        <div
          className="bg-slide"
          style={{
            backgroundImage: `url(${images[currentImage]})`,
            animation: isSliding ? "slideIn 1s forwards" : "none",
            left: isSliding ? "100%" : "0%",
          }}
        ></div>

        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white text-center"
          style={{ zIndex: 2 }}
        >
          <h1 className="display-3 fw-bold">Welcome to iNoteBook</h1>
          <p className="lead pb-4">
            Your smart, simple, and secure note-taking app.
          </p>
          <a href="/signup" className="btn btn-primary btn-lg mt-3 px-4">
            Get Started Free
          </a>
        </div>

        <div
          className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"
          style={{ zIndex: 1 }}
        ></div>

        <style>{`
          .bg-slide {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            z-index: 0;
          }

          @keyframes slideIn {
            from {
              left: 100%;
            }
            to {
              left: 0%;
            }
          }

          @keyframes slideOut {
            from {
              left: 0%;
            }
            to {
              left: -100%;
            }
          }
        `}</style>
      </div>

      {/* Features */}
      <div className="container py-5">
        <div className="row text-center mb-5">
          {/* Easy Organization */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <i className="bi bi-folder2-open fs-1 text-primary"></i>
                <h5 className="card-title mt-3">Effortless Organization</h5>
                <p className="card-text text-muted">
                  Stay in control of your notes with intuitive tagging, custom
                  folders, and drag-and-drop simplicity.
                </p>
                <ul className="list-unstyled text-muted">
                  <li>✔️ Customizable folders</li>
                  <li>✔️ Smart tag management</li>
                  <li>✔️ Easy drag & drop</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cloud Sync */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <i className="bi bi-cloud-arrow-up fs-1 text-primary"></i>
                <h5 className="card-title mt-3">Seamless Cloud Sync</h5>
                <p className="card-text text-muted">
                  Your notes go with you. Enjoy real-time syncing and offline
                  access across all your devices.
                </p>
                <ul className="list-unstyled text-muted">
                  <li>✔️ Real-time updates</li>
                  <li>✔️ Access on any device</li>
                  <li>✔️ Works offline too</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <i className="bi bi-shield-lock fs-1 text-primary"></i>
                <h5 className="card-title mt-3">Built-In Security</h5>
                <p className="card-text text-muted">
                  Your privacy is our priority. All your content is secured with
                  powerful encryption and biometric protection.
                </p>
                <ul className="list-unstyled text-muted">
                  <li>✔️ End-to-end encryption</li>
                  <li>✔️ Biometric authentication</li>
                  <li>✔️ Reliable backup & restore</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-5 bg-light rounded shadow-sm">
          <h2 className="fw-bold">Start Writing Smarter</h2>
          <p className="text-muted">
            Organize your thoughts effortlessly. Join now for free—no credit
            card needed.
          </p>
          <a href="/login" className="btn btn-outline-primary btn-lg mt-2">
            Get Started
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-3 pt-3 border-top">
        <p className="text-muted mb-0">
          &copy; 2025 NoteMate. All rights reserved.
        </p>
        <p>
          <a href="/privacy" className="text-decoration-none me-3">
            Privacy Policy
          </a>
          <a href="/terms" className="text-decoration-none">
            Terms of Service
          </a>
        </p>
      </footer>
    </div>
  );
}