import React from "react";
import { Button, Container, Stack, Row, Col } from "react-bootstrap";

const ListadoTareas = ({ arrayTareas }) => {
  return (
    <Container>
      <Stack>
        {arrayTareas.map((objetoTarea) => {
          return (
            <>
              <Row>
                <Col>{objetoTarea.descripcion}</Col>
                <Col>
                  <Button>Ver Archivo</Button>
                </Col>
                <Col>
                  <Button>Eliminar Tarea</Button>
                </Col>
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
