import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../Layout/layout'
import {BsArrowRight} from 'react-icons/bs'
import axios from 'axios'
const CreateSurvey = () => {
    const[surveyname, setSurveyname] = useState('')
    const [surveyDesc, setSurveydesc] = useState('')
    const [isFormValid, setIsFormValid] = useState(false)
    const navigate = useNavigate()
    const handleChange = (e) => {
        const {name, value} = e.target 
        switch(name){
            case 'surveyInput':
                setSurveyname(value)
                break;
            case 'surveyDesc':
                setSurveydesc(value)
                break;
            default:
                break;

        }
    }
    const checkFormValidity = () => {
        if (
          surveyname && surveyDesc
        ) {
          setIsFormValid(true);
        } else {
          setIsFormValid(false);
        }
        console.log('valid', isFormValid)
      }
      useEffect(()=>{checkFormValidity()})
    const handleNext = async(e) =>{
        e.preventDefault()
        const url = "https://izrmdya4vg.execute-api.ap-south-1.amazonaws.com/prod/create_survey_request"
        const payload = {
            survey_name:surveyname,
            survey_description:surveyDesc
        }
        await axios.post(url, payload).then((res) => {
            console.log('res', res)
        }).catch((err) =>{
            console.log('err', err)
        })
        navigate('/createSurvey/questionPage', {state:{surveyname}})
    }
  return (
    <Layout>
        <div>

        <div className='headerContainer'>
            <h1 className='createSurveyHeading'>Create Survey</h1>
        </div>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', padding:'30px', height:'77vh'}}>
            <div className='descriptionContainer'>
                <h1 className='surveySubHeading'>Survey Subject & Description</h1>
                <input type='text' className='surveyInput' name='surveyInput' onChange={(e)=>handleChange(e)} value={surveyname} placeholder='Survey Name'/>
                <textarea placeholder='Describe your survey' name='surveyDesc'onChange={(e)=>handleChange(e)} value={surveyDesc}  className='surveytext'/>
            </div>
            <div className='bottomContainer'>
                <hr  className='hrLine'/>
                <button className={isFormValid ? 'activenextButton' : 'nextButton' } disabled={!isFormValid} type='button' onClick={(e)=>handleNext(e)}><span>NEXT</span> <span><BsArrowRight /></span></button>
            </div>
        </div>
        </div>
    </Layout>
  )
}

export default CreateSurvey