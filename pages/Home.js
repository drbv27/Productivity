import React, { useState, useEffect } from "react";
import firebaseApp from "../firebase/credenciales";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { Container, Button } from "react-bootstrap";
import AgregarTarea from "../components/AgregarTarea";
import ListadoTareas from "../components/ListadoTareas";

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const Home = ({ correoUsuario }) => {
  const [arrayTareas, setArrayTareas] = useState(null);
  const fakeData = [
    { id: 1, descripcion: "Tarea1", url: "https://picsum.photos/420" },
    { id: 2, descripcion: "Tarea2", url: "https://picsum.photos/420" },
    { id: 3, descripcion: "Tarea3", url: "https://picsum.photos/420" },
  ];

  async function buscarDocumentOrCrearDocumento(idDocumento) {
    //crear una referencia al documento
    const docuRef = doc(firestore, `usuarios/${idDocumento}`);
    //buscar documento
    const consulta = await getDoc(docuRef);
    //revisar si existe
    if (consulta.exists()) {
      //si si existe
      const infoDocu = consulta.data();
      return infoDocu.tareas;
    } else {
      //si no existe
      await setDoc(docuRef, { tareas: [...fakeData] });
      const consulta = await getDoc(docuRef);
      const infoDocu = consulta.data();
      return infoDocu.tareas;
    }
  }

  useEffect(() => {
    async function fetchTareas() {
      const tareasFetchadas = await buscarDocumentOrCrearDocumento(
        correoUsuario
      );
      setArrayTareas(tareasFetchadas);
    }
    fetchTareas();
  }, []);

  return (
    <Container>
      <h4>Hola Sesión iniciada</h4>
      <Button onClick={() => signOut(auth)}>Cerrar Sesión</Button>
      <hr />
      <AgregarTarea />
      {arrayTareas ? <ListadoTareas arrayTareas={arrayTareas} /> : null}
    </Container>
  );
};

export default Home;
