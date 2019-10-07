import React from 'react';
// Use css from external stylesheet
import './Output.css'

const userOutput = (props) => {

      return(
        
            <div className='blah'>

                <p> Hello there my name is {props.userName}</p>
                <p> I'm learning to use {props.code} library</p>


            </div>

        
      )

}
export default userOutput;