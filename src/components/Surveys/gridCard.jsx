import React from 'react'
import './surveys.css'
import mySurveyGridImage from '../Assets/my_surveys_grid.png'
const GridCard = () => {
  return (
    <div className='gridcard'>
        <div className='imageContainer'>
        <img src={mySurveyGridImage} alt='img' height={100} width={130} />
        </div>
        <h1 className='surveyHeading'>Career-skill Feedback</h1>
        <button className='responseButton'>VIEW RESPONSE</button>
    </div>
  )
}

export default GridCard