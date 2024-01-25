import React from 'react'
import imgErro from "../assets/404.png"
import styles from "./PagErro.module.css"

export default function PagErro() {
  const handleClick = ()=>{ 
    window.location.href = '/';
  }
  return (
    <div className={styles.containerErro}>
      <h2>Local não encontrado</h2>
      <h1>404</h1>
      <img src={imgErro}  className={styles.erroImg} alt="imagem com pagina de erro" />
      <button onClick={handleClick} className={styles.botao}> Voltar </button>
    </div>
  )
}
