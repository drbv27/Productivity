import React from "react";
import { Button, Container, Stack, Row, Col } from "react-bootstrap";

import firebaseApp from "../firebase/credenciales";
import { getFirestore, updateDoc, doc } from "firebase/firestore";
const firestore = getFirestore(firebaseApp);

const ListadoTareas = ({ arrayTareas, correoUsuario, setArrayTareas }) => {
  async function eliminarTarea(idTareaAEliminar) {
    //crear nuevo array de tareas

    const nuevoArrayTareas = arrayTareas.filter(
      (objetoTarea) => objetoTarea.id !== idTareaAEliminar
    );
    //actualizar bd
    const docuRef = doc(firestore, `usuarios/${correoUsuario}`);
    updateDoc(docuRef, { tareas: [...nuevoArrayTareas] });
    //actualizar state
    setArrayTareas(nuevoArrayTareas);
  }
  return (
    <Container>
      <Stack>
        {arrayTareas.map((objetoTarea) => {
          return (
            <>
              <Row>
                <Col>
                  <Row>{objetoTarea.descripcion}</Row>
                  <Row>
                    <a href={objetoTarea.url}>
                      <Button variant="secondary">See File</Button>
                    </a>
                  </Row>
                  <Row>
                    <Button
                      variant="danger"
                      onClick={() => eliminarTarea(objetoTarea.id)}
                    >
                      Eliminar
                    </Button>
                  </Row>
                </Col>
                <Col>columna2</Col>
                <Col>columna3</Col>
              </Row>
              <hr />
            </>
          );
        })}
      </Stack>
    </Container>
  );
};

export default ListadoTareas;
