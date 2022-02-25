import React, { useState } from "react";
import { Stack, Container, Form, Button } from "react-bootstrap";

const Logueo = () => {
  const [estaRegistrandose, setEstaRegistrandose] = useState(false);
  return (
    <Container>
      <Stack gap={3}>
        <h1>{estaRegistrandose ? "Registrate" : "Inicia Sesión"}</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            {estaRegistrandose ? "Registrate" : "Inicia Sesión"}
          </Button>
        </Form>
        <Button variant="primary" type="submit">
          Acceder con Google
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            setEstaRegistrandose(!estaRegistrandose);
          }}
        >
          {estaRegistrandose
            ? "¿Ya tienes cuenta? Inicia Sesión"
            : "¿No tienes cuenta? Registrate"}
        </Button>
      </Stack>
    </Container>
  );
};

export default Logueo;
