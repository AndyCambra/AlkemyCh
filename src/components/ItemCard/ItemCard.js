import { Button, Card, Row, Container, Col } from 'react-bootstrap'

const ItemCard = (items) => {
  console.log(222, items)
  const item = items.item.map((item) => item)
  console.log(333, item)

  return (
    <>
      <Container>
        <Row>
          {items.item.map((item, index) => (
            <Col lg={3} md={4} xs={6}>
              <Card>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    <p>Calorías: {item.nutrition.calories}</p>
                    <p>Carbohidratos: {item.nutrition.carbs}</p>
                    <p>Grasas: {item.nutrition.fat}</p>
                    <p>Proteínas: {item.nutrition.protein}</p>
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}
export default ItemCard
