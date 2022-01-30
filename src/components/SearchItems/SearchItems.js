import { Form, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import PropTypes from 'prop-types'

const SearchItems = ({ onSearch }) => {
  const [searchData, setSearchData] = useState()

  const getSearchImput = (e) => {
    const { value } = e.target
    setSearchData(value)
    if (value.length > 2) {
      onSearch(value)
    }
    console.log(value.length)
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
    </>
  )
}

SearchItems.propTypes = {
  onSearch: PropTypes.func.isRequired,
}

export default SearchItems
