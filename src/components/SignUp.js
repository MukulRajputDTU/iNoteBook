import React, {useState} from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function SignUp() {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credentials.password !== credentials.cpassword) {
      alert("Passwords do not match");
      return;
    }
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password
      }),
    });

    const json = await response.json();
    console.log(json);

    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      navigate("/");
    }
    else {
      alert("User already exists!")
    }
  };
   
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh", marginTop: "30px" }}>
      <motion.div
        className="shadow rounded-4 p-5 bg-white w-100"
        style={{ maxWidth: "400px" }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="mb-4 text-center">Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Name</label>
            <input type="text" className="form-control" id="name" name="name" onChange={onChange} placeholder="Your Name" required />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input type="email" className="form-control" id="email" name="email" onChange={onChange} placeholder="Enter email" required />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password" className="form-control" id="password" name="password" onChange={onChange} placeholder="Password" required />
          </div>
          <div className="mb-3">
            <label>Confirm Password</label>
            <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} placeholder="Confirm Password" required />
          </div>
          <button type="submit" className="btn btn-success w-100">Sign Up</button>
        </form>
        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link to="/login" style={{ cursor: "pointer", textDecoration: "underline" }}>
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
