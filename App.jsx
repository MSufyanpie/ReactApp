import React from "react";

import ExerciseComponent from "./component/ExerciseComponent.jsx";


const App = () => {
  const info = [
    {  
      
      name: "React JS",
     content:" The React.js framework is an open-source JavaScript framework and library developed by Facebook.", 
    },
    {  
     
      name: "React JS",
     content:" The React.js framework is an open-source JavaScript framework and library developed by Facebook.", 
    }

  
  ];

  return (
    <>
    
    
      <ExerciseComponent  about={info[0].n}></ExerciseComponent>
       <ExerciseComponent about={info[1]}></ExerciseComponent>
      
      
    </>
  );
};

export default App;
