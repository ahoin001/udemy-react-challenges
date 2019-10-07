import React from 'react';
import './Output.css'

const userOutput = (props) => {

      return(
        
            <div>

                <p> Hello there my name is {props.userName}</p>
                <p> I'm learning to use {props.code} library</p>


            </div>

        
      )

}
export default userOutput;