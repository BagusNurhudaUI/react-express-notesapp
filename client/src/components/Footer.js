import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <div
        style ={{
            width: "100%",
            position: "relative",
            bottom: 0,
            display: "flex",
            justifyContent: "center",
        }}
    >
        <Container>
            <Row>
                <Col className="text-center py-3">Copyright &copy; My Notes by Bagus Nurhuda</Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer