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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          'https://api.spoonacular.com/food/menuItems/search?apiKey=807497155ff343caa4fdf8ca088f7b18&query=all&addMenuItemInformation=true',
        )
        console.log(response)
        setItems(response.data.menuItems)
        console.log(111, items)
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    }
    getData()
  }, [])

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
            <SearchItems />
          </Col>
        </Row>
      </Container>
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <ItemCard key={items.id} item={items} />
      )}
    </>
  )
}

export default Home
