// import Signup from "./signup/Signup";
import { Col, Container, Row } from "reactstrap";
import Login from "./login/login";
import SignupRef from "./signup/SignupRef";
// import SignupAdvance from "./signup/signupAdvance";

function Auth() {
  return (
      <>
          <h2>Auth</h2>
          <Container>
              <Row>
                  <Col md="6">
          <SignupRef />
                  </Col>
                 <Col md="6">
          <Login/>
                  </Col> 
              </Row>
              
          </Container>
          </>
  )
}

export default Auth