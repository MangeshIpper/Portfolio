import './login.css';
import {Form, Button} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { createRef } from "react";
import { NotificationManager } from "react-notifications";

function Login() {
    const email = createRef();
    const password = createRef();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        const loginData = {
            email: email.current.value,
            password: password.current.value,
          };
          try {
            console.log(loginData);
            // await axios.post("/login", loginData);
            NotificationManager.success("Log in successfully!");
            navigate("/dashboard");
          } catch (err) {
            NotificationManager.error(err);
          }
    }


  return (
    <div className="outerContainer">
      <div className="formContainer">
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" ref={email} required placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={password} required placeholder="Password" />
          </Form.Group>
          <div className="loginButtonDiv">
            <div>
              <Link to="/register">Create account</Link>
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
