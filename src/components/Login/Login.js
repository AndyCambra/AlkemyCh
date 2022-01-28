import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Button, Form } from 'react-bootstrap'
import swal from 'sweetalert'
import { Navigate } from 'react-router-dom'

const { REACT_APP_AUTH } = process.env

function Login() {
  const [form, getForm] = useState({ email: '', password: '' })
  const [isLogged, setIsLogged] = useState(false)

  const dataForm = (e) => {
    const { name, value } = e.target
    getForm({
      ...form,
      [name]: value,
    })
    console.log(form)
  }
  const check = async () => {
    swal({
      text: 'loading',
      showConfirmButton: false,
    })
    try {
      const response = await axios.post(REACT_APP_AUTH, {
        ...form,
      })
      swal.close()
      console.log(response)
      localStorage.setItem('token', response.data.token)
      setIsLogged(true)
    } catch (error) {
      swal.close()
      console.log(error)
      swal({
        text: 'Hay un error en el email o en el password',
        dangerMode: true,
      })
    }
  }

  return (
    <>
      {isLogged && <Navigate to="/" replace />}
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => dataForm(e)}
            type="email"
            name="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => dataForm(e)}
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button
          onClick={() => check()}
          variant="primary"
          type="button"
          disabled={form.email === '' || form.password === ''}
        >
          Submit
        </Button>
      </Form>
    </>
  )
}
export default Login
