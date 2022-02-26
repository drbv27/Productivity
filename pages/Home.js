import React from "react";
import firebaseApp from "../firebase/credenciales";
import { getAuth, signOut } from "firebase/auth";
import { Container, Button } from "react-bootstrap";
import AgregarTarea from "../components/AgregarTarea";
import ListadoTareas from "../components/ListadoTareas";

const auth = getAuth(firebaseApp);

const Home = () => {
  const fakeData = [
    { id: 1, descripcion: "Tarea1", url: "https://picsum.photos/420" },
    { id: 2, descripcion: "Tarea2", url: "https://picsum.photos/420" },
    { id: 3, descripcion: "Tarea3", url: "https://picsum.photos/420" },
  ];
  return (
    <Container>
      <h4>Hola Sesión iniciada</h4>
      <Button onClick={() => signOut(auth)}>Cerrar Sesión</Button>
      <hr />
      <AgregarTarea />
      <ListadoTareas arrayTareas={fakeData} />
    </Container>
  );
};

export default Home;
