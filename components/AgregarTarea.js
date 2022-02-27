import React from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";

import firebaseApp from "../firebase/credenciales";
import { doc, getFirestore, updateDoc } from "firebase/firestore";

const firestore = getFirestore(firebaseApp);

const AgregarTarea = ({ correoUsuario, arrayTareas, setArrayTareas }) => {
  async function añadirTarea(e) {
    e.preventDefault();
    //crear nuevo array de tareas
    const descripcion = e.target.formDescripcion.value;
    const nuevoArrayTareas = [
      ...arrayTareas,
      {
        id: +new Date(),
        descripcion: descripcion,
        url: "https://picsum.photos/420",
      },
    ];
    //actualizar base de datos
    const docuRef = doc(firestore, `usuarios/${correoUsuario}`);
    updateDoc(docuRef, { tareas: [...nuevoArrayTareas] });
    //actualizar estado
    setArrayTareas(nuevoArrayTareas);
    //limpiar formulario
    e.target.formDescripcion.value = "";
  }

  return (
    <Container>
      <Form onSubmit={añadirTarea}>
        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="Describe tu tarea"
              id="formDescripcion"
            />
          </Col>
          <Col>
            <Form.Control type="file" placeholder="Añade Archivo" />
          </Col>
          <Col>
            <Button type="submit">Agregar Tarea</Button>
          </Col>
        </Row>
      </Form>
      <hr />
    </Container>
  );
};

export default AgregarTarea;
