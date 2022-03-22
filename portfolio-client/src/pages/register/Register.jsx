import "./register.css";
import { Form, Button } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { createRef, useState } from "react";
import { NotificationManager } from "react-notifications";

function Register() {
  const username = createRef();
  const email = createRef();
  const password = createRef();
  const confirmPassword = createRef();
  const navigate = useNavigate();

  const [phoneNo, setPhoneNo] = useState();

  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (confirmPassword.current.value !== password.current.value) {
      NotificationManager.error(
        "Password doesn't match!  Please try again...."
      );
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        phone: phoneNo,
        password: password.current.value,
      };
      try {
        console.log(user);
        await axios.post("/register", user);
        NotificationManager.success("Sign up successfully!");
        navigate("/login");
      } catch (err) {
        NotificationManager.error(err);
      }
    }
  };

  return (
    <div className="outerContainer">
      <div className="formContainer">
        <Form onSubmit={onFormSubmit}>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              ref={username}
              required
              placeholder="Enter Full Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              ref={email}
              required
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="has-wrapper mb-40">
            <Form.Label>Phone Number</Form.Label>
            <PhoneInput
              className="phoneNo"
              value=""
              country="ie"
              regions={"europe"}
              prefix=""
              preferredCountries={[""]}
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Phone Number*"
              maxLength="10"
              onChange={setPhoneNo}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              ref={password}
              required
              minLength="6"
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              ref={confirmPassword}
              required
              minLength="6"
              placeholder="Confirm Password"
            />
          </Form.Group>

          <div className="buttonDiv">
            <div>
              <Link to="/login">
                Sign in
              </Link>
            </div>
            <div>
              <Button variant="primary" type="submit">
                Sign up
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
