import { Form, Button, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import PropTypes from 'prop-types'

const SearchItems = ({onSearch}) => {
  const [searchData, setSearchData] = useState()
  /* const [loading, setLoading] = useState(true) */

  const getSearchImput = (e) => {
    const { value } = e.target
    setSearchData(value)
    value.lenght > 2 ?? onSearch(value)
  }

  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Row>
            <Col sm={8}>
              <Form.Control
                onChange={(e) => getSearchImput(e)}
                type="seach"
                placeholder="Search"
              />
            </Col>
          </Row>
        </Form.Group>
      </Form>
      {/*  {loading ? <h2>Cargando...</h2> : <ItemCard item={searchedItems} />} */}
    </>
  )
}

SearchItems.propTypes = {
  onSearch: PropTypes.func.isRequired
}

export default SearchItems
