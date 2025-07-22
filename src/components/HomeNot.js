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
      <div className="container py-3">
        <div className="row text-center mb-5">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <i className="bi bi-folder2-open fs-1 text-primary"></i>
                <h5 className="card-title mt-3">Easy Organization</h5>
                <p className="card-text text-muted">
                  Categorize your notes with tags and folders to keep everything
                  tidy and accessible.
                </p>
                <ul className="list-unstyled text-muted">
                  <li>✔️ Custom folders</li>
                  <li>✔️ Tag management</li>
                  <li>✔️ Drag & drop support</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <i className="bi bi-cloud-arrow-up fs-1 text-primary"></i>
                <h5 className="card-title mt-3">Cloud Sync</h5>
                <p className="card-text text-muted">
                  Access your notes anytime, anywhere with seamless automatic
                  syncing.
                </p>
                <ul className="list-unstyled text-muted">
                  <li>✔️ Real-time sync</li>
                  <li>✔️ Cross-device access</li>
                  <li>✔️ Offline mode</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <i className="bi bi-shield-lock fs-1 text-primary"></i>
                <h5 className="card-title mt-3">Secure & Private</h5>
                <p className="card-text text-muted">
                  Your notes are encrypted and protected with top-grade security
                  measures.
                </p>
                <ul className="list-unstyled text-muted">
                  <li>✔️ End-to-end encryption</li>
                  <li>✔️ Biometric login</li>
                  <li>✔️ Backup & restore</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center py-4 bg-light rounded shadow-sm">
          <h2 className="fw-bold">Start writing smarter today</h2>
          <p className="text-muted">
            No credit card required. Join for free and stay organized forever.
          </p>
          <a href="/login" className="btn btn-outline-primary btn-lg mt-2">
            Login
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
