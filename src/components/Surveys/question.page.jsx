import React from 'react'
import Layout from '../Layout/layout'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import {BsEmojiFrownFill, BsEmojiSmileFill, BsEmojiKissFill} from 'react-icons/bs'
import {MdEmojiEmotions} from 'react-icons/md'
import {HiEmojiSad} from 'react-icons/hi'
import {AiFillLike, AiFillDislike} from 'react-icons/ai'
import ToggleSwitch from './toggleSwitch'
import Model from './model'
const QuestionPage = () => {
    const location = useLocation()
    // const [currentQuestion, setCurrentQuestion] = useState(0);
    const [dialogOpen, setDialogOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState('Single Choice')
    // const handleNextQuestion = () => {
    //     setCurrentQuestion(currentQuestion + 1);
    //   };
    const handleSurvey = (e) => {
        console.log('called')
        e.preventDefault()
        setDialogOpen(true)
    }
    const handleCloseDialog =()=>{
        setDialogOpen(false)
    }
    const renderQuestion = (questionType) => {
        switch(questionType){
            case 'Single Choice':
                return (
                    <div className='questionContainer'>
                    <input type='text' className='questionInput' placeholder='Type your question here'/>
                    <hr  className='questionLine'/>
                    <ul className='optionsContainer'>
                        <li style={{display:'flex', flexDirection:'column', justifyContent:'initial'}}>
                        <label style={{textAlign:'left', marginBottom:'0.5rem', color:'#9e9e9e'}}>option 1</label>
                        <input type='text' className='optionInput' />
                        </li>
                        <li style={{display:'flex', flexDirection:'column', justifyContent:'initial'}}>
                        <label style={{textAlign:'left', marginBottom:'0.5rem', color:'#9e9e9e'}}>option 2</label>
                        <input type='text' className='optionInput' />
                        </li>
                       
                        
                    </ul>
                </div>
                )
            case 'Multiple Choice':
                return (
                    <div className='questionContainer'>
                    <input type='text' className='questionInput' placeholder='Type your question here'/>
                    <hr  className='questionLine'/>
                    <ul className='optionsContainer'>
                        <li style={{display:'flex', flexDirection:'column', justifyContent:'initial'}}>
                        <label style={{textAlign:'left', marginBottom:'0.5rem', color:'#9e9e9e'}}>option 1</label>
                        <input type='text' className='optionInput' />
                        </li>
                        <li style={{display:'flex', flexDirection:'column', justifyContent:'initial'}}>
                        <label style={{textAlign:'left', marginBottom:'0.5rem', color:'#9e9e9e'}}>option 2</label>
                        <input type='text' className='optionInput' />
                        </li>
                        <li style={{display:'flex', flexDirection:'column', justifyContent:'initial'}}>
                        <label style={{textAlign:'left', marginBottom:'0.5rem', color:'#9e9e9e'}}>option 3</label>
                        <input type='text' className='optionInput' />
                        </li>
                        <li style={{display:'flex', flexDirection:'column', justifyContent:'initial'}}>
                        <label style={{textAlign:'left', marginBottom:'0.5rem', color:'#9e9e9e'}}>option 4</label>
                        <input type='text' className='optionInput' />
                        </li>
                        
                    </ul>
                </div>
                )
            case 'Short Answer':
                return (
                    <div className='questionContainer'>
                    <input type='text' className='questionInput' placeholder='Type your question here'/>
                    <hr  className='questionLine'/>
                </div>
                )
            case 'Long Answer':
                return (
                    <div className='questionContainer'>
                    <input type='text' className='questionInput' placeholder='Type your question here'/>
                    <hr  className='questionLine'/>
                </div>
            )
            case 'Star Rating':
                return (
                    <div className='questionContainer'>
                    <input type='text' className='questionInput' placeholder='Type your question here'/>
                    <hr  className='questionLine'/>
                    <ul className='optionsContainer'>
                        <li style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center',width:'100px', height:'100px', border:'1px solid #f4c92e', borderRadius:'4px'}}>
                        <FaStar className='starIcon'/>
                        <h1 style={{fontSize:'15px'}}>one</h1>
                        </li>
                        <li style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center',width:'100px', height:'100px', border:'1px solid #f4c92e', borderRadius:'4px'}}>
                        <FaStar className='starIcon'/>
                        <h1 style={{fontSize:'15px'}}>Two</h1>
                        </li>
                        <li style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center',width:'100px', height:'100px', border:'1px solid #f4c92e', borderRadius:'4px'}}>
                        <FaStar className='starIcon'/>
                        <h1 style={{fontSize:'15px'}}>Three</h1>
                        </li>
                        <li style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center',width:'100px', height:'100px', border:'1px solid #f4c92e', borderRadius:'4px'}}>
                        <FaStar className='starIcon'/>
                        <h1 style={{fontSize:'15px'}}>Four</h1>
                        </li>
                        <li style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center',width:'100px', height:'100px', border:'1px solid #f4c92e', borderRadius:'4px'}}>
                        <FaStar className='starIcon'/>
                        <h1 style={{fontSize:'15px'}}>Five</h1>
                        </li>
                       
                        
                    </ul>
                </div>
                )
            case 'Emoji Rating':
                return (
                    <div className='questionContainer'>
                    <input type='text' className='questionInput' placeholder='Type your question here'/>
                    <hr  className='questionLine'/>
                    <ul className='optionsContainer'>
                        <li style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center',width:'100px', height:'100px', border:'1px solid #f4c92e', borderRadius:'4px'}}>
                        <BsEmojiFrownFill className='starIcon'/>
                        <h1 style={{fontSize:'15px'}}>Terrible</h1>
                        </li>
                        <li style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center',width:'100px', height:'100px', border:'1px solid #f4c92e', borderRadius:'4px'}}>
                        <HiEmojiSad className='starIcon'/>
                        <h1 style={{fontSize:'15px'}}>Bad</h1>
                        </li>
                        <li style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center',width:'100px', height:'100px', border:'1px solid #f4c92e', borderRadius:'4px'}}>
                        <BsEmojiSmileFill className='starIcon'/>
                        <h1 style={{fontSize:'15px'}}>Okay</h1>
                        </li>
                        <li style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center',width:'100px', height:'100px', border:'1px solid #f4c92e', borderRadius:'4px'}}>
                        <MdEmojiEmotions className='starIcon'/>
                        <h1 style={{fontSize:'15px'}}>Good</h1>
                        </li>
                        <li style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center',width:'100px', height:'100px', border:'1px solid #f4c92e', borderRadius:'4px'}}>
                        <BsEmojiKissFill className='starIcon'/>
                        <h1 style={{fontSize:'15px'}}>Great</h1>
                        </li>
                        
                        
                    </ul>
                </div>
                )   
            case 'Number Rating':
                return (
                    <div className='questionContainer'>
                    <input type='text' className='questionInput' placeholder='Type your question here'/>
                    <hr  className='questionLine'/>
                    <ul className='numbersContainer'>
                        <li style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center',width:'50px', height:'50px', border:'1px solid #f4c92e', borderRadius:'4px'}}>
                        <h1 style={{fontSize:'15px'}}>1</h1>
                        </li>
                        <li style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center',width:'50px', height:'50px', border:'1px solid #f4c92e', borderRadius:'4px'}}>
                        <h1 style={{fontSize:'15px'}}>2</h1>
                        </li>
                        <li style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center',width:'50px', height:'50px', border:'1px solid #f4c92e', borderRadius:'4px'}}>
                        <h1 style={{fontSize:'15px'}}>3</h1>
                        </li>
                        <li style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center',width:'50px', height:'50px', border:'1px solid #f4c92e', borderRadius:'4px'}}>
                        <h1 style={{fontSize:'15px'}}>4</h1>
                        </li>
                        <li style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center',width:'50px', height:'50px', border:'1px solid #f4c92e', borderRadius:'4px'}}>
                        <h1 style={{fontSize:'15px'}}>5</h1>
                        </li>
                        <li style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center',width:'50px', height:'50px', border:'1px solid #f4c92e', borderRadius:'4px'}}>
                        <h1 style={{fontSize:'15px'}}>6</h1>
                        </li>
                        <li style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center',width:'50px', height:'50px', border:'1px solid #f4c92e', borderRadius:'4px'}}>
                        <h1 style={{fontSize:'15px'}}>7</h1>
                        </li>
                        <li style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center',width:'50px', height:'50px', border:'1px solid #f4c92e', borderRadius:'4px'}}>
                        <h1 style={{fontSize:'15px'}}>8</h1>
                        </li>
                        <li style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center',width:'50px', height:'50px', border:'1px solid #f4c92e', borderRadius:'4px'}}>
                        <h1 style={{fontSize:'15px'}}>9</h1>
                        </li>
                        <li style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center',width:'50px', height:'50px', border:'1px solid #f4c92e', borderRadius:'4px'}}>
                        <h1 style={{fontSize:'15px'}}>10</h1>
                        </li>
                        
                    </ul>
                </div>
                ) 
            case 'Yes/No':
                return (
                    <div className='questionContainer'>
                    <input type='text' className='questionInput' placeholder='Type your question here'/>
                    <hr  className='questionLine'/>
                    <ul className='yesnoContainer'>
                        <li style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center',width:'100px', height:'100px', border:'1px solid #f4c92e', borderRadius:'4px'}}>
                        <AiFillLike className='starIcon'/>
                        <h1 style={{fontSize:'15px'}}>Yes</h1>
                        </li>
                        <li style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center',width:'100px', height:'100px', border:'1px solid #f4c92e', borderRadius:'4px'}}>
                        <AiFillDislike className='starIcon'/>
                        <h1 style={{fontSize:'15px'}}>Bad</h1>
                        </li>                        
                    </ul>
                </div>
                )   
            default:
                break;   
        }
    }
  return (
    <Layout>    
        <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', height:'90vh'}}>
           <div>
            <div className='headerContainer'>
                <h1 className='createSurveyHeading'>Create Survey-{location.state.surveyname}</h1>
            </div>
            <div style={{display:'flex', width:'100%', padding:'30px'}}>
                <div style={{width:'80%'}}>
                <div className='questionTypeContainer'>
                    <h1 className='question'>Question</h1>
                        <div style={{display:'flex', justifyContent:"space-between", width:'35%'}}>

                        <ToggleSwitch label='Required'/>
                    
                    <select name="questiontype" onChange={(e)=>setSelectedOption(e.target.value)} value={selectedOption} className='selectType'>
                        <option value="Single Choice" >Single Choice</option>
                        <option value="Multiple Choice">Multiple Choice</option>
                        <option value="Short Answer">Short Answer</option>
                        <option value="Long Answer">Long Answer</option>
                        <option value="Star Rating">Star Rating</option>
                        <option value="Emoji Rating">Emoji Rating</option>
                        <option value="Number Rating">Number Rating</option>
                        <option value="Yes/No">Yes/No</option>
                    </select>
                        </div>
                </div>
                {renderQuestion(selectedOption)}
                </div>
                <div style={{width:'18%', backgroundColor:'#ffffff', marginLeft:'1rem', marginRight:'1rem', height:'55vh', borderRadius:'8px', padding:'1rem'}}>
                    <h1 className='listHeading'>questions List</h1>
                    <hr className='listLine' />
                </div>
            </div>
           </div>
            <div style={{display:'flex', flexDirection:'column', padding:'30px'}}>
            <hr  className='bottomLine'/>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <button className='surveyButtons'>+ADD NEW QUESTION</button>
                <button className='surveyButtons' onClick={(e)=>handleSurvey(e) }>SHARE SURVEY</button>
            </div>
            </div>
        </div>
       { dialogOpen && <Model onClose={handleCloseDialog}/>}
    </Layout>
  )
}

export default QuestionPage