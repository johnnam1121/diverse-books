import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Main(props) {
  return (
    <Container>
      <Row className='mt-1'>
        <Col>
          <h2>You searched: </h2>
          <h3>{props.input}</h3>
          <h2 style={{ marginTop: '3vh' }}>Consider checking out:</h2>
          <h3>{props.suggestion}</h3>
          <p>Check out some teaching material
            <a href={`${props.suggestion}.txt`} onclick="$('a').hide()"
              target="_blank" >here</a>
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Main