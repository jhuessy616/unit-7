import MovieCreate from "./MovieCreate"
import { Col, Container, Row } from "reactstrap"


function MovieIndex(props) {
  return (
      <>
          <h2>MovieIndex </h2>
          <Container>
              <Row>
                  <Col md="4">
                      <MovieCreate token={props.token} />
                  </Col>
                  <Col md="8">[Table to go here]</Col>
              </Row>
          </Container>
      </>
  )
}

export default MovieIndex