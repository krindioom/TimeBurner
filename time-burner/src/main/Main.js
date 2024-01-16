import React from 'react'
import MainStopwatch from './MainStopwatch';
import MainStyle from '../styles/main.module.css'

const Main = () => {
  return (
    
    <div className={MainStyle.stopwatch_container}>
        <MainStopwatch/>
    </div>
  )
}

export default Main