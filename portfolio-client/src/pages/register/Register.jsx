import "./register.css";
import { Form, Button } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="outerContainer">
      <div className="formContainer">
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Full Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
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
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>

          <div className="buttonDiv">
            <div>
              <Link to="/login">
                <a href="">Sign in</a>
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
