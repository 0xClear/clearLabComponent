import React from 'react'
import styles from './styles.module.css'
{
    /* The following line can be included in your src/index.js or App.js file */
  }
import 'bootstrap/dist/css/bootstrap.css';

export { name, creator } from './variable'
import addfn from './function'
import Busclass from './class'
import { Table } from './tableComponent'
export { List } from './liComponent'
export { Accordian } from './accordian'

export const add = addfn
export const Bus = Busclass;
export default Table;