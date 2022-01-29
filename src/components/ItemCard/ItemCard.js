import { Card, Row, Container, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './index.css'

const ItemCard = ({ items }) => {
  console.log(222, items)

  return (
    <>
      <Container>
        <Row>
          {items.map((item) => (
            <Col lg={3} md={4} xs={6} key={item.id}>
              <Card className="card-menu">
                <Card.Img variant="top" src={item.image} />
                <Card.Body className="card-body">
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    <p>Calorías: {item?.nutrition?.calories}</p>
                    <p>Carbohidratos: {item?.nutrition?.carbs}</p>
                    <p>Grasas: {item?.nutrition?.fat}</p>
                    <p>Proteínas: {item?.nutrition?.protein}</p>
                  </Card.Text>
                  <div>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

ItemCard.propTypes = {
  items: PropTypes.array.isRequired,
}

export default ItemCard
