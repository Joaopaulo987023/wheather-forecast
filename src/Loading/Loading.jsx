import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Loading.module.css'
import React from 'react'

export default function Loading() {
  return (
    <div><FontAwesomeIcon className={styles.myIcon} icon={faSpinner}/></div>
  )
}
