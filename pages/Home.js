import React from "react";
import firebaseApp from "../firebase/credenciales";
import { getAuth, signOut } from "firebase/auth";
import { Container, Button } from "react-bootstrap";

const auth = getAuth(firebaseApp);

const Home = () => {
  return (
    <Container>
      <h4>Hola Sesión iniciada</h4>
      <Button onClick={() => signOut(auth)}>Cerrar Sesión</Button>
    </Container>
  );
};

export default Home;
