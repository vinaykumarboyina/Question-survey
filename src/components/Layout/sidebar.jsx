import React from 'react'
import { ListContainer, ListItems, SidebarContainer, SpanEl } from './styledComponents'
import surveyImage from '../Assets/my_surveys@2x.png'
import requestSurvey from '../Assets/requested_surveys@2x.png'
import './layout.css'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    return(
    <SidebarContainer>
        <h1 className='sidebarHeading'>Surveys</h1>
        <div style={{display:'flex',flexDirection:'column', justifyContent:'space-between',height:'70%' }}>
        <ListContainer>
            <Link to='/'>
                <ListItems>
                    <img src={surveyImage} alt='survey' height={30} width={30} style={{marginRight:"10px"}}></img><SpanEl>My Surveys</SpanEl>
                </ListItems>
            </Link>
            <Link to='/requestedSurveys'>
                <ListItems>
                    <img src={requestSurvey} alt='survey' height={30} width={30} style={{marginRight:"10px"}}></img><SpanEl>Requested Surveys</SpanEl>
                </ListItems>
            </Link>
        </ListContainer>
        <div style={{display:'flex', flexDirection:'column',}}>
            <h1 className='quote'>"Hard work will pay off later laziness"</h1>
            <p className='author'>-Adam Smith</p>
        </div>
        </div>
    </SidebarContainer>
    )
}
export default Sidebar