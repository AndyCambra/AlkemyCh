import React from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import ItemCard from '../ItemCard/ItemCard'
import Header from '../Header/Header'
import { Row, Col, Container } from 'react-bootstrap'
import SearchItems from '../SearchItems/SearchItems'

const { REACT_APP_APIKEY } = process.env

const Home = () => {
  const isLogged = localStorage.getItem('token')
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState()

  const getData = async () => {
    try {
      console.log({ REACT_APP_APIKEY })
      const response = await axios.get(
        `https://api.spoonacular.com/food/menuItems/search?apiKey=${REACT_APP_APIKEY}&query=all&addMenuItemInformation=true`,
      )
      console.log(response)
      setItems(response.data.menuItems)
      console.log(111, items)
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  const getDataSearch = async (term) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/food/menuItems/search?apiKey=${REACT_APP_APIKEY}&query=${term}`,
      )
      setItems(response.data.menuItems)
      console.log(11, items)
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
    console.log(17, term.length)
  }

  useEffect(() => {
    getData()
  }, [])

  console.log(14, items)

  return (
    <>
      {!isLogged && <Navigate to="/login" replace />}

      <Header />
      <Container>
        <Row>
          <Col>
            <h1>Menú</h1>
          </Col>
          <Col>
            <SearchItems onSearch={getDataSearch} />
          </Col>
        </Row>
      </Container>
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <ItemCard key={items.id} items={items} />
      )}
    </>
  )
}

export default Home
