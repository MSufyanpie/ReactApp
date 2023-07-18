
import React from 'react'
import './ExerciseComponent.css'
import './Component2.jsx'

export default function ExerciseComponent(props) {
 
  return (
    <div>

        {/* <div className='flex-container'> */}
        <h1>lets get started</h1>
          
          <div className='Name'>{props.about.name}</div>
          <div className='Content'>{props.about.content}</div>
          <button className='Button' onClick={Clicked}>Change</button>
          
          
          
        {/* </div> */}
        
        
        
        </div>
  )
}




// export default class ExerciseComponent extends Component {
  
  
//   render() {
//     // const{intro,setName}=useState(about.name)
//     const {about}=this.props
    
//     const Clicked=()=>{
//    setName('React Intro')
//     }
//     return (
      
//       <div class='info'>

//         <div className='flex-container'>
          
//           <div className='Name'>{about.name}</div>
//           <div className='Content'>{about.content}</div>
//           <button className='Button' onClick={Clicked}>Change</button>
          
//           {/* <div className='ID'>{about.id}</div>
//           <div className='Company'>{about.company}</div> */}
          
//         </div>
        
        
        
//         </div>
//     )
//   }
// }
