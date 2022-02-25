import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Logueo from "./Logueo";

export default function Principal() {
  const [usuarioGlobal, setUsuarioGlobal] = useState(null);
  return <>{usuarioGlobal ? <Home /> : <Logueo />}</>;
}
