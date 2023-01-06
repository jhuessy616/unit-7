// import Signup from "./signup/Signup";
import { Col, Container, Row } from "reactstrap";
import Login from "./login/Login";
import SignupRef from "./signup/SignupRef";
// import SignupAdvance from "./signup/signupAdvance";

function Auth(props) {
  return (
      <>
          <h2>Auth</h2>
          <Container>
              <Row>
                  <Col md="6">
          <SignupRef updateToken={props.updateToken} />
                  </Col>
                 <Col md="6">
                      <Login updateToken={props.updateToken} />
                  </Col> 
              </Row>
              
          </Container>
          </>
  )
}

export default Auth