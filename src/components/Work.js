import './Workcardstyle.css'
import React from 'react'
import Workcard from './Workcard'
import Workdata from './Workdata'

const Work = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
           {Workdata.map((val,index) =>
              { return(
                <Workcard
                key={index}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}/>
               );
              })}
        </div> 
    </div>
  )
}

export default Work