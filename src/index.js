import React from 'react'
import styles from './styles.module.css'

export { name, creator } from './variable'
import addfn from './function'
import Busclass from './class'
import { Table } from './tableComponent'
export { List } from './liComponent'

export const add = addfn
export const Bus = Busclass;
export default Table;