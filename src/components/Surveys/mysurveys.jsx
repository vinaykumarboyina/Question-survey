import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Layout from '../Layout/layout'
import './surveys.css'
import gridImage from '../Assets/view_grid.png'
import listImage from '../Assets/view_list.png'
import GridCard from './gridCard'
import ListCard from './listCard'
const Mysurveys = () => {
  const [gridView, setGridView] = useState(true)
  const [listView, setListView] = useState(false)
  const navigate = useNavigate()
  const changeView = () => {
    setGridView(!gridView)
    setListView(!listView)
  }
  const navigateToCreateSurvey = () => {
    navigate('/createSurvey')
  }
  return (
   <Layout>
      <div style={{display:'flex', flexDirection:'column', paddingTop:'50px'}}>
        <div className='surveyContainer'>
          <h1 className='heading'>My Surveys</h1>
         <div style={{display:'flex', justifyContent:'space-between', width:'50%'}}>
         <div className='selectDropdown'>
            <label for='sort'>sort by:</label>
            <select id='sort' className='select'>
              <option value='date'>Date</option>
            </select>
          </div>
          <div>
            <button className={gridView ? 'activeButton': 'normalButton'} onClick={changeView}><img src={gridImage} alt='grid' /></button>
            <button className={listView? 'activeButton': 'normalButton'}  onClick={changeView}><img src={listImage} alt='grid' /></button>

          </div>
          <button className='surveyButton' onClick={navigateToCreateSurvey}>CREATE SURVEY</button>
         </div>
        </div>
        <div style={{padding:'30px'}}>
          {gridView ? <GridCard /> : <ListCard /> }
          
          
        </div>
      </div>
   </Layout>
  )
}

export default Mysurveys