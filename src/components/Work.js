import './WorkCardStyle.css'
import React from 'react'
// import WorkCard from './WorkCard'
import WorkCardData from './WorkCardData'
import TempWorkCard from './TempWorkCard'
const Work = () => {
  return (
    <div className='work-container'>
        <h1 className="project-heading">Projects</h1>
        <div className='project-container'>
            {WorkCardData.map((val,ind)=>{
                return(
                    <TempWorkCard 
                        key={ind}
                        imgSrc={val.imgSrc}
                        title={val.title}
                        text={val.text}
                        view={val.view}
                        // source={val.source}
                    />
                )
            })}
        </div>
      
    </div>
  )
}

export default Work
