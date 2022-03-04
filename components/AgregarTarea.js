import React from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";

import firebaseApp from "../firebase/credenciales";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const AgregarTarea = ({ correoUsuario, arrayTareas, setArrayTareas }) => {
  let urlDescarga;
  async function añadirTarea(e) {
    e.preventDefault();
    //crear nuevo array de tareas
    const descripcion = e.target.formDescripcion.value;
    const nuevoArrayTareas = [
      ...arrayTareas,
      {
        id: +new Date(),
        descripcion: descripcion,
        url: urlDescarga,
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

  async function fileHandler(e) {
    //dtectar archivo
    const archivoLocal = e.target.files[0];
    //cargarlo a firebase storage
    const archivoRef = ref(storage, `documentos/${archivoLocal.name}`);
    await uploadBytes(archivoRef, archivoLocal);
    //obtener url de descarga
    urlDescarga = await getDownloadURL(archivoRef);
    console.log(urlDescarga);
  }

  return (
    <Container>
      <Form onSubmit={añadirTarea}>
        <Row className="mb-5">
          <Col className="bg-light border border border-secondary rounded pt-2 pb-2 mx-2">
            <h5>Planear</h5>
            <Form.Control
              type="text"
              placeholder="Descripcion"
              id="formDescripcion"
              className="my-2"
            />
            <Form.Control
              type="file"
              placeholder="Añade Archivo"
              className="my-2"
              onChange={fileHandler}
            />
            <Button type="submit" className="my-2">
              Agregar Tarea
            </Button>
          </Col>
          <Col>
            <h5>Ejecutando</h5>
          </Col>
          <Col>
            <h5>Finalizadas</h5>
          </Col>
        </Row>
      </Form>
      <hr />
    </Container>
  );
};

export default AgregarTarea;
