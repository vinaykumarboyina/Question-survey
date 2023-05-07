import React from 'react'
import Layout from '../Layout/layout'
import {BsArrowRight} from 'react-icons/bs'
const CreateSurvey = () => {
  return (
    <Layout>
        <div style={{paddingTop:'50px'}}>

        <div className='headerContainer'>
            <h1 className='createSurveyHeading'>Create Survey</h1>
        </div>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', padding:'30px', height:'77vh'}}>
            <div className='descriptionContainer'>
                <h1 className='surveySubHeading'>Survey Subject & Description</h1>
                <input type='text' className='surveyInput'  placeholder='Survey Name'/>
                <textarea placeholder='Describe your survey'  className='surveytext'/>
            </div>
            <div className='bottomContainer'>
                <hr  className='hrLine'/>
                <button className='nextButton'><span>NEXT</span> <span><BsArrowRight /></span></button>
            </div>
        </div>
        </div>
    </Layout>
  )
}

export default CreateSurvey