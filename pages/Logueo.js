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
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="dark" type="submit">
            {estaRegistrandose ? "Registrate" : "Inicia Sesión"}
          </Button>
        </Form>
        <Button variant="primary" type="submit" style={{ width: "300px" }}>
          Acceder con Google
        </Button>
        <Button
          style={{ width: "300px" }}
          variant="secondary"
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
