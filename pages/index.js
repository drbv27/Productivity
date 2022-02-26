import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Logueo from "./Logueo";
import firebaseApp from "../firebase/credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebaseApp);

export default function Principal() {
  const [usuarioGlobal, setUsuarioGlobal] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      //codigo en caso de que haya sesion iniciada
      setUsuarioGlobal(usuarioFirebase);
    } else {
      //codigo en caso que no haya sesion iniciada
      setUsuarioGlobal(null);
    }
  });

  return (
    <>
      {usuarioGlobal ? (
        <Home correoUsuario={usuarioGlobal.email} />
      ) : (
        <Logueo />
      )}
    </>
  );
}
