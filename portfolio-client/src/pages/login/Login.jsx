import './login.css';
import {Form, Button} from "react-bootstrap";
// import loginSchema from "../../models/login";
import { Link } from "react-router-dom";

function Login() {

  return (
    <div className="outerContainer">
      <div className="formContainer">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div className="loginButtonDiv">
            <div>
              <Link to="/register"><a href="">Create account</a></Link>
            </div>
            <div>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
